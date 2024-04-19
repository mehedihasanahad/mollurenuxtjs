<template>
  <div class="relative cursor-pointer">
    <span @click="categories = !categories" class="inline-block w-full rounded-md">
      <button class="relative w-full pr-8 mt-1 text-base font-normal text-left transition duration-150 ease-in-out custom-input-bottom" type="button">
        <input type="text" :value="categoryList.toString()" :class="{'pointer-events-none': categoryList.length <= 1}" class="w-full text-gray-400 block truncate outline-none"/>
        <span class="absolute inset-y-0 flex items-center pointer-events-none right-1">
          <img src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
        </span>
      </button>
    </span>

    <div v-click-outside="closeCategories"
         v-if="categories"
         class="w-full absolute top-[46px] z-20 mt-3 rounded-lg bg-white shadow-lg text-[0.875rem] border border-gray-200">

      <!-- body -->
      <div class="w-full">
        <!-- client -->
        <div>
          <div class="mt-3 px-3">
            <div v-for="(n, index) in 5" :key="n" class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
              <label class="text-sm font-normal text-gray-900 cursor-pointer" :for="`Category_${index+1}`">
                Category {{index + 1}}
              </label>
              <input @change="setCategory(`category-${index + 1}`)" type="checkbox" :id="`Category_${index+1}`" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = ref(false);
const categoryList = ref(['Select Category'])

function closeCategories() {
  categories.value = false;
}

function setCategory(category) {
  if (categoryList.value.includes('Select Category')) {
    categoryList.value.shift();
  }

  if (categoryList.value.includes(category)) {
    const index = categoryList.value.findIndex((item) => item === category);
    if (index !== -1) categoryList.value.splice(index, 1);
  } else categoryList.value.push(category)
}
</script>
