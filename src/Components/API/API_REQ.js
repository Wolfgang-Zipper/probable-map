import * as axios from 'axios';

const customAxios = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/",
    withCredentials: true,
    headers: {
        "API-KEY": "749a0f7a-a9d2-441c-ad28-a769fbbb4d07"
    }
})

export const API_REQ = {

    getProfile(id) {
        return customAxios.get(`1.0/profile/${id}`)
    },

    getAuth() {
        return customAxios.get("1.1/auth/me")
    },

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