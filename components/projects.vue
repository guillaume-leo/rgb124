
<template>
  <Banner class="sticky" title="PROJECTS" color="rgb(255,0,0)" :is-open="project.isOpen"
    @on-banner-click="toggleProjects" />


  <Collapse :base-height="project.height" :when="project.isOpen" class="v-collapse">
    <!-- <p v-show="project.isOpen">Our videos are thought out, designed and delivered through artistic direction. We can
      follow yours or create it for
      your projects. We then create the storytelling from this artistic direction, which becomes the heart of the
      aesthetic.
      We use different technologies and VFX techniquesto keep the goalof the final film</p> -->
    <div class="videos">
      <PhoneLazyVideoPlayer v-for="(video, i) in videos.filter(v => v.CATEGORY === 1)" :key="video.VIDEO_HD_URL"
        class="videos__video" :slug="video.SLUG" :url="video.VIDEO_SD_URL" :min-height="width > 600 && '100%'"
        :min-width="width > 600 && '50%'" :start-time="video.START_TIME" :controls="false" :loop-range="video.LOOP_RANGE"
        :link-text="video.HOME_TITLE" :description="video.DESCRIPTION" :is-project-page="false" :date="video.DATE" />
    </div>

  </Collapse>
</template>

<script setup>

import { Collapse } from 'vue-collapsed'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

const videosState = useVideoStore();
const { videos } = storeToRefs(videosState)

const homepageStore = useHomepageStore();
const { project } = storeToRefs(homepageStore)
const { toggleProjects } = homepageStore

</script>


<style scoped>
.v-collapse {
  transition: height 300ms cubic-bezier(0.33, 1, 0.68, 1);
  background-color: black;
}

p {
  color: white;
  background-color: rgb(255, 0, 0);
  padding: 20px;
  margin: 0;
  font-size: 11px;
  letter-spacing: -0.25px;
}

.sticky {
  position: sticky;
  top: 50px;
  z-index: 2;
}

@media screen and (min-width: 600px) {
  .videos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

}
</style>