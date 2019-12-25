import HttpRequest from '@/libs/axios'
const apiUrl = process.env.NODE_ENV === 'development' ? 'https://edu.smallnews.top/' : config.apiUrl.pro

const axios = new HttpRequest(apiUrl)
export default axios
