<template>
  <div>
    <label for="address" class="flex items-center gap-1 text-sm font-normal text-gray-500">
      <span> Address <span class="text-red-500">*</span> </span>
      <InfoTooltip text="Enter your full address."/>
    </label>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2 ">
      <div class="w-full ">
        <input type="text" name="street" placeholder="Enter Street" class="w-full px-3 py-3 mt-2 text-base font-normal border border-gray-300 rounded-md  outline-none focus:border-customGreen" value="">
      </div>
      <div class="w-full ">
        <input type="text" name="number" placeholder="Enter Number" class="w-full px-3 py-3 mt-2 text-base font-normal border border-gray-300 rounded-md  outline-none focus:border-customGreen" value="">
      </div>
      <div class="w-full ">
        <input type="text" name="postalCode" placeholder="Enter Postal Code" class="w-full px-3 py-3 mt-2 text-base font-normal border border-gray-300 rounded-md  outline-none focus:border-customGreen" value="">
      </div>

      <div class="w-full">
        <div class="relative mt-1">
          <span class="inline-block w-full rounded-md shadow-sm" @click="provincesDropdown = !provincesDropdown">
            <button class="relative w-full py-3 pl-3 pr-8 mt-1 text-base font-normal text-left transition duration-150 ease-in-out border border-gray-300 rounded-md focus:outline-none focus:border-customGreen" type="button">
              <span class="text-gray-400 block truncate">{{province}}</span>
              <span class="absolute inset-y-0 flex items-center pr-2 ml-3 pointer-events-none right-1">
                <img src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
              </span>
            </button>
          </span>
          <div v-click-outside="closeDropDown" v-if="provincesDropdown" class="absolute z-10 overflow-auto max-h-56 w-full px-3 bg-white rounded-md selectDropdown shadow-lg mb-11 custom-scrollbar">
            <div v-if="provinces">
              <ul class="py-1  text-sm rounded-md  max-h-56 focus:outline-none sm:text-sm">
                <li @click="setProvince(province)" v-for="(province, index) in provinces" :key="index" class="text-gray-900 cursor-default select-none relative border-b-2 text-sm font-normal py-2 hover:bg-green-50 cursor-pointer">
                  {{province.name}}
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

      <div class="w-full">
        <div class="relative mt-1">
          <span class="inline-block w-full rounded-md shadow-sm" @click="municipalityDropdown = !municipalityDropdown">
            <button class="relative w-full py-3 pl-3 pr-8 mt-1 text-base font-normal text-left transition duration-150 ease-in-out border border-gray-300 rounded-md focus:outline-none focus:border-customGreen" type="button">
              <span class="text-gray-400 block truncate">{{municipality}}</span>
              <span class="absolute inset-y-0 flex items-center pr-2 ml-3 pointer-events-none right-1">
                <img src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
              </span>
            </button>
          </span>
          <div v-click-outside="closeDropDown" v-if="municipalityDropdown" class="absolute z-10 overflow-auto max-h-56 w-full px-3 bg-white rounded-md selectDropdown shadow-lg mb-11 custom-scrollbar">
            <div v-if="municipalities">
              <ul class="py-1  text-sm rounded-md  max-h-56 focus:outline-none sm:text-sm">
                <li @click="setMunicipality(municipality)" v-for="(municipality, index) in municipalities" :key="index" class="text-gray-900 cursor-default select-none relative border-b-2 text-sm font-normal py-2 hover:bg-green-50 cursor-pointer">
                  {{municipality.name}}
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
  </div>
</template>

<script setup>
import InfoTooltip from '../signin/InfoTooltip.vue';
// provinces setup
const provinces = ref(null);
const provincesDropdown = ref(false);
const province = ref('Select Province');

async function getProvince() {
  const { data } = await $fetch('https://admin.mollure.nl/api/provinces');
  provinces.value = data;
}

function setProvince(selectedProvince) {
  province.value = selectedProvince.name;
  provincesDropdown.value = false;
  municipalities.value = null;
  getMunicipalities(selectedProvince.id);
}

// municipalities setup
const municipalities = ref(null);
const municipalityDropdown = ref(false);
const municipality = ref('Select Municipality');

async function getMunicipalities(provinceId) {
  const { data } = await $fetch(`https://admin.mollure.nl/api/municipalities?province_id=${provinceId}`);
  municipalities.value = data;
}

function setMunicipality(selectedMunicipality) {
  municipality.value = selectedMunicipality.name;
  municipalityDropdown.value = false;
}

function closeDropDown(event) {
  if (event.target) {
    provincesDropdown.value = false;
    municipalityDropdown.value = false;
  }
}

// on mount
onMounted(() => {
  getProvince();
});
</script>
