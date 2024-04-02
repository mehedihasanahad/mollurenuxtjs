<template>
  <div class="p-4 shadow-lg rounded-lg border border-gray-100">
    <h1 class="font-[customfontSemibold] text-md lg:text-[24px] relative">
      Popular Blogs
      <div class="border-b border-2 border-customGreen absolute -bottom-1 w-16"></div>
    </h1>

    <div>
      <div class="flex gap-4 mt-6" v-for="n in 4" :key="n">
        <div class="rounded-md w-[108px] overflow-hidden">
          <img class="w-[108px] h-[84px] object-cover" src="/public/Icons/popular-blog-image.png" alt="popular-blog-image"/>
        </div>
        <div class="w-[260px] sm:w-[300px]">
          <div class="text-sm text-[#666666]">31 Mar 2023</div>
          <div class="text-[14px] md:text-[16px] font-[customfontSemibold]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>
      </div>
    </div>
  </div>
</template>

