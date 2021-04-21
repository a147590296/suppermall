import axios from "axios";

export function request(config){
  //1.创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2.发送请求拦截器
  instance.interceptors.request.use(config =>{
    //2.1 请求成功拦截

    return config
  },error => {
    //2.2请求失败拦截
  })

  //3.响应（返回）拦截器
  instance.interceptors.response.use(res =>{
    //3.1 响应（返回）成功拦截
    return res.data
  },error => {
    //3.2 响应（返回）错误拦截

  })

  //4.发送真正的网络请求
  return instance(config)
}

export function request_2(config){
  //1.创建axios实例
  const instance = axios.create({
    baseURL:'https://www.yiroad168.com',
    timeout: 5000
  })
  //2.发送请求拦截器
  instance.interceptors.request.use(config =>{
    //2.1 请求成功拦截

    return config
  },error => {
    //2.2请求失败拦截
  })

  //3.响应（返回）拦截器
  instance.interceptors.response.use(res =>{
    //3.1 响应（返回）成功拦截
    return res.data
  },error => {
    //3.2 响应（返回）错误拦截

  })

  //4.发送真正的网络请求
  return instance(config)

}
