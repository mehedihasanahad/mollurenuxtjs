<template>
  <div class="relative customContainer transition transition-duration-300 antialiased min-h-[100vh]">
    <DefaultLayoutBg/>
    <Header/>
    <main>
      <slot />
    </main>
    <ChatCircle/>
  </div>
</template>
