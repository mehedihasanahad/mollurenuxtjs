<template>
  <div class="pb-16 bg-white">
    <div class="mt-10 min-h-40 w-full border border-2 border-gray-100 rounded-lg flex">
      <div class="w-full md:w-[45%] lg:w-[43%] 2xl:w-[35%] md:border-r md:border-r-2 border-r-gray-100">
        <ChatboxLeftPart class="bg-white"/>
      </div>
      <div class="hidden md:block md:w-[55%] lg:w-[57%] 2xl:w-[65%]">
        <ChatboxRightPart/>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'global'
})
</script>
