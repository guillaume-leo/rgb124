<template>

  <div class="videos">
    <PhoneVideoPlayer v-for="url in urls" :key="url" class="videos__video" :url="url" />
  </div>

</template>

<script setup>


const urls = ref([782874637, 595204743, 770835251, 510149559, 640436924, 32001208, 122375452])

</script>

<style lang="scss">
.videos {
  display: flex;
  flex-direction: column;
}

.videos__video:last-of-type {
  margin-block-end: 100px;
}
</style>