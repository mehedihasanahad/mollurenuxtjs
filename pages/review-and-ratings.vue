<template>
  <div class="customContainer">
    <!-- molure log -->
    <div class="flex gap-x-4 items-center justify-center mt-4">
      <div class="w-14 border-b border-b-[3px] border-b-customGreen"></div>
      <div class="capitalize text-2xl font-[customfontSemibold]">
        Rating And Review
      </div>
      <div class="w-14 border-b border-b-[3px] border-b-customGreen"></div>
    </div>

    <!-- rating -->
    <div class="mt-10 py-10 px-16 border w-fit m-auto rounded-lg">
      <h3 class="text-center capitalize text-xl font-[customFontSemibold]">Craig Martha</h3>
      <div class="mt-4 flex justify-center">
        <ClientOnly>
          <StarRating
              v-model:rating="rating"
              :read-only="true"
              :show-rating="false"
              :star-size="45"
              active-color="#FEC923"
          />
        </ClientOnly>
      </div>
      <p class="text-center mt-4 text-2xl mt-4 font-[customfontSemibold]">134 Reviews</p>
    </div>

    <!-- rating-review -->
    <RatingAndReview class="mt-10"/>

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
})
const rating = ref(5);
</script>
