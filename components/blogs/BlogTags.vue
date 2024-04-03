<template>
  <div class="p-4 shadow-lg rounded-lg border border-gray-100">
    <h1 class="font-[customfontSemibold] text-md lg:text-[24px] relative">
      Popular Tags
      <div class="border-b border-2 border-customGreen absolute -bottom-1 w-16"></div>
    </h1>

    <div class="flex flex-wrap gap-3 mt-6">
      <button class="p-1.5 px-4 rounded-lg bg-[#F4F4F4] hover:bg-[#C0E8D1] transition duration-500" @click="selectCategory(category.id)" :class="{'bg-customLightGreen': category.selected}" v-for="(category, index) in categories" :key="index">
        {{category.name}}
      </button>
    </div>
  </div>
</template>

<script setup>
const categories = ref([
  {id: 1, name: 'Hair Care', selected: false},
  {id: 2, name: 'Lifestyle', selected: false},
  {id: 3, name: 'Client Stories', selected: false},
  {id: 4, name: 'DIY', selected: false},
  {id: 5, name: 'Industry News', selected: false},
  {id: 6, name: 'Fashion', selected: false},
  {id: 7, name: 'Bridal', selected: false},
  {id: 8, name: 'Color', selected: false},
  {id: 9, name: 'Product Reviews', selected: false},
  {id: 10, name: 'Hairstyle Inspiration', selected: false},
]);

function selectCategory(selectedId) {
  const selectedCategory = categories.value.find((item)=> item.id === selectedId);
  if (selectedCategory) {
    console.log(selectedId, selectedCategory, 'ff')
    selectedCategory.selected = !selectedCategory.selected;
  }
}
</script>
