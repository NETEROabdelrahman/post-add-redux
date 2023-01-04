import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="Header text-blue-400">
    <h1>Redux Blog</h1>
    <nav>
        <ul>
            <li><Link className=' hover:text-cyan-300' to="/">Home</Link></li>
            <li><Link className=' hover:text-cyan-300' to="post">Add Post</Link></li>
            <li><Link className=' hover:text-cyan-300' to="user">authors</Link></li>
        </ul>
    </nav>
</header>
  )
}

export default Header