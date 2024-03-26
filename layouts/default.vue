<template>
  <div class="relative px-3 md:px-20 xl:px-28 transition transition-duration-300 antialiased min-h-[100vh]">
    <DefaultLayoutBg/>
    <Header/>
    <main>
      <slot />
    </main>
  </div>
</template>
<script>
import DefaultLayoutBg from "../components/layout/DefaultLayoutBg.vue";
export default {
  components: {DefaultLayoutBg}
}
</script>
