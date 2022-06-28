import axios from "axios";

// http://43.138.23.77:8889/api/news 新闻api
const request = axios.create({
    baseURL:"http://43.138.23.77:8889"
})

export default request;