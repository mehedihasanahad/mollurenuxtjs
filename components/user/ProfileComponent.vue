<template>
  <div>
    <div>
      <!--profile menu for professional users only-->
      <div v-if="$route.query.user_type === 'professional_user'">
        <div class="border border-gray-200 rounded-lg">
          <ul class="sm:grid grid-cols-2 [&>li]:text-center [&>li]:cursor-pointer">
            <li class="bg-white border-b rounded-t-md p-0.5 sm:rounded-none sm:rounded-l-md sm:border-0 sm:border-r" @click="profileSelectedTab = 'userInfo'">
              <p class="py-2.5 rounded-md font-[customfontSemibold] text-lg" :class="{'bg-[#21B8BF] text-white': (profileSelectedTab === 'userInfo')}">User Info</p>
            </li>
            <li class="bg-white rounded-md p-0.5" @click="profileSelectedTab = 'professionalTemplate'">
              <p class="py-2.5 rounded-md font-[customfontSemibold] text-lg" :class="{'bg-[#21B8BF] text-white': (profileSelectedTab === 'professionalTemplate')}">Professional Template</p>
            </li>
          </ul>
        </div>
      </div>

      <div v-else class="w-full py-2 ps-5 bg-customBlue rounded-md bg-mix-blue">
        <h2 class="text-white font-[customfontSemibold] text-lg">User Information</h2>
      </div>
    </div>

    <div>
      <UserInfo v-if="profileSelectedTab === 'userInfo'"/>
      <ProfessionalTemplate v-if="profileSelectedTab === 'professionalTemplate'"/>
    </div>

  </div>
</template>

<script setup>

const profileSelectedTab = ref('userInfo');
</script>

