import axios, {AxiosInstance} from "axios";

const BASE_URL = 'https://8.react.pages.academy/six-cities'
const TIMEOUT = 5000

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: 'https://8.react.pages.academy/six-cities',
    timeout: TIMEOUT
  })

  return api

}
