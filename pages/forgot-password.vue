<template>
  <div>
    <div class="flex items-start justify-center w-full h-full">
      <div class="w-full md:w-[30rem] border rounded-3xl  my-10 md:mt-10 shadow-md md:px-2 py-2 bg-white z-30">
        <div class="w-full p-3 space-y-5">
          <div>
            <h2 class="text-[28px] mb-2 font-[customfontSemibold]">{{pageContent.FORGET_PASS_PAGE.TITLE}}</h2>
            <p class="text-sm font-normal text-gray-500">{{pageContent.FORGET_PASS_PAGE.SUBTITLE}}</p>
          </div>

          <div class="mt-2">
            <label for="email" class="block text-sm font-normal text-gray-500">{{pageContent.FORGET_PASS_PAGE.EMAIL_INPUT_TEXT}}</label>
            <input type="email" id="email" autocomplete="email" required="" :placeholder="pageContent.FORGET_PASS_PAGE.EMAIL_INPUT_PLACEHOLDER_TEXT" class="w-full px-3 py-3 mt-1 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400 focus:bg-white" value="">
          </div>

          <div class="pb-5 !mt-10">
            <button class="bg-customGreen text-white w-full py-3 mb-4 rounded-md text-base font-medium">
              {{pageContent.FORGET_PASS_PAGE.SUBMIT_BUTTON_TEXT}}
            </button>
            <p class="text-sm font-normal text-center text-gray-500">
              {{pageContent.FORGET_PASS_PAGE.NOT_A_MEMBER_TEXT}}
              <NuxtLink class="font-medium text-customGreen" href="/registration">
                {{pageContent.FORGET_PASS_PAGE.REGISTER_TEXT}}
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
</script>
