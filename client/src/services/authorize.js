
export const authenticate = (response )=>{
    if(window !== "undefined"){
        sessionStorage.setItem("token", JSON.stringify(response.data.token))
        sessionStorage.setItem("user", JSON.stringify(response.data.username))
    }
}

// Get data from token
export const getToken=()=>{
    if(window !== "undefined"){
        if(sessionStorage.getItem("token")){
            return JSON.parse(sessionStorage.getItem("token"))
        }else{
            return false
        }
    }
}
// Get user data
export const getUser=()=>{
    if(window !== "undefined"){
        if(sessionStorage.getItem("user")){
            return true
        }else{
            return false
        }
    }
}

export const logout=()=>{
    if(window !== "undefined"){
       sessionStorage.removeItem('token')
       sessionStorage.removeItem('user')
    }
}