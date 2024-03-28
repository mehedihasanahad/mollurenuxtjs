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
                <img v-if="loginPasswordType" class="pb-[2px]" src="/public/Icons/Icons_second part copy/SVGs/Edit/Show.svg" alt="Info">
                <img v-else class="pb-[2px]" src="/public/Icons/Icons_second part copy/SVGs/Edit/Hide.svg" alt="Info">
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between text-sm font-normal">
            <div class="flex items-center"></div>
            <NuxtLink class="text-gray-500 underline" to="/forgot-password">{{pageContent.LOGIN_PAGE.FORGET_TEXT}}</NuxtLink>
          </div>

          <div class="pb-5 !mt-8">
            <button class="bg-customGreen text-white w-full py-3 mb-4 rounded-md text-base font-medium">
              {{pageContent.LOGIN_PAGE.LOGIN_BUTTON_TEXT}}
            </button>
            <p class="text-sm font-normal text-center text-gray-500">
              {{pageContent.LOGIN_PAGE.NOT_A_MEMBER_TEXT}}
              <NuxtLink class="font-medium text-customGreen" to="/registration">
                {{pageContent.LOGIN_PAGE.REGISTER_TEXT}}
              </NuxtLink>
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
