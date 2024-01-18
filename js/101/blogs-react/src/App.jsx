import { useState } from 'react'
import './App.css'
import Blog from './Blog'
import BlogList from './BlogList'
import Header from './Header'

function App() {
  const [selectedBlog, setSelectedBlog] = useState();

  return (
    <>
      <Header setSelectedBlog={setSelectedBlog} />
      {/*<BlogList setSelectedBlog={setSelectedBlog} />
      <hr />
      <Blog selectedBlog={selectedBlog} />*/}
      {selectedBlog
        ? <Blog selectedBlog={selectedBlog} />
        : <BlogList setSelectedBlog={setSelectedBlog} />}
    </>
  )
}

export default App
