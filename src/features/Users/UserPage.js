import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectAllPosts, selectPostsByUser } from '../posts/postsSlice'
import { selectUserById } from './UsersSlice'

const UserPage = () => {
    const { userId } = useParams()
    const user = useSelector(state => selectUserById(state, Number(userId)))
    console.log(userId)
    console.log(user)
    
    const postsForUser = useSelector(state=>selectPostsByUser(state,Number(userId)))

    const postTitles = postsForUser.map(post => (
        <li key={post.id}>
            <Link className=' hover:text-cyan-400 mt-5' to={`/${post.id}`}>{post.title}</Link>
        </li>
    ))
    return (
        <section>
            <h2>{user?.name}</h2>

            <ol >{postTitles}</ol>
        </section>
        )
};

export default UserPage