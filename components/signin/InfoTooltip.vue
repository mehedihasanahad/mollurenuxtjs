<template>
  <div class="relative cursor-pointer">
    <img class="pb-[2px]" src="/public/Icons/info-icon.svg" alt="Info" @click="tooltip = !tooltip">
    <div v-click-outside="closeTooltip" v-if="tooltip" class="min-w-28 max-w-40 absolute top-[70%] left-1/2 z-20 mt-3 -translate-x-1/2 rounded-[5px] bg-white shadow-lg p-1.5 text-[0.875rem] border border-gray-200">
      <span class="absolute -top-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 bg-white border-l border-t"></span>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['text'])
const tooltip = ref(false);

function closeTooltip(event) {
  if (event.target) tooltip.value = false;
}
</script>
