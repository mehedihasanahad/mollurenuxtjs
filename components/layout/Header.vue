<template>
  <header class="max-h-[110px] py-6">
    <div class="flex justify-between items-center">
      <!--logo part-->
      <NuxtLink to="/">
        <img src="/public/Logo.svg"  alt="Mollure Logo" class="w-[60%] md:w-full"/>
      </NuxtLink>

      <!--right part-->
      <div class="hidden md:flex gap-x-2">
        <div v-if="$route.path === '/'" class="flex gap-x-6 mr-6">
          <!-- Mollure -->
          <div class="relative" @click="mollureDropdown = !mollureDropdown">
            <div class="flex pl-4 pr-2 py-1 cursor-pointer select-none">
              <button type="button">
                Mollure
              </button>
              <img class="pl-1" src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
            </div>
            <div v-click-outside="closeMollureDropDown" v-if="mollureDropdown" class="absolute top-10 -right-2 z-10 max-h-56 bg-white rounded-lg border border-gray-100 shadow-xl mb-11">
              <span class="absolute -top-[9px] right-[11px] -z-10 h-4 w-4 -translate-x-1/2 rotate-45 bg-white border-l border-t"></span>
              <ul class="text-sm rounded-md  max-h-56 focus:outline-none sm:text-sm px-3">
                <li class="text-gray-900 rounded-t-md cursor-default select-none relative border-b-2 border-b-gray-100 text-sm font-normal py-2 hover:bg-green-50 cursor-pointer">
                  <NuxtLink to="/#whyMollure" class="whitespace-nowrap">Why mollure?</NuxtLink>
                </li>
                <li class="text-gray-900 rounded-b-md cursor-default select-none relative text-sm font-normal py-2 hover:bg-green-50 cursor-pointer">
                  <NuxtLink class="block" to="/about-us">
                    About us
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <!-- -->
          <button>
            <NuxtLink class="block" to="/blogs">
              Blog
            </NuxtLink>
          </button>
        </div>

        <!-- lang selection -->
        <div class="relative" @click="langDropdown = !langDropdown">
          <div class="flex border rounded-3xl pl-4 pr-2 py-1 cursor-pointer border-gray-300 select-none">
            <button type="button">
              {{ lang }}
            </button>
            <img class="pl-1" src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
          </div>
          <div v-click-outside="closeDropDown" v-if="langDropdown" class="absolute z-10 max-h-56 w-full bg-white rounded-md border border-gray-100 shadow-xl mb-11">
            <ul>
              <li @click="setLang(lang)" class="cursor-pointer px-3 py-1 hover:bg-green-50" v-for="(lang, index) in langs" :key="index">{{lang}}</li>
            </ul>
          </div>
        </div>

        <!-- login/ profile -->
        <client-only>
          <NuxtLink v-if="!globalStore.userInfo" to="/login" class="rounded-3xl px-4 pt-1 bg-customGreen text-white">
            Login
          </NuxtLink>
          <div v-else class="relative">
            <div @click="profileDropdown = !profileDropdown" class="h-8 w-8 rounded-full bg-customGreen flex justify-center items-center text-white text-sm cursor-pointer">
              MH
            </div>
            <div v-click-outside="closeProfileDropDown" v-if="profileDropdown" class="absolute z-10 -right-4 top-10 max-h-56 w-40 bg-white rounded-md border border-gray-100 shadow-xl mb-11">
              <ul>
                <li @click="logout" class="cursor-pointer px-3 py-2 hover:bg-green-50">Logout</li>
                <li class="cursor-pointer px-3 py-2 hover:bg-green-50 text-red-500">Delete Account</li>
              </ul>
            </div>
          </div>
        </client-only>
      </div>
    </div>
  </header>
</template>

<script setup>
import langData from '../../lang.json';
const lang = ref('EN');
const langs = ref([]);
const langDropdown = ref(false);
const profileDropdown = ref(false);

// store currentLang file globally
const pageContent = useState('currentLangContent', () => langData[lang.value]);

// global store
const globalStore = useGlobalStore();

function setLang(selectedLang) {
  lang.value = selectedLang;
  removeCurrentSelected();
  pageContent.value = langData[lang.value];
}

function removeCurrentSelected() {
  langs.value = ['EN', 'NL'];
  const currentItemIndex = langs.value.findIndex((item) => item === lang.value);
  if (currentItemIndex !== -1) langs.value.splice(currentItemIndex, 1);
}

function closeDropDown(event) {
  if (event.target) langDropdown.value = false;
}
function closeProfileDropDown(event) {
  if (event.target) profileDropdown.value = false;
}

// logout functionality
function logout() {
  globalStore.userInfo = null;
  navigateTo('/login');
}

// mollure menu dropdown
const mollureDropdown = ref(false);
function closeMollureDropDown(event) {
  if (event.target) mollureDropdown.value = false;
}


onMounted(() => {
  removeCurrentSelected();
});
</script>
