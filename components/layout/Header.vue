<template>
  <header class="max-h-[110px] py-6">
    <div class="flex justify-between items-center">
      <div>
        <img src="/public/Logo.svg"  alt="Mollure Logo" class="w-[60%] md:w-full"/>
      </div>
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

        <button class="rounded-3xl px-4 bg-[#66C68F] text-white">
          Login
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import langData from '../../lang.json';
const lang = ref('EN');
const langs = ref([]);
const landDropdown = ref(false);
// store currentLang file globally
const pageContent = useState('currentLangContent', () => langData[lang.value]);

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

onMounted(() => {
  removeCurrentSelected();
});
</script>
