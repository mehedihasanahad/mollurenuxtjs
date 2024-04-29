<template>
  <div class="border border-gray-200 rounded-lg py-2 px-4">
    <div class="py-4 border-b border-b-gray-200" v-for="n in 4" :key="n">
      <RatingContent/>
    </div>
  </div>
</template>
