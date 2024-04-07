<template>
  <div>
    <div class="base-gradient p-2 rounded-xl shadow-xl">
      <div class="bg-white p-6 rounded-md min-h-80">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- select date & time -->
          <HomeRightSelectDateTime/>

          <!-- select category -->
          <HomeRightSelectCategory/>
        </div>

        <!-- location selection -->
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:px-4 xl:px-10 2xl:px-28">
          <button @click="setLocation('fixed')" class="flex gap-x-3 py-2 border border-2 border-gray-300 justify-center rounded-md hover:border-customGreen" :class="{'border-[#66C68F]': (location === 'fixed')}">
            <img src="/public/images/home/fixed-location.svg" alt=""/>
            <p>Fixed Location</p>
          </button>

          <button @click="setLocation('desired')" class="flex gap-x-3 py-2 border border-2 border-gray-300 justify-center rounded-md hover:border-customGreen" :class="{'border-[#66C68F]': (location === 'desired')}">
            <img src="/public/images/home/desired-location.svg" alt=""/>
            <p>Desired Location</p>
          </button>
        </div>

        <!-- select municipality -->
        <div class="w-full mt-6">
          <div class="relative mt-1">
          <span class="inline-block w-full rounded-md shadow-sm" @click="municipalityDropdown = !municipalityDropdown">
          <button class="relative w-full pr-8 mt-1 text-base font-normal text-left transition duration-150 ease-in-out custom-input-bottom" type="button">
            <input type="text" :value="municipality" :class="{'pointer-events-none': true}" class="w-full text-gray-400 block truncate outline-none"/>
            <span class="absolute inset-y-0 flex items-center pointer-events-none right-1">
                <img src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
              </span>
          </button>
          </span>
            <div v-click-outside="closeMunicipalityDropDown" v-if="municipalityDropdown" class="absolute z-10 overflow-auto max-h-56 w-full px-3 bg-white rounded-md selectDropdown shadow-lg mb-11 custom-scrollbar">
              <div v-if="municipalities">
                <ul class="py-1  text-sm rounded-md  max-h-56 focus:outline-none sm:text-sm">
                  <li @click="setMunicipality(municipality)" v-for="(municipality, index) in municipalities" :key="index" class="text-gray-900 cursor-default select-none relative border-b-2 text-sm font-normal py-2 hover:bg-green-50 cursor-pointer">
                    {{municipality}}
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

        <!-- search button -->
        <div class="mt-10 flex justify-center">
          <button class="py-2 px-20 bg-[#1960EC] rounded-3xl text-white text-lg">
            Search Mollure
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const location = ref('fixed');

function setLocation(locationName) {
  location.value = locationName;
}

// municipalities setup
const municipalities = ref([
    'Municipality 1',
    'Municipality 2',
    'Municipality 3',
    'Municipality 4',
    'Municipality 5',
]);
const municipalityDropdown = ref(false);
const municipality = ref('Select Municipality');

function setMunicipality(selectedMunicipality) {
  municipality.value = selectedMunicipality;
  municipalityDropdown.value = false;
}

function closeMunicipalityDropDown(event) {
  if (event.target) municipalityDropdown.value = false;
}
</script>
