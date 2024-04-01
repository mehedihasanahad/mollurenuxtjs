<template>
  <div class="lg:mt-16 gap-3 grid grid-cols-1 lg:grid-cols-2">
    <div class="flex justify-center items-center">
      <img draggable="false" class="object-contain" src="/public/Icons/contact-us.svg" alt="contact-us page image">
    </div>
    <div class="flex justify-center items-center">
      <div class="w-full md:w-[34rem] border rounded-3xl my-10 md:mt-10 shadow-md md:px-2 py-2 bg-white z-30">
        <div class="flex items-start justify-start w-full">
          <div class="w-full p-3 space-y-5 ">
            <div>
              <h2 class="text-[28px] mb-2 font-semibold">Contact Us</h2>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-2 md:flex-row">
                <div class="w-full">
                  <label for="fname" class="block text-sm font-normal text-gray-500">First Name</label>
                  <input type="text" id="fname" placeholder="Enter First Name" class="w-full px-3 py-3 mt-1 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-customGreen focus:bg-white">
                </div>

                <div class="w-full">
                  <label for="lname" class="block text-sm font-normal text-gray-500">Last Name</label>
                  <input type="text" id="lname" placeholder="Enter Last Name" class="w-full px-3 py-3 mt-1 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-customGreen focus:bg-white">
                </div>
              </div>

              <div class="flex flex-col gap-2 md:flex-row">
                <div class="w-full">
                  <label for="email" class="block text-sm font-normal text-gray-500">Email</label>
                  <input type="email" id="email" placeholder="Enter Email" class="w-full px-3 py-3 mt-1 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-customGreen focus:bg-white">
                </div>

                <div class="w-full">
                  <label for="contact" class="block text-sm font-normal text-gray-500">Contact Number</label>
                  <input type="text" id="contact" placeholder="Enter Contact Number" class="w-full px-3 py-3 mt-1 text-base font-normal border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-customGreen focus:bg-white">
                </div>
              </div>

              <div class="w-full">
                <label for="detail" class="block text-sm font-normal text-gray-500">Message</label>
                <textarea type="detail" id="detail" placeholder="Enter Message" class="resize-none w-full px-3 py-3 mt-1 text-base font-normal border border-gray-300 rounded-md cursor-pointer selectDropdown h-28 focus:outline-none focus:ring focus:border-customGreen focus:bg-white"></textarea>
              </div>
            </div>

            <div class="pt-5">
              <button class="w-full py-3 text-base font-medium text-white rounded-md bg-customGreen">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
