<template>
  <div>
    <div class="flex flex-col items-center justify-center w-full !mb-10 space-y-5 md:flex-row md:space-y-0 md:space-x-5">
      <div class="w-[5rem] border-[2px] m-0 border-customGreen"></div>
      <h2 class="mb-2 text-2xl font-semibold md:text-3xl ">{{ pageContent.REGISTRATION_PAGE.TITLE }}</h2>
      <div class="w-[5rem] border-[2px] m-0 border-customGreen"></div>
    </div>
    <div class="flex items-start justify-center w-full h-full">
      <div class="w-full md:w-[32rem] flex flex-col space-y-4 my-10 md:mt-10 z-30">
        <NuxtLink to="/signup/individual">
          <div class="px-3 py-12 bg-white border  shadow-sm cursor-pointer md:px-6 rounded-3xl hover:bg-customGreen hover:text-white">
            <h2 class="mb-2 text-2xl font-semibold md:text-3xl ">{{ pageContent.REGISTRATION_PAGE.FOR_INDIVIDUAL_CLIENT }}</h2>
          </div>
        </NuxtLink>

        <NuxtLink to="/signup/company">
          <div class="px-3 py-12 bg-white border  shadow-sm cursor-pointer md:px-6 rounded-3xl hover:bg-customGreen hover:text-white">
            <h2 class="mb-2 text-2xl font-semibold md:text-3xl ">{{ pageContent.REGISTRATION_PAGE.FOR_COMPANY_CLIENT }}</h2>
          </div>
        </NuxtLink>

        <NuxtLink to="/signup/professional">
          <div class="px-3 py-12 bg-white border  shadow-sm cursor-pointer md:px-6 rounded-3xl hover:bg-customGreen hover:text-white">
            <h2 class="mb-2 text-2xl font-semibold md:text-3xl ">{{ pageContent.REGISTRATION_PAGE.FOR_PROFESSIONAL }}</h2>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const pageContent = useState('currentLangContent');
</script>
