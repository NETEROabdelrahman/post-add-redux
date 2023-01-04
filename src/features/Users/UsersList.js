import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUsers } from './UsersSlice'

const UsersList = () => {
    const users = useSelector(selectAllUsers)
  return (
      <section>
          <h2>users</h2>
          <ul className='flex-col mt-3 '>
              {users.map(user => {
                  return (
                      <li key={user.id} >
                          <span className=' text-cyan-400'>{user.id } - </span>
                          <Link className=' hover:text-cyan-400' to={`/user/${user.id}`}>{user.name}</Link>
                      </li>
                  )
              })}
          </ul>
      </section>
  )
}

export default UsersList