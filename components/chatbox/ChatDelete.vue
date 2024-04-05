<template>
  <div class="border-b border-b-2 border-b-gray-100 px-4 pb-4 mt-4 flex justify-between items-center">
    <button class="bg-red-100 text-red-600 py-1 px-4 rounded-md">Delete</button>
    <div class="flex gap-x-3 items-center">
      <label class="text-lg font-normal text-gray-500 cursor-pointer ms-2" for="selectChatAll">
        Select All
      </label>
      <input type="checkbox" id="selectChatAll" name="acceptTerms" class="w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer">
    </div>
  </div>
</template>
