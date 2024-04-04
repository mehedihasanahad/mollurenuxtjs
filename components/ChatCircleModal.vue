<template>
  <div>
    <!--chat header-->
    <div class="border-b border-b-2 border-b-gray-100 px-4 pb-4 mt-4 flex justify-between">
      <div class="flex gap-x-3 items-center">
        <div class="flex">
          <div class="relative w-12 h-12 rounded-full">
            <img class="w-12 h-12 object-cover rounded-full" src="/public/images/blog/blog-comment-1.svg" alt=""/>
            <div class="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-customGreen border border-2 border-white"></div>
          </div>
        </div>
        <p class="text-lg">Messaging</p>
      </div>
      <div class="flex gap-x-3">
        <img class="cursor-pointer rounded-full" src="/public/images/chat/Settings.svg" alt=""/>
        <img class="cursor-pointer rounded-full" src="/public/images/chat/Slider_03.svg" alt=""/>
      </div>
    </div>

    <!-- chat search -->
    <div class="relative px-4 mt-4">
      <input class="py-3 pl-12 pr-4 focus:outline-none rounded-md bg-gray-100 w-full text-lg" type="text" placeholder="Search messages"/>
      <div class="absolute left-8 top-4">
        <img draggable="false" class="w-5" src="/public/images/chat/search.svg" alt="chat-search"/>
      </div>
    </div>

    <!-- Delete Functionality -->
    <div class="border-b border-b-2 border-b-gray-100 px-4 pb-4 mt-4 flex justify-between items-center">
      <button class="bg-red-100 text-red-600 py-1 px-4 rounded-md">Delete</button>
      <div class="flex gap-x-3 items-center">
        <label class="text-lg font-normal text-gray-500 cursor-pointer ms-2" for="selectChatAll">
          Select All
        </label>
        <input type="checkbox" id="selectChatAll" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
      </div>
    </div>

    <!--User Chat list -->
    <div class="h-64 overflow-auto globalCustomScrollBar overscroll-contain">
      <NuxtLink to="/chats/all-chats" v-for="n in 10" :key="n">
        <div class="p-4 cursor-pointer border-b border-b border-b-gray-300 border-l border-l-4 border-l-white hover:border-l-customGreen hover:bg-lightGreen">
          <div class="flex gap-3">
            <div class="w-[15%] sm:w-[10%] rounded-full">
              <img draggable="false" class="w-full rounded-full object-cover" src="/public/images/blog/blog-comment-1.svg" alt="blog-commenter-image"/>
            </div>

            <div class="w-[85%] sm:w-[90%]">
              <div class="flex items-center justify-between">
                <div class="flex gap-x-2">
                  <h6 class="text-lg cursor-pointer">Roman Reigns</h6>

                  <div class="hidden md:flex items-center px-2 py-0.5 bg-gray-100 rounded-md gap-x-1 text-gray-500 text-sm">
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
