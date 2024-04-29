<template>
  <div class="grid lg:grid-cols-2 xl:grid-cols-5 gap-4">
    <div class="lg:col-span-1 xl:col-span-2">
      <div>
        <div class="border border-gray-200 rounded-lg">
          <div class="sm:grid grid-cols-2">
            <RatingFilterLeft/>

            <RatingFilterRight/>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-1 xl:col-span-3">
      <RatingMessages/>
    </div>
  </div>
</template>
