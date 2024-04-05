<template>
  <div>
    <div class="relative cursor-pointer">
      <img class="cursor-pointer rounded-full" src="/public/images/chat/Settings.svg" alt="" @click="settings = !settings"/>
      <div v-click-outside="closeSettings"
           v-if="settings"
           class="min-h-28 absolute top-[30px] -left-[1rem] sm:-left-[40px] md:-left-[90px] z-20 mt-3 -translate-x-1/2 rounded-lg bg-white shadow-lg text-[0.875rem] border border-gray-200">
        <span class="absolute -top-2.5 right-[30px] -z-10 h-5 w-5 -translate-x-1/2 rotate-45 bg-white border-l border-t"></span>

        <!-- body -->
        <div class="w-[150px] sm:w-[200px] md:w-[300px]">
          <div class="mt-3">
            <h4 class="font-[customfontSemibold] text-[1.05rem] px-3">Always delete messages of</h4>

            <div class="flex justify-between items-center px-3 py-2.5 border-b border-b-2 border-b-gray-100">
              <label class="text-sm font-normal text-gray-600 cursor-pointer" for="completedBooking">
                Completed bookings
              </label>
              <input type="checkbox" id="completedBooking" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
            </div>
          </div>

          <div class="flex justify-between items-center py-3 border-b border-b-2 border-b-gray-100 px-3">
            <label class="text-sm font-normal text-gray-600 cursor-pointer" for="cancelledBooking">
              Cancelled bookings
            </label>
            <input type="checkbox" id="cancelledBooking" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
          </div>

          <div class="mt-3">
            <h4 class="font-[customfontSemibold] text-[1.05rem] px-3">Status</h4>

            <div class="flex justify-between items-center py-3 px-3">
              <label class="text-sm font-normal text-gray-600 cursor-pointer" for="busyStatus">
                Busy
              </label>
              <input type="checkbox" id="busyStatus" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const settings = ref(false);

function closeSettings() {
  settings.value = false;
}
</script>
