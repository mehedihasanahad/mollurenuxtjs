<template>
  <div>
    <div v-if="!formType || (formType === 'create')">
    <span class="text-sm font-normal text-gray-500 cursor-[context-menu]">
      <span class="white"> Provide documentation for the registration in the chamber of
        <span class="whitespace-nowrap">e-commerce</span>
        <span class="text-red-500 ml-1">*</span>
      </span>
      <span class="relative cursor-pointer group">
        <img class="inline-block ml-1 pb-[2px]" src="/public/Icons/info-icon.svg" alt="Info" @click="tooltip = !tooltip">
        <span v-click-outside="closeTooltip" v-if="tooltip" class="min-w-28 max-w-40 absolute top-[70%] left-1/2 z-20 mt-3 -translate-x-1/2 rounded-[5px] bg-white shadow-lg p-1.5 text-[0.875rem] border border-gray-200">
          <span class="absolute -top-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 bg-white border-l border-t"></span>
          <p>Please enter your doc in pdf format.</p>
        </span>
      </span>
    </span>
      <div>
        <label for="documentation" class="right-0 z-50 flex items-center justify-center px-6 py-4 mt-2 bg-gray-200 rounded-md shadow-md cursor-pointer bottom-3 w-min h-min">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-gray-400 cursor-pointer" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
          </svg>
        </label>
        <input type="file" id="documentation" accept=".pdf" class="hidden" @change="uploadFile">
      </div>
      <div v-if="selectedFile" class="flex flex-col mt-3 space-y-2">
        <div class="relative flex flex-row items-center justify-between w-full px-3 py-2 rounded-md bg-gray-50">
          <a :href="selectedFileURL" target="_blank">{{selectedFile.name}}</a>
          <button @click="removeFile" class=" top-1 right-1 px-0.5  py-[1px] ms-3 rounded-full  "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg></button>
        </div>
      </div>
    </div>

    <div v-if="formType === 'edit'">
    <span class="text-sm font-normal text-gray-500 cursor-[context-menu]">
      <span class="white"> Provide documentation for the registration in the chamber of
        <span class="whitespace-nowrap">e-commerce</span>
        <span class="text-red-500 ml-1">*</span>
      </span>
      <span class="relative cursor-pointer group">
        <img class="inline-block ml-1 pb-[2px]" src="/public/Icons/info-icon.svg" alt="Info" @click="tooltip = !tooltip">
        <span v-click-outside="closeTooltip" v-if="tooltip" class="min-w-28 max-w-40 absolute top-[70%] left-1/2 z-20 mt-3 -translate-x-1/2 rounded-[5px] bg-white shadow-lg p-1.5 text-[0.875rem] border border-gray-200">
          <span class="absolute -top-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 bg-white border-l border-t"></span>
          <span>Please enter your doc in pdf format.</span>
        </span>
      </span>
    </span>
      <div>
        <label for="documentation" class="right-0 z-50 flex items-center justify-center px-6 py-4 mt-2 bg-gray-200 rounded-md shadow-md cursor-pointer bottom-3 w-min h-min pointer-events-none bg-gray-100">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-gray-400 cursor-pointer" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
          </svg>
        </label>
        <input type="file" id="documentation" accept=".pdf" class="hidden" @change="uploadFile">
      </div>
      <div v-if="selectedFile" class="flex flex-col mt-3 space-y-2">
        <div class="relative flex flex-row items-center justify-between w-full px-3 py-2 rounded-md bg-gray-50">
          <a :href="selectedFileURL" target="_blank">{{selectedFile.name}}</a>
          <button @click="removeFile" class=" top-1 right-1 px-0.5  py-[1px] ms-3 rounded-full  "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['formType', 'editable']);
const tooltip = ref(false);
const selectedFile = ref(null);
const selectedFileURL = ref(null);

function uploadFile(event) {
  selectedFile.value = event.target.files[0];
  selectedFileURL.value = URL.createObjectURL(event.target.files[0]);
}

function removeFile() {
  selectedFile.value = null;
  selectedFileURL.value = null;
}

function closeTooltip(event) {
  if (event.target) tooltip.value = false;
}
</script>
