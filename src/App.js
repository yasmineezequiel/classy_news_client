import React, { Suspense } from 'react'
import ListArticles from './Components/ListArticles'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './index.css';
import CreateArticle from './Components/CreateArticle'
import Internationalization from './Components/Internationalization';

const App = () => {
  return (
    <>
      <Suspense fallback={(<div>Loading</div>)}>
        <ListArticles />
        <CreateArticle />
        <Signup />
        <Login />
        <Internationalization />
      </Suspense>
    </>
  )
}
export default App