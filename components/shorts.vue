
<template>
  <Banner class="sticky" title="SHORTS" color="rgb(0, 255, 0)" :is-open="short.isOpen" @on-banner-click="toggleShorts" />

  <Collapse :base-height="short.height" :when="short.isOpen" class="v-collapse">

    <div class="videos videos--shorts">
      <PhoneLazyVideoPlayer v-for="video in videos.filter(v => v.CATEGORY === 2)" :key="video.VIDEO_SD_URL"
        @on-link-click="emit('onLinkClick')" class="videos__video video--short" :url="video.VIDEO_HD_URL"
        :start-time="video.START_TIME" :loop-range="video.LOOP_RANGE" min-height="0px" :is-project-page="false"
        :slug="video.SLUG" />
    </div>

  </Collapse>
</template>

<script setup>

import { Collapse } from 'vue-collapsed'

const videosState = useVideoStore();
const { videos } = storeToRefs(videosState)

const homepageStore = useHomepageStore();
const { short } = storeToRefs(homepageStore)
const { toggleShorts } = homepageStore

const emit = defineEmits('onLinkClick')

</script>


<style scoped>
.v-collapse {
  transition: height 300ms cubic-bezier(0.33, 1, 0.68, 1);
}

.sticky {
  position: sticky;
  top: 50px;
  z-index: 3;
}

.videos--shorts {
  min-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media screen and (min-width: 600px) {
  .video--short {
    max-width: 560px;
  }
}

@media screen and (max-width: 600px) {
  .video--short {
    max-width: 50%;
  }
}
</style>