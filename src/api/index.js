import axios from '@/getAxios.js'

let api = {
  // 请求数据的方法
  getSearch () {
    return axios.get('/api/meituan/header/search.json')
  },
  getLeftNav () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getStyle () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getClassifyList () {
    return axios.get('/api/meituan/list/classify.json')
  },
  getArea () {
    return axios.get('/api/meituan/list/areaList.json')
  },
  getGoodsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getProvince () {
    return axios.get('/api/meituan/city/province.json')
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getCity () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getCurCity () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api
