import { VueChatEmoji } from "@nguyenvanlong/vue3-chat-emoji";
import "@nguyenvanlong/vue3-chat-emoji/dist/index.mjs.css";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueChatEmoji)
})
