<template>
  <div class="relative">
    <img @click="open = !open" class="cursor-pointer" draggable="false" src="/public/Icons/chat/tabler_mood-smile.svg" alt="file-upload" />
<!--    <VueChatEmojiComponent-->
<!--        v-if="open"-->
<!--        class="absolute top-14 -left-[130px]"-->
<!--        :open="true"-->
<!--        :width="width"-->
<!--        :height="height"-->
<!--        @handle="selectedEmoji"-->
<!--    />-->
    <ClientOnly>
      <EmojiPicker
          v-if="open"
          class="absolute -top-[330px] -left-[130px]"
          :native="true"
          @select="selectedEmoji"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import EmojiPicker from '/plugins/emoji.client.js';

const emit = defineEmits(['getEmoji'])

const open = ref(false);
const width = ref("300px");
const height = "250px";

function selectedEmoji(emoji) {
  open.value = false;
  emit('getEmoji', emoji);
}
</script>
