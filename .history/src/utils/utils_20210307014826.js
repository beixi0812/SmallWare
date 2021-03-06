export default{
    GET_LOCAL_ITEM(key){
        return localStorage.getItem(key)
    },
    SET_LOCAL_ITEM(key,value){
        return localStorage.setItem(key,value)
    },
}