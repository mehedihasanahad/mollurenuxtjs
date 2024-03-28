<template>
  <div>
    <div class="px-44 pb-[2.2rem] mt-6">
      <div class="text-center sm:flex justify-between">
        <h3 @click="setTab('profile')" class="font-[customfontSemibold] text-xl cursor-pointer" :class="{'text-[#A1A1A1]': (activeTab !== 'profile')}">
          Profile
        </h3>
        <h3 @click="setTab('bookings')" class="font-[customfontSemibold] text-xl cursor-pointer" :class="{'text-[#A1A1A1]': (activeTab !== 'bookings')}">
          Bookings
        </h3>
        <h3 @click="setTab('favourites')" class="font-[customfontSemibold] text-xl cursor-pointer" :class="{'text-[#A1A1A1]': (activeTab !== 'favourites')}">
          Favourites
        </h3>
      </div>
    </div>

    <img class="w-full mb-10" src="/public/TabBar.png" alt="" />

    <!--main content-->
    <div class="mt-10">
      <ProfileComponent v-if="activeTab === 'profile'"/>
      <BookingComponent v-if="activeTab === 'bookings'"/>
      <FavouriteComponent v-if="activeTab === 'favourites'"/>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('profile');

function setTab(tabName) {
  activeTab.value = tabName;
}
</script>
