<template>
  <slot :keepalive="{}" />
</template>

<script setup>

onMounted(() => {
})

useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,600;1,700;1,900&display=swap',
      crossorigin: ''
    }
  ]
})

/**----------------------
 *    fetch videos
 *------------------------**/

const videosState = useVideoStore();
videosState.storeVideos()

</script>

<style>
html,
body,
#__nuxt {
  background-color: black;
  max-height: 100%;
}

body {
  margin: 0;
  font-family: 'Saira', sans-serif;
}

#__nuxt {
  min-height: inherit;

}
</style>