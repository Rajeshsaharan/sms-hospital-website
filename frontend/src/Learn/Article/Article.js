import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { FetchArticle } from '../../Redux/Article/ArticleAction'
import ArticleOne from './ArticleOne'
function Article(props) {
  const { articles, fetchArticle} = props

  useEffect(() => {
   fetchArticle()
  }, [])


  const articleslist = articles.map((article)=>{
    //each child must have a key unique 
    return <ArticleOne key = {article._id} article = {article}></ArticleOne>
})

  return (
  

    <>
     
      <div>
        <form className='question'>
        <input type='text'></input>
        <button className='button-blue-light' type = "submit">Ask</button>
        </form>
      
      </div>
     
     <div className='article'>
      {
      articleslist.slice(0, 6)
      }
      
      </div>
    </>
    
   


   
  )
}

const mapStateToProps = state => ({
  articles: state.articles.Articles
});

const mapDispacthToProps = dispatch => {
  return {
      fetchArticle: () => {
          dispatch(FetchArticle())
      }
  };
};



export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Article);



