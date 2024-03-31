export const useGlobalStore = defineStore('websiteStore', {
    state: () => ({
        userInfo: null
    }),
    persist: {
        storage: persistedState.localStorage,
    },
})
