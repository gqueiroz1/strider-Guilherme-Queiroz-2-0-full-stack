import { defineStore } from "pinia";
import api from "../helpers/api";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
    defaultUser: 'gqueiroz1', //change this if you want to use another user :)
    postsLeft: 5,
    allowedToPost: true
  }),
  getters: {
    getUsers: state => state.users
  },
  actions: {
    async validateUserCanPost () {
      const { data } = await api.get(`/users/can-post/${this.defaultUser}`)
      this.postsLeft = data.postsLeft
      this.allowedToPost = data.allowedToPost
    }
  }
})