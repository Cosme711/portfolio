import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://portfolio-api-cg.herokuapp.com/`,
    withCredentials: false, 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

export default {
    getData() {
        return apiClient.get('slider-projects')
    }
  }
