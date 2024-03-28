<template>
  <div>
    <div class="w-full py-2 ps-5 bg-customBlue rounded-md bg-mix-blue">
      <h2 class="text-white font-[customfontSemibold] text-lg">User Information</h2>
    </div>
    <div>
      <div class="relative">
        <img @click="editable = !editable" draggable="false" class="absolute right-5 top-5 cursor-pointer" src="/public/Icons/first Icons copy/Edit/Edit_Pencil_Line_01.svg" alt="edit-button"/>
      </div>
      <IndividualUserSignup formType="edit" :editable="editable" v-if="$route.query.user_type === 'individual'"/>
      <CompanyClientSignup formType="edit" :editable="editable" v-if="$route.query.user_type === 'company_client'"/>
      <ProfessionalUserSignup formType="edit" :editable="editable" v-if="$route.query.user_type === 'professional_user'"/>
    </div>
  </div>
</template>

<script setup>
const editable = ref(false);
</script>

