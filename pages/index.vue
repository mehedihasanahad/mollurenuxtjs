<template>
  <div>
    <!-- Landing page top -->
    <div class="px-3 md:px-20 xl:px-28 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-6">
      <!-- left part -->
      <HomeHeaderLeft/>

      <!-- right part -->
      <HomeHeaderRight/>
    </div>

    <!-- middle BG -->
    <div class="mt-10 lg:mt-0 2xl:mt-20">
      <img class="w-full object-cover" src="/public/Icons/bg/home/Frame.svg" alt="home-design"/>
    </div>

    <!-- why mollure -->
    <WhyMollure class="px-3 md:px-20 xl:px-28"/>

    <div class="h-96"></div>
    <div class="h-96"></div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
})
</script>
