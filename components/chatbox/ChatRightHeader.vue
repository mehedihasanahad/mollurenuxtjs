<template>
  <div class="px-4 py-[0.75rem] cursor-pointer border-b border-b-2 border-b-gray-100 border-l border-l-4 border-l-white">
    <div class="flex justify-between">
      <div class="flex gap-x-3">
        <div class="w-9 h-9 rounded-full">
          <img draggable="false" class="w-9 h-9 object-cover rounded-full" src="/public/Icons/chat/pro-user.svg" alt="blog-commenter-image"/>
        </div>

        <div class="flex gap-x-2">
          <div>
            <h6 class="text-lg cursor-pointer">Criag Martha</h6>
            <p class="text-sm font-normal text-gray-400 -mt-1">online</p>
          </div>

          <div class="hidden sm:flex items-center mt-1 px-2 py-0.5 bg-[#F4F4F4] rounded-md gap-x-1 text-gray-500 text-sm h-[fit-content]">
            <p>133</p>
            <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
            <p>Confirmed</p>
            <span class="w-1 h-1 bg-gray-300"></span>
            <p>BR</p>
            <img src="/public/images/chat/Arrow_Down_Left_MD.svg" alt="chat-arrow"/>
          </div>
        </div>
      </div>

      <ChatActions/>
    </div>
  </div>
</template>
