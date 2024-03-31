<template>
  <div>
    <div v-if="profileImage">
      <p class="block text-sm font-normal text-gray-500 cursor-[context-menu]">Upload Image</p>
      <div class="relative block relative h-40 w-40 mx-auto text-gray-500  rounded-full">
        <div v-if="profileImage" class="flex items-center justify-center w-full h-full bg-gray-300 rounded-full shadow-md">
          <img draggable="false" :src="profileImage" class="h-full w-full object-cover rounded-full" alt=""/>
        </div>
        <span v-if="editable" @click="profileImageSettings = !profileImageSettings" class="select-none absolute right-0 bottom-2 bg-white rounded-full p-2 border shadow-lg cursor-pointer">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-gray-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path></svg>
          <div v-show="profileImageSettings" class="absolute h-20 w-28 rounded-lg border bg-white -right-10 top-11">
            <ul class="[&>li]:text-center [&>li]:py-1.5 [&>li]:cursor-pointer">
              <li class="border-b">
                <label for="imageUpdate">
                  Edit
                  <input type="file" @change="setProfileImage" accept="image/*" id="imageUpdate" class="hidden">
                </label>
              </li>
              <li @click="removeProfileImage">Delete</li>
            </ul>
          </div>
        </span>
        <div v-if="!editable" class="absolute inset-0 h-full w-full rounded-full bg-gray-100 opacity-[0.8]"></div>
      </div>
    </div>

    <div v-else>
      <p class="block text-sm font-normal text-gray-500 cursor-[context-menu]">Upload Image</p>
      <label for="image" class="block relative h-40 w-40 mx-auto text-gray-500  rounded-full">
        <div class="flex items-center justify-center w-full h-full bg-gray-300 rounded-full shadow-md cursor-pointer">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-gray-500 cursor-pointer" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path></svg>
        </div>
        <div v-if="!editable" class="absolute inset-0 h-full w-full rounded-full bg-gray-100 opacity-[0.8]"></div>
      </label>
      <input v-if="editable" @change="setProfileImage" type="file" id="image" accept="image/*" class="hidden">
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['editable']);
const profileImage = ref(null);
const profileImageSettings = ref(false);
// set profile image
function setProfileImage(event) {
  if (event?.target?.files[0]) {
    profileImage.value = URL.createObjectURL(event.target.files[0]);
  }
}

function updateProfileImage() {

}

function removeProfileImage() {
  profileImage.value = null;
}
</script>
