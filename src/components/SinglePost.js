import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PostAuthor from '../features/posts/PostAuthor';
import {selectPostById } from '../features/posts/postsSlice';
import ReactionButtons from '../features/posts/ReactionButtons';
import TimeAgo from '../features/posts/TimeAgo';

const SinglePost = () => {
  const { postId } = useParams()
  const post = useSelector((state) => selectPostById(state, Number(postId)))
  
  console.log(post)

  if (!post) {
    return (
        <section>
            <h2>Post not found!</h2>
        </section>
    )
}

  return (
    <article className='single' >
    <h3>{post.title}</h3>
    <p>{post.body}</p>
      <p className="postCredit">
      <Link className=' mr-4 hover:text-blue-500' to={`/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
  </p>
  
        <ReactionButtons post={post } />
</article>
  )
}

export default SinglePost