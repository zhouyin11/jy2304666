import {http} from './http'

export const loginApi=(data:{username:string,password:string})=>{
    return http.post('/park/login',data)
}

export const menuApi=(data:{Authorization:string})=>{
    return http.get('/park/sys/permision/all/tree',data)
}

export const listApi=(data:{
    page:string,
    pageSize:string,
    carNumber?:string,
    personName?:string,
    cardStatus?:string,
})=>{
    return http.get('/parking/card/list',data)
}