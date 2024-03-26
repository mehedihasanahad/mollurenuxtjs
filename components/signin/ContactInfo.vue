<template>
  <div>
    <div>
      <label for="contactPerson" class="flex items-center gap-1 text-sm font-normal text-gray-500">
        <span> Contact Person<span class="text-red-500 ml-1">*</span> </span>
      </label>
      <div class="flex flex-col space-y-5 md:space-x-2 md:space-y-0 md:flex-row">
        <div class="w-full md:w-1/2">
          <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" class="custom-input" value="">
        </div>
        <div class="w-full md:w-1/2">
          <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" class="custom-input" value="">
        </div>
      </div>
    </div>

    <div class="mt-2">
      <label for="contactNumber" class="flex items-center gap-1 text-sm font-normal text-gray-500">
        <span>Contact Number <span class="text-red-500">*</span> </span>
      </label>
      <input type="text" id="contactNumber" name="legalName" placeholder="Enter Contact Number" class="custom-input" value="">
    </div>

    <div class="mt-2">
      <label for="gender" class="flex items-center gap-1 text-sm font-normal text-gray-500">
        <span>Gender <span class="text-red-500">*</span> </span>
      </label>
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

    <div class="mt-2">
      <label for="email" class="flex items-center gap-1 text-sm font-normal text-gray-500">
        <span>Email <span class="text-red-500">*</span> </span>
      </label>
      <input type="text" id="email" name="legalName" placeholder="Enter Email" class="custom-input" value="">
    </div>
  </div>
</template>

<script setup>
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
