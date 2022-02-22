import React, { useState } from "react";
import MyInp from "./input/MyInp";
import MyButton from "./button/button";


function PostForm({ create }) {
  const [post, setPost] = useState({ title: '', body: '' })

  function addNewPost(e) {
    e.preventDefault()
    const newPost = {
      ...post
    }
    create(newPost)

    setPost(({ title: '', body: '' }))

  }
  return (
    <form>
      <MyInp value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} type="text" placeholder='Название поста' />
      <MyInp value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} type="text" placeholder='Описание поста' />

      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}
export default PostForm