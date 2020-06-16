import * as axios from 'axios';

const customAxios = axios.create({ 
    baseURL: "https://social-network.samuraijs.com/api/",
    withCredentials: true,
    headers: {
        "API-KEY": "84d336ba-be1c-4636-bfd5-3ff34bbce80e" 
    //    "API-KEY": "749a0f7a-a9d2-441c-ad28-a769fbbb4d07"
    }
})

//запросы пользователей
export const usersAPI_REQ = { 

    getUsers(currNumber, userQuantity) {
        return customAxios.get(`1.0/users?page=${currNumber}&count=${userQuantity}`)
    },

    deleteFollow(id) {
        return customAxios.delete(`1.0/follow/${id}`)
    },

    postFollow(id) {
        return customAxios.post(`1.0/follow/${id}`, {})
    }

}

//запросы данных профиля
export const profileAPI_REQ = { 

    getProfile(id) {
        debugger
        return customAxios.get(`1.0/profile/${id}`)
    }

}

//запросы авторизации
export const authAPI_REQ = { 

    getAuth() {
        return customAxios.get("1.1/auth/me")
    },
    logIn(email, password, rememberMe) {
        return customAxios.post("1.1/auth/login", {
            email: email,
            password: password,
            rememberMe: rememberMe
          }
        )
    },
    logOut() {
        return customAxios.post("1.1/auth/logout", {} )
    }
}


export const statusAPI_REQ = { 
    getStatus(userId) {
        return customAxios.get(`1.0/profile/status/${userId}`
        )
    },
    setStatus(status) {
        return customAxios.put("1.0/profile/status", {
                status: status
          }
        )
    }
}