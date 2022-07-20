import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers:{"API-KEY":"0a67634a-1249-4fdb-af85-ffcea0896354"}
})
export const userAPI = {
    getUsers(currentPage, pageSize){
      return  instance.get(`users?page=${currentPage}&count=${pageSize}`).
      then(response=>{
            return response.data;
      })
    },
    addUsersFromServer(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).
        then(response=>{
            return response.data;
        })
    },
    followOnUser(userId){
        return instance.post(`follow/${userId}`).
        then(response=>{
            return response.data;
        })
    },
    unfollowFromUser(userId){
        return instance.delete(`follow/${userId}`).
        then(response=>{
            return response.data;
        })
    }


}