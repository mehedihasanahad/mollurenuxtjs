<template>
  <div class="fixed right-6 bottom-6 z-[99999]">
    <div class="relative">
      <div @click="chatModal = !chatModal" class="relative h-[70px] w-[70px] xl:h-[80px] xl:w-[80px] base-gradient rounded-full flex justify-center items-center cursor-pointer">
        <img draggable="false" src="/public/images/ant-design_message-outlined.svg" alt="chat-button">
        <div class="absolute -top-[5px] right-[3px] h-[24px] w-[24px] xl:h-[28px] xl:w-[28px] base-gradient rounded-full flex justify-center items-center border border-2 border-white text-sm text-white">
          23
        </div>
      </div>
      <div v-show="chatModal" class="absolute -top-[480px] right-0 shadow-lg rounded-lg border border-gray-100 bg-white min-w-80 min-h-44 transition duration-500 overflow-hidden">
        <ChatCircleModal class="w-[370px] sm:w-[500px] xl:w-[600px] h-[450px]"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  const chatModal = ref(false);
</script>
