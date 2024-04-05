<template>
  <div>
    <!-- chat right header -->
    <ChatRightHeader/>

    <!-- chat messages -->
    <div class="relative">
      <ChatMessages/>

      <!-- file upload modal -->
      <div v-if="fileUploadMod" class="absolute top-0 h-[68vh] bg-white w-full">
        <div class="h-[8vh] bg-[#F4F4F4] flex">
          <div class="w-full flex justify-center items-center">LoremIpsum.docx</div>
          <div class="w-20 flex justify-center items-center">
            <img @click="fileUploadMod = false" draggable="false" class="cursor-pointer" src="/public/Icons/chat/Close_LG.svg" alt="file-upload-cross"/>
          </div>
        </div>

        <div class="h-[60vh] flex flex-col justify-center items-center gap-4">
            <img draggable="false" src="/public/Icons/chat/solar_folder-line-duotone.svg" alt="file-upload-cross"/>
            <p class="text-2xl text-gray-500 font-[customfontSemibold]">No Preview Available</p>
            <p class="text-gray-500 text-md">12.3 Kb</p>
        </div>
      </div>
    </div>

    <!-- chat footer -->
    <div class="relative p-5 border-b border-b-2 border-b-gray-100">
      <input type="text" v-model="message" placeholder="Type Message" class="text-gray-400 bg-[#F4F4F4] rounded-lg p-4 pr-14 w-full focus:border-none focus:outline-none"/>
      <div class="absolute right-8 top-9 cursor-pointer">
        <img draggable="false" src="/public/images/blog/comment-send-green.svg" alt="blog-comment-reply-send-green-btn"/>
      </div>
    </div>

    <!-- upload section -->
    <div v-if="!fileUploadMod" class="p-5 flex gap-x-6">
      <!-- image upload -->
      <div>
        <label for="uploadImage">
          <img class="cursor-pointer" draggable="false" src="/public/Icons/chat/bx_image.svg" alt="image-upload" />
        </label>
        <input @change="uploadFile" type="file" class="hidden" id="uploadImage" accept="image/*">
      </div>

      <!-- file upload -->
      <div>
        <label for="uploadFile">
          <img class="cursor-pointer" draggable="false" src="/public/Icons/chat/material-symbols_attach-file-add-rounded.svg" alt="file-upload" />
        </label>
        <input @change="uploadFile" type="file" class="hidden" id="uploadFile" accept="application/msword,application/pdf,application/json,application/vnd.ms-excel,application/vnd.ms-powerpoint,text/plain">
      </div>

      <!-- voice upload -->
      <img @click="uploadFile" draggable="false" src="/public/Icons/chat/ic_round-mic.svg" alt="file-upload" />

      <!-- emojis -->
      <ChatEmoji @getEmoji="getEmoji"/>
    </div>

    <!-- file upload preview footer-->
    <div v-if="fileUploadMod" class="p-5 flex gap-x-6 justify-center">
      <div class="relative p-3.5 border border-2 border-customGreen bg-[#D5D5D5]">
        <img draggable="false" src="/public/Icons/chat/solar_folder-line-duotone-black.svg" alt="chat-uploaded-file-before-send-preview"/>
        <img draggable="false" class="absolute top-1 right-1" src="/public/Icons/chat/Close_MD.svg" alt="preview-uploaded-file-cross"/>
      </div>

      <div class="p-3.5 border border-2 border-gray-100 cursor-pointer">
        <img draggable="false" src="/public/Icons/chat/file-add.svg" alt="chat-uploaded-file-before-send-preview"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const message = ref('');
const fileUploadMod = ref(false);

function getEmoji(payload) {
  message.value += payload.emoji;
}

function uploadFile(event) {
  fileUploadMod.value = true;
}
</script>
