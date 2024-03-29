<template>
  <div>
    <div class="relative">
      <img title="Click to edit your profile" @click="editable = !editable" draggable="false" class="absolute right-5 top-3 md:top-5 cursor-pointer" src="/public/Icons/first Icons copy/Edit/Edit_Pencil_Line_01.svg" alt="edit-button"/>
    </div>
    <IndividualUserSignup formType="edit" :editable="editable" v-if="$route.query.user_type === 'individual'"/>
    <CompanyClientSignup formType="edit" :editable="editable" v-if="$route.query.user_type === 'company_client'"/>
    <ProfessionalUserSignup formType="edit" :editable="editable" v-if="$route.query.user_type === 'professional_user'"/>
  </div>
</template>

<script setup>
const editable = ref(false);
</script>

