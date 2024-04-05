<template>
  <div class="flex justify-between px-4 py-6 items-start">
    <div class="w-[95%] flex gap-x-3">
      <div class="w-9 h-9 rounded-full">
        <img draggable="false" class="w-9 h-9 object-cover rounded-full" src="/public/Icons/chat/pro-user.svg" alt="blog-commenter-image"/>
      </div>

      <div class="w-full">
        <div class="flex gap-x-2 items-center">
          <h6 class="text-lg cursor-pointer">Criag Martha</h6>

          <span class="w-1 h-1 bg-gray-400 rounded-full"></span>

          <p class="text-gray-400">08:15 pm</p>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur. Duis cras sit sapien libero. Congue duis a ut dolor suspendisse vivamus elit tempus. Lorem tincidunt non condimentum eget donec commodo sapien. Vitae urna aliquam et nisi tempor et risus. Molestie porta proin lacus nulla. Felis ultrices curabitur cursus ultrices tincidunt donec dictumst. Hendrerit faucibus urna sem amet sit.</p>
      </div>
    </div>

    <!-- Chat options -->
    <ChatMessageActions />
  </div>
</template>
