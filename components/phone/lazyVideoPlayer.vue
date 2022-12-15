<template>
  <div class="v-player">
    <video :controls="props.controls" ref="player" v-intersection-observer="onIntersectionObserver"
      @timeupdate="onTimeUpdate" :src="props.url" playsinline="" autoplay="autoplay" muted="muted" loop="loop" />
    <NuxtLink v-show="!isProjectPage" :to="'/' + props.slug" class="title">
      <p v-show="props.linkText"> {{ props.linkText }} <img src="@/assets/PlayWhite.png" alt="play icon" /></p>

    </NuxtLink>
  </div>
</template>

<script setup>

import { vIntersectionObserver } from '@vueuse/components'

const props = defineProps({
  url: String,
  linkText: String,
  startTime: Number,
  minHeight: String,
  maxHeight: String,
  minWidth: String,
  loopRange: String || Number,
  slug: String,
  controls: Boolean,
  description: String,
  date: Number,
  isProjectPage: Boolean
})

const player = ref(null)




/**----------------------
 *    pause the video when not visible
 *------------------------**/

const onIntersectionObserver = evt => {
  const isVisible = evt[0].isIntersecting
  if (!player.value) return;
  if (isVisible) {
    player.value.play()
  } else {
    player.value.pause()
  }
}

/**----------------------
 *    set some player init values
 *------------------------**/

onMounted(() => {
  player.value.currentTime = props.startTime || 0
  player.value.minHeight = props.minHeight || '100%'
})

const onTimeUpdate = () => {
  if (!props.loopRange || !player.value) return;
  if (player.value.currentTime > props.loopRange.split(' ')[1]) {
    player.value.currentTime = props.loopRange.split(' ')[0]
  }
}

</script>

<style scoped>
.v-player {
  position: relative;
  min-height: v-bind("props.minHeight");
  min-width: v-bind("props.minWidth");
  line-height: 0;
}

.title {
  position: absolute;
  display: flex;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  font-weight: 900;
  padding-inline: 10px;
}

.title:hover>p,
.title:hoveredr {
  cursor: pointer;
  text-decoration: underline;
}

p {
  margin-inline-start: auto;
  margin-block: auto;
  color: white;
  background: black;
  font-size: 10px;
  /* font-variant: small-caps; */
  /* letter-spacing: 4px; */
  font-weight: 100;

  text-decoration: none;
  padding-inline: 10px;
  line-height: 20px;
  font-style: italic;

}

a {
  text-decoration: none;

}

video {
  object-fit: cover;
  min-height: v-bind("props.minHeight");
  min-width: v-bind("props.minWidth");
  max-width: 100%;
  max-height: v-bind("props.maxHeight");
}

@media screen and (min-width: 600px) {
  .v-player {
    width: 50%;
    line-height: 0px;
    display: flex;
    justify-content: center;
  }

  /* video {
    min-height: 100%;
    min-width: 50%;
  } */
}

img {
  max-height: 7px;
  margin-inline: 10px;
}
</style>