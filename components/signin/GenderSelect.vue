<template>
  <div>
    <div v-if="!formType || formType === 'create'">
    <span class="flex items-center gap-1 text-sm font-normal text-gray-500 cursor-[context-menu]">
      <span>Gender <span class="text-red-500">*</span> </span>
    </span>
      <div class="relative">
      <span class="inline-block w-full rounded-md shadow-sm" @click="genderDropdown = !genderDropdown">
        <button class="relative w-full py-3 pl-3 pr-8 mt-1 text-base font-normal text-left transition duration-150 ease-in-out custom-input" type="button">
          <span class="text-gray-400 block truncate">{{gender}}</span>
          <span class="absolute inset-y-0 flex items-center pr-2 ml-3 pointer-events-none right-1">
            <img src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
          </span>
        </button>
      </span>
        <div v-click-outside="closeDropDown" v-if="genderDropdown" class="absolute z-10 overflow-auto max-h-56 w-full px-3 bg-white rounded-md selectDropdown shadow-lg mb-11 custom-scrollbar">
          <div v-if="genders">
            <ul class="py-1  text-sm rounded-md  max-h-56 focus:outline-none sm:text-sm">
              <li @click="setGender(gender)" v-for="(gender, index) in genders" :key="index" class="text-gray-900 cursor-default select-none relative border-b-2 text-sm font-normal py-2 hover:bg-green-50 cursor-pointer">
                {{gender}}
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
    <div v-if="formType === 'edit'">
    <span class="flex items-center gap-1 text-sm font-normal text-gray-500 cursor-[context-menu]">
      <span>Gender <span class="text-red-500">*</span> </span>
    </span>
      <div class="relative mt-2">
      <span class="inline-block w-full rounded-md shadow-sm" :class="{'pointer-events-none bg-gray-100': !editable}" @click="genderDropdown = !genderDropdown">
        <button class="relative w-full py-3 pl-3 pr-8 mt-0 text-base font-normal text-left transition duration-150 ease-in-out custom-input" type="button">
          <span class="text-gray-400 block truncate">{{gender}}</span>
          <span class="absolute inset-y-0 flex items-center pr-2 ml-3 pointer-events-none right-1">
            <img src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
          </span>
        </button>
      </span>
        <div v-click-outside="closeDropDown" v-if="genderDropdown" class="absolute z-10 overflow-auto max-h-56 w-full px-3 bg-white rounded-md selectDropdown shadow-lg mb-11 custom-scrollbar">
          <div v-if="genders">
            <ul class="py-1  text-sm rounded-md  max-h-56 focus:outline-none sm:text-sm">
              <li @click="setGender(gender)" v-for="(gender, index) in genders" :key="index" class="text-gray-900 cursor-default select-none relative border-b-2 text-sm font-normal py-2 hover:bg-green-50 cursor-pointer">
                {{gender}}
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
  </div>
</template>

<script setup>
const props = defineProps(['formType', 'editable']);
const genderDropdown = ref(false);
const gender = ref('Select Gender');
const genders = ['Male', 'Female', 'Other'];

function setGender(selectedGender) {
  gender.value = selectedGender;
  genderDropdown.value = false;
}

function closeDropDown(event) {
  if (event.target) genderDropdown.value = false;
}
</script>
