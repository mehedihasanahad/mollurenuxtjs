<template>
  <div class="mt-4">
    <div class="w-full py-2 ps-5 bg-customBlue rounded-md bg-mix-blue">
      <h2 class="text-white font-[customfontSemibold] text-lg">User Information</h2>
    </div>

    <div class="flex items-start justify-center w-full h-full">
      <div class="w-full md:w-[32rem] border rounded-3xl my-10 md:mt-20 shadow-md md:p-3  bg-white z-30">
        <div class="w-full p-3 space-y-2.5">
          <div>
            <h2 class="text-[28px] mb-2 font-[customfontSemibold]">Sign Up</h2>
          </div>

          <div>
            <label for="legalName" class="flex items-center gap-1 text-sm font-normal text-gray-500">
              <span> Legal Name <span class="text-red-500">*</span> </span>
              <InfoTooltip text="Enter your full name."/>
            </label>
            <input type="text" id="legalName" name="legalName" placeholder="Enter Legal Name" class="custom-input" value="">
          </div>

          <div>
            <label for="cocNumber" class="flex items-center gap-1 text-sm font-normal text-gray-500">
              <span> COC Number <span class="text-red-500">*</span> </span>
            </label>
            <input type="text" id="cocNumber" name="legalName" placeholder="Enter COC Number" class="custom-input" value="">
          </div>

          <div>
            <label for="vatNumber" class="flex items-center gap-1 text-sm font-normal text-gray-500">
              <span> VAT Number <span class="text-red-500">*</span> </span>
            </label>
            <input type="text" id="vatNumber" name="legalName" placeholder="Enter VAT Number" class="custom-input" value="">
          </div>

          <Address/>

          <DocumentUpload/>

          <div>
            <label for="workLink" class="flex items-center gap-1 text-sm font-normal text-gray-500">
              <span> Provide examples of past work<span class="text-red-500 ml-1">*</span> </span>
              <InfoTooltip text="Please enter your previous work."/>
            </label>
            <input type="text" id="workLink" name="legalName" placeholder="Work Link" class="custom-input" value="">
            <input type="text" id="workLink1" name="legalName" placeholder="Work Link (optional)" class="custom-input" value="">
            <input type="text" id="workLink2" name="legalName" placeholder="Work Link (optional)" class="custom-input" value="">
          </div>

          <ContactInfo/>

          <PasswordAndTerms/>

          <button class="!mt-8 bg-customGreen text-white w-full py-3  mb-4  rounded-md text-base font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
