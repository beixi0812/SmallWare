import request from "../utils/request.js"
export default{
    login:(params)=>{
        return request.post('/login',params)
    }
}