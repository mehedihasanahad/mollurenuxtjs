<template>
  <div>
    <div class="relative cursor-pointer">
      <img class="cursor-pointer rounded-full" src="/public/Icons/chat-option.svg" alt="" @click="actions = !actions"/>
      <div v-click-outside="closeActions"
           v-if="actions"
           class="min-h-28 absolute top-[30px] -left-[1.5rem] sm:-left-[32px] md:-left-[72px] z-20 mt-3 -translate-x-1/2 rounded-lg bg-white shadow-lg text-[0.875rem] border border-gray-200">
        <span class="absolute -top-2.5 right-[7px] -z-10 h-5 w-5 -translate-x-1/2 rotate-45 bg-white border-l border-t"></span>

        <!-- body -->
        <div class="w-[150px] sm:w-[200px] md:w-[220px]">
          <div class="mt-3 px-3">
            <h4 class="font-[customfontSemibold] text-[1.05rem]">Actions</h4>

            <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
              <label class="text-sm font-normal text-gray-600 cursor-pointer" for="actionReport">
                Report
              </label>
              <input type="checkbox" id="actionReport" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer" checked>
            </div>
          </div>

          <div class="flex justify-between items-center py-3 px-3">
            <label class="text-sm font-normal text-gray-600 cursor-pointer" for="actionBlock">
              Block
            </label>
            <input type="checkbox" id="actionBlock" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const actions = ref(false);

function closeActions() {
  actions.value = false;
}
</script>
