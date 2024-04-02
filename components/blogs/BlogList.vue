<template>
  <div class="mb-20">
    <h1 class="font-[customfontSemibold] text-md lg:text-[32px]">Recent Blogs</h1>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
      <BlogCard v-for="n in 12" :key="n"/>
    </div>
    <div class="mt-6">
      <button class="rounded-lg py-2 px-14 border border-customGreen text-customGreen hover:bg-customGreen hover:text-white transition duration-500 mt-6">Load More</button>
    </div>
  </div>
</template>
