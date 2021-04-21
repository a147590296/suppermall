import {request,request_2} from "@/network/request";

export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}

export function getData(type,page){
  return request_2({
    url: '/wx_goods/search_a.do',
    params:{
      bid: type,
      p: page
    }
  })
}
