import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'
import PostAuthor from './PostAuthor'
import { Link } from 'react-router-dom'
import React from 'react'



let PostExcerpt = ({post}) => {
  return (
    <article>
            <h3 className=' text-blue-400'>{post.title}</h3>
            <p className=' text-slate-400'>{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
          <Link className=' mr-4 hover:text-blue-300' to={`${post.id}`}>view post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />
          </p>
                <ReactionButtons post={post } />
        </article>
  )
}

PostExcerpt=React.memo(PostExcerpt)


export default PostExcerpt