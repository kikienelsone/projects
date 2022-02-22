import React, { useEffect, useState } from "react";
import PostList from "../component/PostList";
import '../styles/App.css'
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import MyModal from "../component/MyModal/MyModal";
import MyButton from "../component/button/button";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostServic";
import Loader from "../Loader/Loader";
import { useFething } from "../hooks/useFething";
import { getPageCount } from "../utils/pajes";
import Pagination from "../pagination/Pagination";


function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSeachedPosts = usePosts(posts, filter.sort, filter.query)



  const [fetchPost, isPostsLoading, postError] = useFething(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))

  })


  useEffect(() => {
    fetchPost(limit, page)
  }, [])


  function creatPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  }





  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPost(limit, page)

  }

  return (
    <>

      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={creatPost} />
      </MyModal>


      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSeachedPosts} title='Твой список постов' />
      {isPostsLoading &&

        <div style={{ display: "flex", justifyContent: 'center', marginTop: 50 }}><Loader /></div>


      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </>
  )
}

export default Posts;
