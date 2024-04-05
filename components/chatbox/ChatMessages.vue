<template>
  <div class="h-[68vh] border-b border-b-2 border-b-gray-100 overflow-auto globalCustomScrollBar">
    <ChatSingleMessage v-for="n in 2" :key="n"/>

    <!-- day wise border -->
    <ChatDayWiseBorder/>

    <!-- duplicate design just showcase -->
    <div v-for="n in 4" :key="n" class="flex justify-between px-4 py-6 items-start">
      <div class="flex gap-x-3">
        <div class="w-9 h-9 rounded-full">
          <img draggable="false" class="w-9 h-9 object-cover rounded-full" src="/public/images/blog/blog-comment-1.svg" alt="blog-commenter-image"/>
        </div>

        <div class="w-full">
          <div class="flex gap-x-2 items-center">
            <h6 class="text-lg cursor-pointer">Roman Reigns</h6>

            <span class="w-1 h-1 bg-gray-400 rounded-full"></span>

            <p class="text-gray-400">08:17 pm</p>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur. Duis cras sit sapien libero. Congue duis a ut dolor suspendisse vivamus elit tempus. Lorem tincidunt non condimentum eget donec commodo sapien. Vitae urna aliquam et nisi tempor et risus. Molestie porta proin lacus nulla. Felis ultrices curabitur cursus ultrices tincidunt donec dictumst. Hendrerit faucibus urna sem amet sit.</p>
        </div>
      </div>

      <!-- Chat options -->
      <img src="/public/Icons/chat-option.svg" alt="chat-options"/>
    </div>
  </div>
</template>
