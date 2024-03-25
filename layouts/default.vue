<template>
  <div class="px-3 md:px-20 xl:px-28 transition transition-duration-300 antialiased">
    <Header/>
    <main>
      <slot />
    </main>
  </div>
</template>


<script setup>

import Header from "../components/layout/Header.vue";
</script>
