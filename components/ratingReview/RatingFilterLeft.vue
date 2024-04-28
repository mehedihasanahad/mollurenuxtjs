<template>
  <div>
    <ul class="[&>li]:text-center sm:border-r">
      <li class="bg-white border-b rounded-t-md p-0.5">
        <p class="py-2.5 rounded-md font-[customfontSemibold] text-lg">TM</p>
      </li>
      <li class="bg-white sm:rounded-md p-0.5 border-b sm:border-b-0 cursor-pointer relative">
        <div class="flex justify-between px-4 py-3" @click="tm = !tm">
          <p class="py-2.5 rounded-md font-[customfontSemibold] text-lg">All</p>
          <img class="pl-1" src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
        </div>

        <!-- tm filter -->
        <div class="absolute top-12 z-20 mt-3 w-full md:px-1.5">
          <div v-click-outside="closeTm"
               v-if="tm"
               class="w-full min-h-28 rounded-lg bg-white shadow-lg text-[0.875rem] border border-gray-200">

            <!-- body -->
            <div>
              <!-- client -->
              <div>
                <div class="mt-3 px-3">
                  <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                    <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientAll">
                      Select All
                    </label>
                    <input type="checkbox" id="filterClientAll" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer" checked>
                  </div>

                  <!-- option 1 -->
                  <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                    <p class="text-sm font-normal text-gray-600 cursor-pointer font-[customfontSemibold]">
                      TM A
                    </p>

                    <div class="h-7 w-7 2xl:w-8 2xl:h-8 rounded-full">
                      <img draggable="false" class="h-7 w-7 2xl:w-8 2xl:h-8 object-cover rounded-full" src="/public/Icons/chat/pro-user.svg" alt="blog-commenter-image"/>
                    </div>

                    <div class="flex gap-2 items-center">
                      <p class="-mt-1 text-[#FEC923] text-md 2xl:text-lg">4.4</p>
                      <img src="/public/Icons/ratings.svg" class="h-4 w-4 2xl:h-6 2xl:w-6" alt="rating"/>
                    </div>
                  </div>

                  <!-- option 2 -->
                  <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                    <p class="text-sm font-normal text-gray-600 cursor-pointer font-[customfontSemibold]">
                      TM A
                    </p>

                    <div class="h-7 w-7 2xl:w-8 2xl:h-8 rounded-full">
                      <img draggable="false" class="h-7 w-7 2xl:w-8 2xl:h-8 object-cover rounded-full" src="/public/Icons/chat/pro-user.svg" alt="blog-commenter-image"/>
                    </div>

                    <div class="flex gap-2 items-center">
                      <p class="-mt-1 text-[#FEC923] text-md 2xl:text-lg">4.4</p>
                      <img src="/public/Icons/ratings.svg" class="h-4 w-4 2xl:h-6 2xl:w-6" alt="rating"/>
                    </div>
                  </div>

                  <!-- option 3 -->
                  <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                    <p class="text-sm font-normal text-gray-600 cursor-pointer font-[customfontSemibold]">
                      TM A
                    </p>

                    <div class="h-7 w-7 2xl:w-8 2xl:h-8 rounded-full">
                      <img draggable="false" class="h-7 w-7 2xl:w-8 2xl:h-8 object-cover rounded-full" src="/public/Icons/chat/pro-user.svg" alt="blog-commenter-image"/>
                    </div>

                    <div class="flex gap-2 items-center">
                      <p class="-mt-1 text-[#FEC923] text-md 2xl:text-lg">4.4</p>
                      <img src="/public/Icons/ratings.svg" class="h-4 w-4 2xl:h-6 2xl:w-6" alt="rating"/>
                    </div>
                  </div>

                  <!-- option 4 -->
                  <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                    <p class="text-sm font-normal text-gray-600 cursor-pointer font-[customfontSemibold]">
                      TM A
                    </p>

                    <div class="h-7 w-7 2xl:w-8 2xl:h-8 rounded-full">
                      <img draggable="false" class="h-7 w-7 2xl:w-8 2xl:h-8 object-cover rounded-full" src="/public/Icons/chat/pro-user.svg" alt="blog-commenter-image"/>
                    </div>

                    <div class="flex gap-2 items-center">
                      <p class="-mt-1 text-[#FEC923] text-md 2xl:text-lg">4.4</p>
                      <img src="/public/Icons/ratings.svg" class="h-4 w-4 2xl:h-6 2xl:w-6" alt="rating"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script setup>
const tm = ref(false);

function closeTm() {
  tm.value = false;
}
</script>
