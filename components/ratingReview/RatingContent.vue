<template>
  <div>
    <!-- rating -->
    <ClientOnly>
      <StarRating
          v-model:rating="rating"
          :read-only="true"
          :show-rating="false"
          :star-size="25"
          active-color="#FEC923"
      />
    </ClientOnly>

    <!-- rating text -->
    <p class="mt-4">
      Lorem ipsum dolor sit amet consectetur. Risus blandit dignissim et ultricies amet dui tempus. Sit leo morbi tortor turpis pellentesque neque neque lacinia eu. Malesuada orci aliquam nibh libero aliquam. Quis lacus vestibulum viverra velit. Mollis orci suspendisse molestie donec mauris ut. Sit dolor cursus neque platea enim lacus nulla.
    </p>

    <!-- rated by -->
    <div class="mt-4 flex gap-3">
      <h2 class="font-[customfontSemibold]">Craig Martha</h2>
      <p class="text-gray-500 text-sm"> 1 day ago</p>
    </div>

    <!-- service -->
    <div class="mt-4 flex gap-3">
      <div class="font-[customfontSemibold]">TM A</div>
      <div class="flex gap-2">
        <div class="border border-gray-300 text-gray-500 rounded-2xl px-2 py-0.5 leading-none">service 1</div>
        <div class="border border-gray-300 text-gray-500 rounded-2xl px-2 py-0.5 leading-none">service 2</div>
        <div class="border border-gray-300 text-gray-500 rounded-2xl px-2 py-0.5 leading-none">service 3</div>
      </div>
    </div>

    <div class="mt-4 flex gap-3">
      <div class="font-[customfontSemibold]">TM B</div>
      <div class="flex gap-2">
        <div class="border border-gray-300 text-gray-500 rounded-2xl px-2 py-0.5 leading-none">service 1</div>
        <div class="border border-gray-300 text-gray-500 rounded-2xl px-2 py-0.5 leading-none">service 2</div>
        <div class="border border-gray-300 text-gray-500 rounded-2xl px-2 py-0.5 leading-none">service 3</div>
      </div>
    </div>

    <!-- view reply -->
    <div class="mt-4">
      <div class="flex gap-x-4 cursor-pointer" @click="viewReply = !viewReply">
        <div class="text-customGreen">View Reply</div>
        <img src="/public/Icons/arrow-green.svg" alt=""/>
      </div>

      <div class="mt-1 pl-14" v-if="viewReply">
        <h3 class="text-lg">Niraj</h3>
        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Aliq.Malesuada orci aliquam nibh libero aliquam</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const rating = ref(5);
const viewReply = ref(true);
</script>
