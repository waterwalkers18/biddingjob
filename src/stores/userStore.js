import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userType: '', // Stores 'client' or 'freelancer'
  }),
  actions: {
    setUserType(type) {
      console.log("Storing userType:", type) // Debugging
      this.userType = type // Updates userType in store
    }
  }
})
