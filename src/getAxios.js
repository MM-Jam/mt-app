import axios from 'axios'

axios.defaults.baseURL = 'https://open.duyiedu.com'
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.params = {
    ...config.params,
    appkey: 'MM_JAM_1590920067448'
  }
  return config
})

export default axios
