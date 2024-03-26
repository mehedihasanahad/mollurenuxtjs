<template>
  <div>
    <div class="mt-2">
      <label for="password" class="flex items-center gap-1 text-sm font-normal text-gray-500">
        <span>Password  <span class="text-red-500">*</span> </span>
      </label>
      <div class="relative">
        <input :type="passwordType ? 'password' : 'text'" id="password" name="legalName" placeholder="Enter Password" class="custom-input" value="">
        <div @click="passwordType = !passwordType" class="absolute cursor-pointer right-3 bottom-3">
          <svg v-if="passwordType" class="w-6 h-7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
            <g>
              <g>
                <path d="m499.4,250.8c-51-86.3-143.6-140.4-243.4-140.4s-192.5,54.1-243.4,140.4c-2.1,3.1-2.1,7.3 5.32907e-15,10.4 51,86.3 143.6,140.4 243.4,140.4s192.5-54.1 243.4-140.4c2.1-3.1 2.1-7.3 0-10.4zm-243.4,130c-90.5,0-174.8-47.8-221.6-124.8 46.8-77 131.1-124.8 221.6-124.8s174.8,47.8 221.6,124.8c-46.8,77-131.1,124.8-221.6,124.8z"/>
                <path d="m256,162.4c-52,0-93.6,41.6-93.6,93.6 0,52 41.6,93.6 93.6,93.6s93.6-41.6 93.6-93.6c0-52-41.6-93.6-93.6-93.6zm0,166.4c-40.6,0-72.8-32.3-72.8-72.8s32.3-72.8 72.8-72.8 72.8,32.3 72.8,72.8-32.2,72.8-72.8,72.8z"/>
                <path d="m256,214.4v20.8c11.4,0 20.8,9.4 20.8,20.8s-9.4,20.8-20.8,20.8-20.8-9.4-20.8-20.8h-20.8c0,22.9 18.7,41.6 41.6,41.6 22.9,0 41.6-18.7 41.6-41.6s-18.7-41.6-41.6-41.6z"/>
              </g>
            </g>
          </svg>
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
          <svg v-if="rePasswordType" class="w-6 h-7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
            <g>
              <g>
                <path d="m499.4,250.8c-51-86.3-143.6-140.4-243.4-140.4s-192.5,54.1-243.4,140.4c-2.1,3.1-2.1,7.3 5.32907e-15,10.4 51,86.3 143.6,140.4 243.4,140.4s192.5-54.1 243.4-140.4c2.1-3.1 2.1-7.3 0-10.4zm-243.4,130c-90.5,0-174.8-47.8-221.6-124.8 46.8-77 131.1-124.8 221.6-124.8s174.8,47.8 221.6,124.8c-46.8,77-131.1,124.8-221.6,124.8z"/>
                <path d="m256,162.4c-52,0-93.6,41.6-93.6,93.6 0,52 41.6,93.6 93.6,93.6s93.6-41.6 93.6-93.6c0-52-41.6-93.6-93.6-93.6zm0,166.4c-40.6,0-72.8-32.3-72.8-72.8s32.3-72.8 72.8-72.8 72.8,32.3 72.8,72.8-32.2,72.8-72.8,72.8z"/>
                <path d="m256,214.4v20.8c11.4,0 20.8,9.4 20.8,20.8s-9.4,20.8-20.8,20.8-20.8-9.4-20.8-20.8h-20.8c0,22.9 18.7,41.6 41.6,41.6 22.9,0 41.6-18.7 41.6-41.6s-18.7-41.6-41.6-41.6z"/>
              </g>
            </g>
          </svg>
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
</template>

<script setup>
const passwordType = ref(true);
const rePasswordType = ref(true);

</script>
