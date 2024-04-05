<template>
  <div>
    <div class="relative cursor-pointer">
      <img class="cursor-pointer rounded-full" src="/public/images/chat/Slider_03.svg" alt="" @click="filters = !filters"/>
      <div v-click-outside="closeFilters"
           v-if="filters"
           class="min-h-28 absolute top-[30px] -left-[2.28rem] sm:-left-[62px] md:-left-[111px] z-20 mt-3 -translate-x-1/2 rounded-lg bg-white shadow-lg text-[0.875rem] border border-gray-200">
        <span class="absolute -top-2.5 right-[7px] -z-10 h-5 w-5 -translate-x-1/2 rotate-45 bg-white border-l border-t"></span>

        <!-- body -->
        <div class="w-[150px] sm:w-[200px] md:w-[300px]">
          <!-- client -->
          <div>
            <div class="mt-3 px-3">
              <h4 class="font-[customfontSemibold] text-[1.05rem]">Clients</h4>

              <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientAll">
                  All
                </label>
                <input type="checkbox" id="filterClientAll" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer" checked>
              </div>

              <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientIC">
                  IC
                </label>
                <input type="checkbox" id="filterClientIC" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
              </div>
            </div>

            <div class="flex justify-between items-center py-3 border-b border-b-2 border-b-gray-100 px-3">
              <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterClientCC">
                CC
              </label>
              <input type="checkbox" id="filterClientCC" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
            </div>
          </div>

          <!-- Location -->
          <div>
            <div class="mt-3 px-3">
              <h4 class="font-[customfontSemibold] text-[1.05rem]">Location</h4>

              <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterLocationAll">
                  All
                </label>
                <input type="checkbox" id="filterLocationAll" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer" checked>
              </div>

              <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterLocationFL">
                  FL
                </label>
                <input type="checkbox" id="filterLocationFL" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
              </div>
            </div>

            <div class="flex justify-between items-center py-3 border-b border-b-2 border-b-gray-100 px-3">
              <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterLocationDL">
                CC
              </label>
              <input type="checkbox" id="filterLocationDL" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
            </div>
          </div>

          <!-- Booking -->
          <div>
            <div class="mt-3 px-3">
              <h4 class="font-[customfontSemibold] text-[1.05rem]">Booking</h4>

              <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterBookingAll">
                  All
                </label>
                <input type="checkbox" id="filterBookingAll" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer" checked>
              </div>

              <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterBookingReq">
                  Requests
                </label>
                <input type="checkbox" id="filterBookingReq" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
              </div>

              <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterBookingConfirmed">
                  Confirmed
                </label>
                <input type="checkbox" id="filterBookingConfirmed" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
              </div>

              <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterBookingCompleted">
                  Completed
                </label>
                <input type="checkbox" id="filterBookingCompleted" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
              </div>

              <div class="flex justify-between items-center py-2.5 border-b border-b-2 border-b-gray-100">
                <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterBookingCancelled">
                  Cancelled
                </label>
                <input type="checkbox" id="filterBookingCancelled" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
              </div>
            </div>

            <div class="flex justify-between items-center py-3 px-3">
              <label class="text-sm font-normal text-gray-600 cursor-pointer" for="filterBookingNoStatus">
                No Status
              </label>
              <input type="checkbox" id="filterBookingNoStatus" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const filters = ref(false);

function closeFilters() {
  filters.value = false;
}
</script>
