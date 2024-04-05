<template>
  <div>
    <!--chat header-->
    <ChatHeader/>

    <!-- chat search -->
    <ChatSearch/>

    <!-- Delete Functionality -->
    <ChatDelete/>

    <!--User Chat list -->
    <div class="h-64 overflow-auto globalCustomScrollBar overscroll-contain">
      <NuxtLink to="/chats/all-chats" v-for="n in 10" :key="n">
        <div @click="$emit('closeChatBox')" class="p-4 cursor-pointer border-b border-b border-b-gray-300 border-l border-l-4 border-l-white hover:border-l-customGreen hover:bg-[#F7FCF9]">
          <div class="flex gap-3">
            <div class="w-[15%] sm:w-[10%] rounded-full">
              <img draggable="false" class="w-full rounded-full object-cover" src="/public/images/blog/blog-comment-1.svg" alt="blog-commenter-image"/>
            </div>

            <div class="w-[85%] sm:w-[90%]">
              <div class="flex items-center justify-between">
                <div class="flex gap-x-2">
                  <h6 class="text-lg cursor-pointer">Roman Reigns</h6>

                  <div class="hidden md:flex items-center px-2 py-0.5 bg-[#F4F4F4] rounded-md gap-x-1 text-gray-500 text-sm">
                    <p>133</p>
                    <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <p>Confirmed</p>
                    <span class="w-1 h-1 bg-gray-300"></span>
                    <p>BR</p>
                    <img src="/public/images/chat/Arrow_Down_Left_MD.svg" alt="chat-arrow"/>
                  </div>
                </div>

                <div class="flex gap-x-2 items-center">
                  <p class="text-gray-400 text-sm">06: 34 Pm</p>
                  <input type="checkbox" id="selectChatAll" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
                </div>
              </div>

              <p class="text-md">Lorem ipsum dolor sit amet consectetur. Risus blandit dignissim et ultricies amet dui tempus.</p>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
