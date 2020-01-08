import HttpRequest from '@/libs/axios'
const apiUrl = process.env.NODE_ENV === 'development' ? 'https://api-test.94xinzhi.com/' : config.apiUrl.pro

const axios = new HttpRequest(apiUrl)
export default axios
