<template>
  <div>
    <div v-if="!formType || formType === 'create'" class="mt-4">
      <div class="flex items-start justify-center w-full h-full">
        <div class="w-full md:w-[32rem] border rounded-3xl my-10 md:mt-20 shadow-md md:p-3  bg-white z-30">
          <div class="w-full p-3 space-y-2.5">
            <div>
              <h2 class="text-[28px] mb-2 font-[customfontSemibold]">Sign Up</h2>
            </div>

            <!--first name & last name-->
            <div class="flex flex-col space-y-5 md:space-x-2 md:space-y-0 md:flex-row">
              <div class="w-full md:w-1/2">
                <label for="firstName" class="block text-sm font-normal text-gray-500">First Name <span class="text-red-500">*</span></label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" class="w-full px-3 py-3 mt-2 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400 focus:bg-white" value="">
              </div>
              <div class="w-full md:w-1/2">
                <label for="lastName" class="block text-sm font-normal text-gray-500">Last Name <span class="text-red-500">*</span></label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter First Name" class="w-full px-3 py-3 mt-2 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400 focus:bg-white" value="">
              </div>
            </div>

            <!--select review and ratings-->
            <SelectReviewRatingsName/>

            <!--date of birth-->
            <div class="w-full relative">
              <label for="dob" class="block text-sm font-normal text-gray-500">Date of Birth <span class="text-red-500">*</span></label>
              <input type="date" id="dob" name="dob" placeholder="Enter Date of Birth" class="w-full px-3 py-3 mt-2 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400 focus:bg-white" value="">
              <div class="h-6 w-10 bg-white absolute right-2 top-10"></div>
            </div>

            <!--gender selection-->
            <GenderSelect/>

            <!--contact number-->
            <div class="mt-2">
              <label for="contactNumber" class="flex items-center gap-1 text-sm font-normal text-gray-500">
                <span>Contact Number <span class="text-red-500">*</span> </span>
              </label>
              <input type="text" id="contactNumber" name="legalName" placeholder="Enter Contact Number" class="custom-input" value="">
            </div>

            <!--email-->
            <div class="mt-2">
              <label for="email" class="flex items-center gap-1 text-sm font-normal text-gray-500">
                <span>Email <span class="text-red-500">*</span> </span>
              </label>
              <input type="text" id="email" name="legalName" placeholder="Enter Email" class="custom-input" value="" autocomplete="autocomplete">
            </div>

            <PasswordAndTerms/>

            <button class="!mt-8 bg-customGreen text-white w-full py-3  mb-4  rounded-md text-base font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="formType === 'edit'" class="mt-4">
      <div class="flex items-start justify-center w-full h-full">
        <div class="w-full md:w-[32rem] border rounded-3xl my-10 md:mt-20 shadow-md md:p-3  bg-white z-30">
          <div class="w-full p-3 space-y-2.5">
            <div>
              <h2 class="text-[28px] mb-2 font-[customfontSemibold]">Sign Up</h2>
            </div>

            <!--first name & last name-->
            <div class="flex flex-col space-y-5 md:space-x-2 md:space-y-0 md:flex-row">
              <div class="w-full md:w-1/2">
                <label for="firstName" class="block text-sm font-normal text-gray-500">First Name <span class="text-red-500">*</span></label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" class="w-full px-3 py-3 mt-2 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400 focus:bg-white" value="">
              </div>
              <div class="w-full md:w-1/2">
                <label for="lastName" class="block text-sm font-normal text-gray-500">Last Name <span class="text-red-500">*</span></label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter First Name" class="w-full px-3 py-3 mt-2 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400 focus:bg-white" value="">
              </div>
            </div>

            <!--select review and ratings-->
            <SelectReviewRatingsName/>

            <!--date of birth-->
            <div class="w-full relative">
              <label for="dob" class="block text-sm font-normal text-gray-500">Date of Birth <span class="text-red-500">*</span></label>
              <input type="date" id="dob" name="dob" placeholder="Enter Date of Birth" class="w-full px-3 py-3 mt-2 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400 focus:bg-white" value="">
              <div class="h-6 w-10 bg-white absolute right-2 top-10"></div>
            </div>

            <!--gender selection-->
            <GenderSelect/>

            <!--contact number-->
            <div class="mt-2">
              <label for="contactNumber" class="flex items-center gap-1 text-sm font-normal text-gray-500">
                <span>Contact Number <span class="text-red-500">*</span> </span>
              </label>
              <input type="text" id="contactNumber" name="legalName" placeholder="Enter Contact Number" class="custom-input" value="">
            </div>

            <!--email-->
            <div class="mt-2">
              <label for="email" class="flex items-center gap-1 text-sm font-normal text-gray-500">
                <span>Email <span class="text-red-500">*</span> </span>
              </label>
              <input type="text" id="email" name="legalName" placeholder="Enter Email" class="custom-input" value="" autocomplete="autocomplete">
            </div>

            <PasswordAndTerms/>

            <button class="!mt-8 bg-customGreen text-white w-full py-3  mb-4  rounded-md text-base font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['formType'])
</script>
