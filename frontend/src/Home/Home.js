import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Learn from '../Learn/Learn'
import Ward from '../Ward/Ward'
import About from '../About/About'
import Article from '../Learn/Article/Article'
import Question from '../Learn/Question/Question'
import ArticleDetails from '../Learn/Article/ArticleDetails'
import Navbar from '../NavBar/Navbar'
import WardDetails from '../Ward/WardDetails'
import AddWard from '../Ward/AddWard'
import SidebarRight from '../SideBar/SidebarRight'
function Home() {
  return (
    <>
      
      <div className='root'>
      <Navbar/> 
        <Sidebar />
        <SidebarRight/>
        <Routes>
          <Route exect path="/wards" element={<Ward />} />
          <Route exect path = "/wards/:wardId" element= {<WardDetails/>}></Route>
          <Route exect path="/learn" element={<Learn />}>
            <Route index element = {<Article/>}/>
            <Route path="/learn/article/all" element={<Article />} >
              </Route>
            <Route path="/learn/question/all" element={<Question />} />
          </Route>
          <Route exect path="about" element={<About />} />
          <Route path='/learn/article/:articleId' element= {<ArticleDetails/>}/>
          <Route exect path = "/wards/add" element = {<AddWard/>}></Route>
        </Routes>
      
    

      </div>



    </>
  )
}

export default Home