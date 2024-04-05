<template>
  <div class="border-b border-b-2 border-b-gray-100 px-4 py-4 flex justify-between">
    <div class="flex gap-x-3 items-center">
      <div class="flex items-center">
        <div class="relative w-9 h-9 rounded-full">
          <img class="w-9 h-9 object-cover rounded-full" src="/public/images/blog/blog-comment-1.svg" alt=""/>
          <div class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-customGreen border border-2 border-white"></div>
        </div>
      </div>
      <p class="text-lg">Messaging</p>
    </div>

    <div class="flex gap-x-3">
      <ChatHeaderSettings/>

      <ChatHeaderFilter/>
    </div>
  </div>
</template>
