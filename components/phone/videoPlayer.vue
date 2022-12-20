<template>

  <div :id="props.url" class="v-player" v-intersection-observer="onIntersectionObserver">
    <div class="title">
      <p>video title link</p>
    </div>
  </div>
</template>

<script setup>

import { vIntersectionObserver } from '@vueuse/components'
import Player from '@vimeo/player';

const props = defineProps({
  url: Number
})

let video = null;

const onIntersectionObserver = evt => {
  const isVisible = evt[0].isIntersecting
  if (isVisible) {
    video.play()
  } else {
    video.pause()
  }
}

onMounted(() => {
  const options = {
    id: props.url,
    controls: false,
    keyboard: false,
    muted: true,
    responsive: true,
    autopause: false,
  }

  video = new Player(props.url.toString(), options)
  video.on('pause', function () {
    console.log('paused the video!', props.url);
  });
})

</script>

<style scoped>
.v-player {
  position: relative;
}

.title {
  position: absolute;
  display: flex;
  min-width: 100%;
  min-height: 100%;
}

p {
  margin: auto;
  z-index: 2;
  mix-blend-mode: exclusion;
  color: white;
  font-size: 30px;
  font-variant: small-caps;
  letter-spacing: 4px;
  font-weight: 800;

}
</style>