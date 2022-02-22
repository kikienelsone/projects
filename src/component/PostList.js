import React from "react";
import { TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";
import { CSSTransition } from "react-transition-group";
function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>
        Посты не были найдены!
      </h1>
    )
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames='post'
          >

            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>

        )}
      </TransitionGroup>


    </>
  )
}
export default PostList