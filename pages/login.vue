<template>
  <div>
    <div class="flex items-start justify-center w-full h-full">
      <div class="w-full md:w-[30rem] border rounded-3xl  my-10 md:mt-10 shadow-md md:px-2 py-2 bg-white z-30">
        <div class="w-full p-3 space-y-4">
          <div>
            <h2 class="text-[28px] mb-2 font-[customfontSemibold]">{{pageContent.LOGIN_PAGE.LOGIN_TITLE}}</h2>
            <p class="text-sm font-normal text-gray-500">{{pageContent.LOGIN_PAGE.LOGIN_SUBTITLE}}</p>
          </div>

          <div class="mt-2">
            <label for="email" class="block text-sm font-normal text-gray-500">{{pageContent.LOGIN_PAGE.EMAIL_INPUT_TEXT}}</label>
            <input type="email" id="email" autocomplete="email" required="" :placeholder="pageContent.LOGIN_PAGE.EMAIL_INPUT_PLACEHOLDER_TEXT" class="w-full px-3 py-3 mt-1 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400 focus:bg-white" value="">
          </div>

          <div class="mt-2">
            <label for="password" class="flex items-center gap-1 text-sm font-normal text-gray-500">
              <span>{{pageContent.LOGIN_PAGE.PASSWORD_INPUT_TEXT}}</span>
            </label>
            <div class="relative">
              <input :type="loginPasswordType ? 'password' : 'text'" id="password" name="legalName" :placeholder="pageContent.LOGIN_PAGE.PASSWORD_INPUT_PLACEHOLDER_TEXT" class="custom-input" value="">
              <div @click="loginPasswordType = !loginPasswordType" class="absolute cursor-pointer right-3 bottom-3">
                <svg v-if="loginPasswordType" class="w-6 h-7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
                  <g>
                    <g>
                      <path d="m499.4,250.8c-51-86.3-143.6-140.4-243.4-140.4s-192.5,54.1-243.4,140.4c-2.1,3.1-2.1,7.3 5.32907e-15,10.4 51,86.3 143.6,140.4 243.4,140.4s192.5-54.1 243.4-140.4c2.1-3.1 2.1-7.3 0-10.4zm-243.4,130c-90.5,0-174.8-47.8-221.6-124.8 46.8-77 131.1-124.8 221.6-124.8s174.8,47.8 221.6,124.8c-46.8,77-131.1,124.8-221.6,124.8z"/>
                      <path d="m256,162.4c-52,0-93.6,41.6-93.6,93.6 0,52 41.6,93.6 93.6,93.6s93.6-41.6 93.6-93.6c0-52-41.6-93.6-93.6-93.6zm0,166.4c-40.6,0-72.8-32.3-72.8-72.8s32.3-72.8 72.8-72.8 72.8,32.3 72.8,72.8-32.2,72.8-72.8,72.8z"/>
                      <path d="m256,214.4v20.8c11.4,0 20.8,9.4 20.8,20.8s-9.4,20.8-20.8,20.8-20.8-9.4-20.8-20.8h-20.8c0,22.9 18.7,41.6 41.6,41.6 22.9,0 41.6-18.7 41.6-41.6s-18.7-41.6-41.6-41.6z"/>
                    </g>
                  </g>
                </svg>
                <img v-else class="pb-[2px]" src="/public/Icons/Icons_second part copy/SVGs/Edit/Hide.svg" alt="Info">
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between text-sm font-normal">
            <div class="flex items-center"></div>
            <a class="text-gray-500 underline" href="/forgot-password">{{pageContent.LOGIN_PAGE.FORGET_TEXT}}</a>
          </div>

          <div class="pb-5 !mt-8">
            <button class="bg-customGreen text-white w-full py-3 mb-4 rounded-md text-base font-medium">
              {{pageContent.LOGIN_PAGE.LOGIN_BUTTON_TEXT}}
            </button>
            <p class="text-sm font-normal text-center text-gray-500">
              {{pageContent.LOGIN_PAGE.NOT_A_MEMBER_TEXT}}
              <a class="font-medium text-customGreen" href="/select-user-type">
                {{pageContent.LOGIN_PAGE.REGISTER_TEXT}}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const pageContent = useState('currentLangContent');
const loginPasswordType = ref(true);
</script>
