<template>
  <div>
    <!-- chat right header -->
    <ChatRightHeader/>

    <!-- chat main box -->
    <div class="h-[68vh] border-b border-b-2 border-b-gray-100"></div>

    <!-- chat footer -->
    <div class="relative p-5 border-b border-b-2 border-b-gray-100">
      <input type="text" placeholder="Type Message" class="text-gray-400 bg-[#F4F4F4] rounded-lg p-4 pr-14 w-full focus:border-none focus:outline-none"/>
      <div class="absolute right-8 top-9 cursor-pointer">
        <img draggable="false" src="/public/images/blog/comment-send-green.svg" alt="blog-comment-reply-send-green-btn"/>
      </div>
    </div>

    <!-- upload section -->
    <div class="p-5 flex gap-x-6 [&>img]:cursor-pointer">
      <img draggable="false" src="/public/Icons/chat/bx_image.svg" alt="file-upload" />
      <img draggable="false" src="/public/Icons/chat/material-symbols_attach-file-add-rounded.svg" alt="file-upload" />
      <img draggable="false" src="/public/Icons/chat/ic_round-mic.svg" alt="file-upload" />
      <img draggable="false" src="/public/Icons/chat/tabler_mood-smile.svg" alt="file-upload" />
    </div>

  </div>
</template>
