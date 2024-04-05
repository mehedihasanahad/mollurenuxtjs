<template>
  <div class="fixed right-6 bottom-6 z-[99999]">
    <div class="relative">
      <ChatCircleBtn @click="chatModal = !chatModal"/>
      <div v-show="chatModal" class="absolute -top-[480px] right-0 shadow-lg rounded-lg border border-gray-100 bg-white min-w-80 min-h-44 transition duration-500 overflow-hidden">
        <ChatCircleModal @closeChatBox="closeChatBox" class="w-[320px] sm:w-[500px] xl:w-[600px] h-[450px]"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import ChatCircleBtn from "./chatbox/ChatCircleBtn.vue";

  const chatModal = ref(false);

  function closeChatBox() {
    chatModal.value = false;
  }
</script>
