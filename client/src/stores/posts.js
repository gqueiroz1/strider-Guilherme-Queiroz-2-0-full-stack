import { defineStore } from "pinia";
import { useUsersStore } from "./users";
import api from "../helpers/api";

const storeUsers = useUsersStore()

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: []
  }),
  getters: {
    getPosts: state => state.posts
  },
  actions: {
    async fetchPosts (query) {
      const { data: { posts } } = await api.get(`/posts?${query || ''}`)
      this.posts = posts
    },

    async createPost (payload) {
      const { data: { post } } = await api.post('/posts', {
        text: payload.text,
        creator: "gqueiroz1"
      })

      this.posts.unshift(post)

      await storeUsers.validateUserCanPost()
    },

    async repost (payload) {
      const { result, data: { post } } = await api.post('/posts/repost', { 
        ...payload, repostedFrom: payload.creator 
      })

      const index = this.posts.findIndex(({ _id }) => _id === payload._id)
      this.posts[index].reposts = post.reposts
      this.posts.unshift(post)

      await storeUsers.validateUserCanPost()

      return result
    }
  }
})