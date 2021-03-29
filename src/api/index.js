import request from "../utils/request.js"
export function login(params){
//登录接口
        return request.post('/login',params)
    }
//轮播图
export function lunbotu(data){
    return request.get('/carousel',{params:data})
}
//商品列表
export function goodslist(data){
    return request.get('/goods',{params:data})
}
//获取单个商品  详情页
export function goods(id){
    return request.get(`/goods/${id}`)
    // return request.get('/goods' + id)
}
// --------购物车部分-------------
//购物车
export function addcart(params){
    return request.post("/shoppingCart",params)
}
//获取购物车
export function getcart(){
    return request.get("/shoppingCart?project_id=13")
}
//删除购物车内单品
export function delcart(id){
    return request.delete(`/shoppingCart/${id}`) 
}
//更新购物车内单品
export function updatacart({id,num}={}){
    return request.put(`/shoppingCart/${id}`,{num:num}) 
}

// -------地址管理----------
//http://shopback.bluej.cn/api/city
//获取所有城市信息用于级联选择器
export function getCity(){
    return request.get(`/city`)
}
//新增收货地址
export function addAddress(data){
    return request.post("/address",data)
}
//获取所有收货地址
export function getAddress(){
    return request.get("/address")
}
//删除订单地址信息
export function delAddress(id){
    return request.delete(`/address/${id}`)
}
//更新修改地址
export function updataAddress(id,data){
    return request.put('/address/'+id,data)
}
//===========订单部分=======
//添加订单
export function createOrder(data){
    return request.post("/order",data)
}