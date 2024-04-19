<template>
  <div>
    <article class="rounded-xl border border-1 border-gray-200 p-2 bg-white">
      <div class="relative w-full">
        <img class="h-56 w-full object-cover rounded-lg" src="/public/images/blog-image-2.png" alt="blog-image"/>
        <div class="absolute right-3 top-3 h-9 w-9 bg-[#DFD4CA] rounded-full flex justify-center items-center cursor-pointer">
          <img src="/public/Icons/service/mdi_cards-heart.svg" alt="favourite-icon"/>
        </div>
      </div>

      <div class="mt-4 text-center">
        <div class="text-[#666666] text-md">Lorem | Ipsum | Lorem ipsum</div>
        <h1 class="text-xl font-[customfontSemibold] mt-2">Lorem Ipsum Dolor Sit Amet Consectetur.</h1>
        <div class="mt-2">
          <client-only>
            <div class="flex justify-center">
              <StarRating v-model:rating="rating" :read-only="true" :show-rating="false" :star-size="20" active-color="#FEC923"/>
            </div>
          </client-only>
        </div>
        <p class="text-sm text-[#666666] mt-2 font-[customfontSemibold]">134 Reviews</p>
      </div>

      <!--location selection-->
      <div class="mt-4">
        <div class="border border-gray-200 rounded-lg">
          <ul class="sm:grid grid-cols-2 [&>li]:text-center [&>li]:cursor-pointer">
            <li class="bg-white border-b rounded-t-md p-0.5 sm:rounded-none sm:rounded-l-md sm:border-0 sm:border-r" @click="serviceSelectedLocation = 'fixed'">
              <p class="py-2.5 rounded-md text-[#666666]" :class="{'bg-customGreen text-white': (serviceSelectedLocation === 'fixed')}">Fixed Location</p>
            </li>
            <li class="bg-white rounded-md p-0.5" @click="serviceSelectedLocation = 'desired'">
              <p class="py-2.5 rounded-md text-[#666666]" :class="{'bg-customGreen text-white': (serviceSelectedLocation === 'desired')}">Desired Location</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-4 pb-2 flex flex-col gap-y-3">
        <div class="flex justify-between">
          <div>
            <h4 class="font-[customFontSemiBold]">Service 1</h4>
            <p class="text-sm text-[#666666]">30-40 Min</p>
          </div>
          <h4 class="font-[customFontSemiBold] text-sm">
            Starting From 23 EUR
          </h4>
        </div>
        <div class="flex justify-between">
          <div>
            <h4 class="font-[customFontSemiBold]">Service 1</h4>
            <p class="text-sm text-[#666666]">30-40 Min</p>
          </div>
          <h4 class="font-[customFontSemiBold] text-sm">
            Starting From 23 EUR
          </h4>
        </div>
        <div class="flex justify-between">
          <div>
            <h4 class="font-[customFontSemiBold]">Service 1</h4>
            <p class="text-sm text-[#666666]">30-40 Min</p>
          </div>
          <h4 class="font-[customFontSemiBold] text-sm">
            Starting From 23 EUR
          </h4>
        </div>
      </div>

    </article>
  </div>
</template>

<script setup>
const serviceSelectedLocation = ref('fixed');
const rating = ref(4);
</script>
