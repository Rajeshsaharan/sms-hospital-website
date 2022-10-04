import {createStore, combineReducers, applyMiddleware} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from "@redux-devtools/extension"
import { userReducer } from "./User/UserReducer"
import { articleReducer } from "./Article/ArticleReducer"



const rootReducer = combineReducers({
    user : userReducer,
    articles : articleReducer
})
const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store;