<template>
  <div>
    <span class="flex items-center gap-1 text-sm font-normal text-gray-500 cursor cursor-[context-menu]">
      <span>Select Name for Rating and Review <span class="text-red-500">*</span> </span>
    </span>
    <div class="relative">
      <span class="inline-block w-full rounded-md shadow-sm" @click="nameDropdown = !nameDropdown">
        <button class="relative w-full py-3 pl-3 pr-8 mt-1 text-base font-normal text-left transition duration-150 ease-in-out custom-input" type="button">
          <span class="text-gray-400 block truncate">{{name}}</span>
          <span class="absolute inset-y-0 flex items-center pr-2 ml-3 pointer-events-none right-1">
            <img src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
          </span>
        </button>
      </span>
      <div v-click-outside="closeDropDown" v-if="nameDropdown" class="absolute z-10 overflow-auto max-h-56 w-full px-3 bg-white rounded-md selectDropdown shadow-lg mb-11 custom-scrollbar">
        <div v-if="names">
          <ul class="py-1  text-sm rounded-md  max-h-56 focus:outline-none sm:text-sm">
            <li @click="setName(name)" v-for="(name, index) in names" :key="index" class="text-gray-900 cursor-default select-none relative border-b-2 text-sm font-normal py-2 hover:bg-green-50 cursor-pointer">
              {{name}}
            </li>
          </ul>
        </div>
        <div v-else>
          <ul class="py-1  text-sm rounded-md  max-h-56 focus:outline-none sm:text-sm">
            <li class="text-gray-900 cursor-default select-none relative text-sm font-normal py-2">
              Loading...
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const nameDropdown = ref(false);
const name = ref('Select Name For Rating And Review');
const names = ['First Name', 'Last Name', 'First & Last Name', 'Abbreviation'];

function setName(selectedGender) {
  name.value = selectedGender;
  nameDropdown.value = false;
}

function closeDropDown(event) {
  if (event.target) nameDropdown.value = false;
}
</script>
