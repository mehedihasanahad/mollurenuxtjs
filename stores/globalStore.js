export const useGlobalStore = defineStore('websiteStore', {
    state: () => ({
        name: 'sdfsdf',
        description: ''
    }),
    persist: {
        storage: persistedState.localStorage,
    },
})
