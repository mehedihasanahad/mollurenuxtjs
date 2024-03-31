<template>
  <div>
    <div v-if="!formType || formType === 'create'">
      <div class="mt-2">
        <label for="password" class="flex items-center gap-1 text-sm font-normal text-gray-500">
          <span>Password  <span class="text-red-500">*</span> </span>
        </label>
        <div class="relative">
          <input :type="passwordType ? 'password' : 'text'" id="password" name="legalName" placeholder="Enter Password" class="custom-input" value="">
          <div @click="passwordType = !passwordType" class="absolute cursor-pointer right-3 bottom-3">
            <img v-if="passwordType" class="pb-[2px]" src="/public/Icons/Icons_second part copy/SVGs/Edit/Show.svg" alt="Info">
            <img v-else class="pb-[2px]" src="/public/Icons/Icons_second part copy/SVGs/Edit/Hide.svg" alt="Info">
          </div>
        </div>
      </div>

      <div class="mt-2">
        <label for="passwordRe" class="flex items-center gap-1 text-sm font-normal text-gray-500">
          <span>Repeat Password<span class="text-red-500 ml-1">*</span> </span>
        </label>
        <div class="relative">
          <input :type="rePasswordType ? 'password' : 'text'" id="passwordRe" name="legalName" placeholder="Enter Password" class="custom-input" value="">
          <div @click="rePasswordType = !rePasswordType" class="absolute cursor-pointer right-3 bottom-3">
            <img v-if="rePasswordType" class="pb-[2px]" src="/public/Icons/Icons_second part copy/SVGs/Edit/Show.svg" alt="Info">
            <img v-else class="pb-[2px]" src="/public/Icons/Icons_second part copy/SVGs/Edit/Hide.svg" alt="Info">
          </div>
        </div>
      </div>

      <div class="flex items-center mt-2">
        <input type="checkbox" id="acceptTerms" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer" value="false">
        <label class="text-sm font-normal text-gray-500 cursor-pointer ms-2" for="acceptTerms">
          Accept our
          <a href="javascript:void(0)">
            <span class="text-black underline">"Terms &amp; conditions"</span>
            <span class="text-red-500 ml-1">*</span>
          </a>
        </label>
      </div>

      <div class="flex items-center mt-2">
        <input type="checkbox" id="subscribeToBlog" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer" value="false">
        <label class="text-sm font-normal text-gray-500 cursor-pointer ms-2" for="subscribeToBlog">
          Subscribe to Blog
        </label>
      </div>
    </div>

    <div v-if="formType === 'edit'">
<!--      <div class="mt-2">-->
<!--        <label for="password" class="flex items-center gap-1 text-sm font-normal text-gray-500">-->
<!--          <span>Password  <span class="text-red-500">*</span> </span>-->
<!--        </label>-->
<!--        <div class="relative">-->
<!--          <input :type="passwordType ? 'password' : 'text'" id="password" name="legalName" placeholder="Enter Password" class="custom-input" :class="{'pointer-events-none bg-gray-100': !editable}" value="">-->
<!--          <div @click="passwordType = !passwordType" class="absolute cursor-pointer right-3 bottom-3">-->
<!--            <img v-if="passwordType" class="pb-[2px]" src="/public/Icons/Icons_second part copy/SVGs/Edit/Show.svg" alt="Info">-->
<!--            <img v-else class="pb-[2px]" src="/public/Icons/Icons_second part copy/SVGs/Edit/Hide.svg" alt="Info">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="mt-2">-->
<!--        <label for="passwordRe" class="flex items-center gap-1 text-sm font-normal text-gray-500">-->
<!--          <span>Repeat Password<span class="text-red-500 ml-1">*</span> </span>-->
<!--        </label>-->
<!--        <div class="relative">-->
<!--          <input :type="rePasswordType ? 'password' : 'text'" id="passwordRe" name="legalName" placeholder="Enter Password" class="custom-input" :class="{'pointer-events-none bg-gray-100': !editable}" value="">-->
<!--          <div @click="rePasswordType = !rePasswordType" class="absolute cursor-pointer right-3 bottom-3">-->
<!--            <img v-if="rePasswordType" class="pb-[2px]" src="/public/Icons/Icons_second part copy/SVGs/Edit/Show.svg" alt="Info">-->
<!--            <img v-else class="pb-[2px]" src="/public/Icons/Icons_second part copy/SVGs/Edit/Hide.svg" alt="Info">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <div class="flex items-center mt-2 disabled-checkedBox">
        <input type="checkbox" id="acceptTerms" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer pointer-events-none bg-gray-100" value="false" checked>
        <label class="text-sm font-normal text-gray-500 cursor-pointer ms-2 pointer-events-none" for="acceptTerms">
          Accept our
          <a href="javascript:void(0)">
            <span class="text-black underline">"Terms &amp; conditions"</span>
            <span class="text-red-500 ml-1">*</span>
          </a>
        </label>
      </div>

      <div class="flex items-center mt-2">
        <input type="checkbox" id="subscribeToBlog" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer" :class="{'pointer-events-none bg-gray-100': !editable}" value="false">
        <label class="text-sm font-normal text-gray-500 cursor-pointer ms-2" :class="{'pointer-events-none': !editable}" for="subscribeToBlog">
          Subscribe to Blog
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
const passwordType = ref(true);
const rePasswordType = ref(true);
const props = defineProps(['formType', 'editable']);
</script>
