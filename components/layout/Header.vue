<template>
  <header class="max-h-[110px] py-6">
    <div class="flex justify-between items-center">
      <!--logo part-->
      <NuxtLink to="/">
        <img src="/public/Logo.svg"  alt="Mollure Logo" class="w-[60%] md:w-full"/>
      </NuxtLink>

      <!--right part-->
      <div class="flex gap-x-2">
        <div class="relative" @click="landDropdown = !landDropdown">
          <div class="flex border rounded-3xl pl-4 pr-2 py-1 cursor-pointer border-gray-300 select-none">
            <button type="button">
              {{ lang }}
            </button>
            <img class="pl-1" src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
          </div>
          <div v-click-outside="closeDropDown" v-if="landDropdown" class="absolute z-10 max-h-56 w-full bg-white rounded-md border border-gray-100 shadow-xl mb-11">
            <ul>
              <li @click="setLang(lang)" class="cursor-pointer px-3 py-1 hover:bg-green-50" v-for="(lang, index) in langs" :key="index">{{lang}}</li>
            </ul>
          </div>
        </div>

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
const landDropdown = ref(false);
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
  if (event.target) landDropdown.value = false;
}
function closeProfileDropDown(event) {
  if (event.target) profileDropdown.value = false;
}

function logout() {
  globalStore.userInfo = null;
  navigateTo('/login');
}

onMounted(() => {
  removeCurrentSelected();
});
</script>
