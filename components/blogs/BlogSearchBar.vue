<template>
  <div class="flex rounded-lg shadow-lg">
    <input type="text" class="w-full outline outline-1 outline-gray-100 focus:border-none p-3 rounded-l-lg" placeholder="Search Here...">
    <button class="w-14 bg-customGreen flex justify-center items-center outline outline-1 outline-customGreen rounded-r-lg">
      <ClientOnly>
        <img src="/public/Icons/SearchIcon.svg" alt="search-icon"/>
      </ClientOnly>
    </button>
  </div>
</template>
