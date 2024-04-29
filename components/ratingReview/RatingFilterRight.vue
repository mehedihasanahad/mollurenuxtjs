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
          <div
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
                    <div id="accordion_1" class="accordion flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100" @click="accordionFn($event)">
                      <p class="text-sm font-normal text-gray-600 cursor-pointer">
                        Nail
                      </p>
                      <img class="pl-1" src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
                    </div>

                    <div class="overflow-hidden">
                      <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100 px-2">
                        <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientIC">
                          Subservice 1
                        </label>
                        <input type="checkbox" id="filterClientIC" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
                      </div>

                      <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100 px-2">
                        <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientIC">
                          Subservice 2
                        </label>
                        <input type="checkbox" id="filterClientIC" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
                      </div>

                      <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100 px-2">
                        <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientIC">
                          Subservice 3
                        </label>
                        <input type="checkbox" id="filterClientIC" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
                      </div>
                    </div>
                  </div>

                  <!-- accordion -->
                  <div>
                    <div id="accordion_2" class="accordion flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100" @click="accordionFn($event)">
                      <p class="text-sm font-normal text-gray-600 cursor-pointer">
                        Hair
                      </p>
                      <img class="pl-1" src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
                    </div>

                    <div class="h-0 overflow-hidden">
                      <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100 px-2">
                        <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientIC">
                          Hair 1
                        </label>
                        <input type="checkbox" id="filterClientIC" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
                      </div>

                      <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100 px-2">
                        <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientIC">
                          Hair 2
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
const service = ref(true);

function closeService() {
  service.value = false;
}

function accordionFn(event) {
  document.querySelectorAll('.accordion').forEach(item => {
    if (event.target.id === item.id) item.nextSibling.classList.remove('h-0');
    else item.nextSibling.classList.add('h-0');
  });

}
</script>
