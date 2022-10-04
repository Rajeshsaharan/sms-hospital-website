import React from 'react'
import {useParams} from "react-router-dom"
function ArticleDetails() {
    const params = useParams()
    const ArticleId = params.id

  return (
    <div>ArticleDetails - {ArticleId}</div>
  )
}

export default ArticleDetails