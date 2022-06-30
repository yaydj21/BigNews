import axios from "axios";

// http://43.138.23.77:8889/api/news 新闻api
// http://127.0.0.1:3007
const request = axios.create({
    baseURL:"http://43.138.23.77:8889"
})

export default request;