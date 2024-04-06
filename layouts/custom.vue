<template>
  <div class="relative antialiased min-h-[100vh]">
    <img  draggable="false" class="h-96 md:h-[450px] object-contain absolute bottom-0 right-0 z-[-1]" src="/public/Icons/bg/home/right-image.svg" alt="bg-right"/>
    <img  draggable="false" class="h-96 md:h-[450px] object-contain absolute bottom-0 left-0 z-[-1]" src="/public/Icons/bg/home/left-image.svg" alt="bg-left"/>
    <Header class="px-3 md:px-20 xl:px-28"/>
    <main>
      <slot />
    </main>
    <ChatCircle/>
  </div>
</template>
