<template>
  <ul class="logs">
    <img class="logs__logo" src="~/assets/rgb124-loading.gif" alt="website loading logo">
    <li v-for="(log, i) in logs" :key="i" class="logs__log" :style="{ 'margin-left': `${Math.random() * 200}px` }"> {{ i
    }} > {{ log }}
    </li>
  </ul>
</template>

<script setup>

defineProps({
  logs: Array,
})



</script>

<style scoped>
.logs__logo {
  z-index: 1;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  max-width: 50%;
  mix-blend-mode: multiply;
  height: 80%;
  object-fit: contain;
}

.logs {
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: gray;
  margin: 0;
}

.logs__log {
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style: none;
  font-family: 'Courier New', Courier, monospace;
  color: black;
  font-variant: small-caps;
}
</style>