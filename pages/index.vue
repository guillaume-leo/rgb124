<template>

  <div class="videos">
    <PhoneVideoPlayer v-for="video in homeVideos" :key="video.id" class="videos__video" :url="video.id"
      :link-text="video.linkText" />
  </div>

</template>

<script setup>

const videosState = useVideoStore();
const { videos, homeVideos } = storeToRefs(videosState)


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