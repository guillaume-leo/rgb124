<template>
  <div ref="rgbLayer" class="rgb-layer"></div>
  <button @click="handleNavVisibility" class="button button--nav">
    <img v-if="!isNavOpen" class="button__icon button__icon--nav" src="~/assets/bar-icon.png" alt="open menu icon">
    <img v-else class="button__icon button__icon--nav" src="~/assets/return-icon.png" alt="close menu icon">
  </button>
  <NavPhone v-show="isNavOpen" />

  <Shape />
  <Transition>
    <Log v-show="isLoading" :logs="logs.slice().reverse()" />
  </Transition>
  <Transition>
    <Progress v-show="isLoading" :progress=progress />
  </Transition>
  <slot />
</template>

<script setup>

const babylonState = useBabylonStore();

const { isLoading, progress, logs } = storeToRefs(babylonState);

const isNavOpen = ref(false)
const rgbLayer = ref(null)

const route = useRoute();
const currentPage = ref(route.path);

const handleNavVisibility = () => {
  isNavOpen.value = !isNavOpen.value;
}

watch(route, (r) => {
  isNavOpen.value = false;
  currentPage.value = r.path;
})

watch(isNavOpen, () => {
  rgbLayer.value.style.display = 'block'
  const colors = ['green', 'blue', 'red']
  let repetitions = 3
  const interval = setInterval(() => {
    if (repetitions > 0) {
      rgbLayer.value.style.backgroundColor = colors[repetitions]
      repetitions--;
    } else {
      clearInterval(interval);
      rgbLayer.value.style.display = 'none'
    }
  }, 45)

})

</script>

<style>
html,
body {
  min-height: 100vh;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: Kanit;
}

#__nuxt {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

iframe {
  width: 100%;
}

span {
  font-family: 'Courier New', Courier, monospace;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transition: all 0.125s ease-in-out;
}

.translateX-enter-from,
.translateX-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

#babylonjsLoadingDiv {
  display: none;
}

canvas {
  width: 100%;
  min-height: 80vh;
  outline: none;
}

main {
  padding-block: 50px;
  padding-inline: 15px;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 1;
  backdrop-filter: blur(5px);
  color: white;
}

.button {
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 0;

  background: transparent;
  cursor: pointer;
  text-align: center;
  max-height: 50px;
}

.button--nav {
  z-index: 3;
  background-color: black;
  position: fixed;
  right: 0;
  top: 0;
}

.button__icon {
  max-height: inherit;
  max-width: 100%;

}

.button__icon--nav {
  filter: invert(1.0);
  max-width: 25px;
}

.rgb-layer {
  width: 100vw;
  height: 100vh;
  z-index: 4;
  position: fixed;
  top: 0;
  display: none;
  opacity: 0.95;
}
</style>