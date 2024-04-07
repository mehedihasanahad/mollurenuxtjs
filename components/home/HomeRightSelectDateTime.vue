<template>
  <div>
    <button class="relative w-full pr-8 mt-1 text-base font-normal text-left transition duration-150 ease-in-out custom-input-bottom" type="button">
      <input type="text" value="Select Date and Time" :class="{'pointer-events-none': true}" class="w-full text-gray-400 block truncate outline-none"/>
      <span class="absolute inset-y-0 flex items-center pointer-events-none right-1">
          <img src="public/Icons/Icons_second part copy/SVGs/Arrow/Chevron_Down.svg" alt="arrow">
        </span>
    </button>
  </div>
</template>
