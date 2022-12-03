import axios, {AxiosInstance, AxiosResponse} from "axios";
import {getToken} from "./token";
import {toast} from "react-toastify";
import {StatusCodes} from 'http-status-codes'


const BASE_URL = 'https://8.react.pages.academy/six-cities'
const TIMEOUT = 5000

const ErrorCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
}

const shouldDisplayError = (response: AxiosResponse) => ErrorCodeMapping[response.status]

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  })

  api.interceptors.request.use((config) => {
    const token = getToken()

    if (token) {
      if (config.headers) {
        config.headers['X-Token'] = token
      } else {
        config.headers = {['X-Token']: token}
      }
    }
    return config
  })

  api.interceptors.response.use((response) => response,
    (error) => {
      if (error.response && shouldDisplayError(error.response)) toast.warn(error.response.data.error)
      throw error
    }
  )

  return api

}
