<template>
  <main>
    <section class="project" :id="'project_' + VIDEO_ID" v-for="{ VIDEO_ID, TITLE, DESCRIPTION } in videos">

      <h1 class="project__title"> {{ TITLE }} </h1>
      <p class="project__description"> {{ DESCRIPTION }} </p>
      <iframe :src="'https://player.vimeo.com/video/' + VIDEO_ID + '?h=dc400081cd&title=0&byline=0&portrait=0'"
        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

    </section>
  </main>
</template>

<script setup>

const videosState = useVideoStore();
const { videos } = storeToRefs(videosState)

</script>

<style scoped>
main {
  padding-block: 50px;
  display: flex;
  flex-direction: column;
}

h1,
p {
  padding-inline: 15px;
}

iframe {
  min-width: 100%;
}
</style>