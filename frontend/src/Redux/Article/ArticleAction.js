import { FETCH_ARTICLE_FAIL } from "./ArticleTypes";
import { FETCH_ARTICLE_REQUEST } from "./ArticleTypes";
import { FETCH_ARTICLE_SUCCESS } from "./ArticleTypes";
import axios from "axios"

export const  articleFetch = ()=>{
    return {
        type : FETCH_ARTICLE_REQUEST,
        info : "fetching article",
    }
}

export const articleFetchedSuccess = (articles)=>{
    return {
        type : FETCH_ARTICLE_SUCCESS,
        info : "fetching article success",
        payload : articles
    }
}

export const  articleFetchFail = (error)=>{
    return {
        type : FETCH_ARTICLE_FAIL,
        info : "fetching article failed",
        payload: error
    }
}


export const FetchArticle = ()=>{
    return (dispatch)=>{
            dispatch(articleFetch())
            axios.get('http://localhost:7000/articles')
            .then((response)=>{
                const data = response.data
                dispatch(articleFetchedSuccess(data))
            })
            .catch((e)=>{
                const error = error.message
                dispatch(articleFetchFail(error))
            })
    }
}