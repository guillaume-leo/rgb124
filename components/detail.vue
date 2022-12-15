<template>
  <div class="container">

    <PhoneLazyVideoPlayer class="video" :url="props.data.url" :start-time="0" :controls="true" min-height="100px" />
    <h1> {{ props.data.title }} </h1>
    <!-- <p class="date">{{ props.data.date }}</p> -->
    <p class="description"> {{ props.data.description }}</p>
    <p class="go-back" @click="$emit('closeDetail')">BACK</p>
  </div>
</template>

<script setup>


const props = defineProps({
  data: Object
})

</script>

<style scoped>
.container {
  min-height: 100vh;
  min-width: 100%;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 4;
  display: grid;
  row-gap: 0;
}

.video {
  min-width: 100%;
}

h1 {
  color: white;
  min-width: 100%;
  text-align: left;
  max-height: 100px;
}

.go-back {
  cursor: pointer;
  user-select: none;
  position: fixed;
  color: white;
  bottom: 0;
  font-size: 30px;
  text-align: center;
  min-width: 100%;
}

.date {
  color: white;
  font-weight: 100;
  font-size: 13px;
  font-style: italic;
}

.description {
  color: white;
  font-weight: lighter;
  font-size: 13px;
  font-style: italic;
}
</style>
