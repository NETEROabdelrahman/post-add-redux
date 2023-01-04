import React from 'react'
import AddPostForm from './features/posts/AddPostForm'
import PostsList from './features/posts/postsList'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import SinglePost from './components/SinglePost'
import Header from './components/Header'
import EditPostForm from './features/posts/EditPostForm'
import UsersList from './features/Users/UsersList'
import UserPage from './features/Users/UserPage'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<main className='App'>
          <PostsList />
        </main>} />
        <Route path='/:postId' element={<SinglePost />} />
        <Route path='/post' element={<AddPostForm />} />
        <Route path='/edit/:postId' element={<EditPostForm />} />
        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>
      </Routes>
    </Router>
   
  );
}

export default App