<template>
  <div>
    <div class="bg-[#f6f6f6]">
      <Banner class="customContainer"/>
    </div>

    <div class="customContainer my-12">
      <div class="grid lg:grid-cols-3 gap-4">
        <div class="lg:col-span-2">
          <BlogList/>
        </div>

        <div class="lg:col-span-1">
<!--         <div class="sticky top-10">-->
           <BlogSearchBar class="mt-3"/>
           <BlogCategories class="mt-4"/>
           <BlogTags class="mt-4"/>
           <BlogSubscribe class="mt-4"/>
           <PopularBlogs class="mt-4"/>
<!--         </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'public'
})
</script>
