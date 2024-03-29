<template>
  <div>
    <div v-if="!formType || (formType === 'create')">
      <div>
        <label for="contactPerson" class="flex items-center gap-1 text-sm font-normal text-gray-500">
          <span> Contact Person<span class="text-red-500 ml-1">*</span> </span>
        </label>
        <div class="flex flex-col space-y-5 md:space-x-2 md:space-y-0 md:flex-row">
          <div class="w-full md:w-1/2">
            <input type="text" id="contactPerson" name="firstName" placeholder="Enter First Name" class="custom-input" value="">
          </div>
          <div class="w-full md:w-1/2">
            <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" class="custom-input" value="">
          </div>
        </div>
      </div>

      <div class="mt-2">
        <label for="contactNumber" class="flex items-center gap-1 text-sm font-normal text-gray-500">
          <span>Contact Number <span class="text-red-500">*</span> </span>
        </label>
        <input type="text" id="contactNumber" name="legalName" placeholder="Enter Contact Number" class="custom-input" value="">
      </div>

      <GenderSelect/>

      <div class="mt-2">
        <label for="email" class="flex items-center gap-1 text-sm font-normal text-gray-500">
          <span>Email <span class="text-red-500">*</span> </span>
        </label>
        <input type="text" id="email" name="legalName" placeholder="Enter Email" class="custom-input" value="" autocomplete="autocomplete">
      </div>
    </div>
    <div v-if="formType === 'edit'">
      <div>
        <label for="contactPerson" class="flex items-center gap-1 text-sm font-normal text-gray-500">
          <span> Contact Person<span class="text-red-500 ml-1">*</span> </span>
        </label>
        <div class="flex flex-col space-y-5 md:space-x-2 md:space-y-0 md:flex-row">
          <div class="w-full md:w-1/2">
            <input type="text" id="contactPerson" name="firstName" placeholder="Enter First Name" class="custom-input" :class="{'pointer-events-none bg-gray-100': !editable}" value="">
          </div>
          <div class="w-full md:w-1/2">
            <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" class="custom-input" :class="{'pointer-events-none bg-gray-100': !editable}" value="">
          </div>
        </div>
      </div>

      <div class="mt-2">
        <label for="contactNumber" class="flex items-center gap-1 text-sm font-normal text-gray-500">
          <span>Contact Number <span class="text-red-500">*</span> </span>
        </label>
        <input type="text" id="contactNumber" name="legalName" placeholder="Enter Contact Number" class="custom-input" :class="{'pointer-events-none bg-gray-100': !editable}" value="">
      </div>

      <GenderSelect class="mt-2" formType="edit" :editable="editable"/>

      <div class="mt-2">
        <label for="email" class="flex items-center gap-1 text-sm font-normal text-gray-500">
          <span>Email <span class="text-red-500">*</span> </span>
        </label>
        <input type="text" id="email" name="legalName" placeholder="Enter Email" class="custom-input pointer-events-none bg-gray-100" value="" autocomplete="autocomplete">
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['formType', 'editable']);
</script>
