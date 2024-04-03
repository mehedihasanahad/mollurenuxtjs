<template>
  <div>
    <div class="customContainer my-12">
      <div class="grid lg:grid-cols-3 gap-4">
        <div class="lg:col-span-2">
          <BlogDetails/>
        </div>

        <div class="lg:col-span-1">
          <BlogSearchBar class="md:mt-16"/>
          <BlogCategories class="mt-4"/>
          <BlogTags class="mt-4"/>
          <BlogSubscribe class="mt-4"/>
          <PopularBlogs class="mt-4"/>
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
