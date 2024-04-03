<template>
  <div class="p-4 shadow-lg rounded-lg border border-gray-100">
    <h1 class="font-[customfontSemibold] text-md lg:text-[20px]">Recent Comments</h1>

    <div class="mb-4">
      <div class="flex gap-4 mt-5" v-for="n in 2" :key="n">
        <div class="w-[15%] sm:w-[5%] rounded-full">
          <img draggable="false" class="w-full rounded-full object-cover" src="/public/images/blog/blog-comment-1.svg" alt="blog-commenter-image"/>
        </div>

        <div class="w-[85%] sm:w-[95%]">
          <div class="flex items-center gap-x-3">
            <h6 class="font-[customfontSemibold]">Roman Reigns</h6>
            <p class="text-gray-400 text-sm">31 Mar 2023</p>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur. Risus blandit dignissim et ultricies amet dui tempus. Sit leo morbi tortor turpis pellentesque neque neque lacinia eu.</p>

          <div class="mt-2 flex gap-x-10 [&>div]:cursor-pointer">
            <div class="flex gap-x-2 justify-center items-center">
              <img src="/public/images/blog/icons/mdi_cards-heart.svg" alt="">
              <p>12</p>
            </div>
            <div @click="comment = !comment" class="flex gap-x-2 justify-center items-center">
              <img src="/public/images/blog/icons/solar_chat-line-line-duotone.svg" alt="">
              <p>23</p>
            </div>
          </div>

          <div class="relative mt-6" v-if="comment && (n === 1)">
            <input type="text" value="Lorem Ipsum Sit Omet Do Met" class="outline outline-1 outline-gray-400 rounded-lg p-4 w-full focus:border-none"/>
            <div class="absolute right-4 top-4 cursor-pointer">
              <img draggable="false" src="/public/images/blog/comment-send-green.svg" alt="blog-comment-reply-send-green-btn"/>
            </div>
          </div>

          <div class="mt-4">
            <h6 class="flex gap-x-3 items-center cursor-pointer">
              <div class="text-customGreen font-[customfontSemibold]">View More Replies</div>
              <div>
                <img src="/public/images/blog/Vector-arrow.svg" alt="view-more-reply">
              </div>
            </h6>

            <BlogCommentsNested/>
          </div>
        </div>
      </div>
    </div>

    <div class="relative py-2 mt-6">
      <input type="text" placeholder="Add Comment" class="text-gray-400 bg-[#F4F4F4] rounded-lg p-4 w-full focus:border-none focus:outline-none"/>
      <div class="absolute right-4 top-6 cursor-pointer">
        <img draggable="false" src="/public/images/blog/comment-send-sky.svg" alt="blog-comment-reply-send-green-btn"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const comment = ref(true);
</script>
