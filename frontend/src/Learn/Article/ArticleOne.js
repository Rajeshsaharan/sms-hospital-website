import React from 'react'
import {Link} from 'react-router-dom'
function ArticleOne(props) {
    const {title, _id} = props.article
  return (
    <div className='card'>
      <Link to = {`/learn/article/${_id}`}> {title} </Link>
      </div>
  )
}

export default ArticleOne