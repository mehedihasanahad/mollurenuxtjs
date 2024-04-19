<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
    <ServiceCard v-for="n in 12" :key="n"/>
  </div>
</template>
