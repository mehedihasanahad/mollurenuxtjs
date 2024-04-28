<template>
  <div>
    <ul class="[&>li]:text-center">
      <li class="bg-white border-b rounded-t-md p-0.5">
        <p class="py-2.5 rounded-md font-[customfontSemibold] text-lg">Service</p>
      </li>
      <li class="bg-white rounded-md p-0.5 cursor-pointer relative">
        <div class="flex justify-between px-4 py-3" @click="service = !service">
          <p class="py-2.5 rounded-md font-[customfontSemibold] text-lg">All</p>
          <img class="pl-1" src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
        </div>

        <!-- service filter -->
        <div class="w-full absolute top-12 z-20 mt-3 md:px-1.5">
          <div v-click-outside="closeService"
               v-if="service"
               class="w-full min-h-28 rounded-lg bg-white shadow-lg text-[0.875rem] border border-gray-200">

            <!-- body -->
            <div>
              <!-- client -->
              <div>
                <div class="mt-3 px-3">
                  <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                    <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientAll">
                      Select All
                    </label>
                    <input type="checkbox" id="filterClientAll" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer" checked>
                  </div>

                  <!-- accordion -->
                  <div>
                    <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                      <p class="text-sm font-normal text-gray-600 cursor-pointer">
                        Nail
                      </p>
                      <img class="pl-1" src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
                    </div>

                    <div>
                      <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100 px-2">
                        <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientIC">
                          IC
                        </label>
                        <input type="checkbox" id="filterClientIC" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
                      </div>
                    </div>
                  </div>

                  <!-- accordion -->
                  <div class="h-0 overflow-hidden">
                    <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                      <p class="text-sm font-normal text-gray-600 cursor-pointer">
                        Nail
                      </p>
                      <img class="pl-1" src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
                    </div>

                    <div class="px-2">
                      <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                        <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientIC">
                          IC
                        </label>
                        <input type="checkbox" id="filterClientIC" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script setup>
const service = ref(false);

function closeService() {
  service.value = false;
}
</script>
