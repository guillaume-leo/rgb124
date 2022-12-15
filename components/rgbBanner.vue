<template>
  <button @click="handleClick()" ref="rgbBanner" />
</template>

<script setup>

const rgbBanner = ref(null)

const homepageStore = useHomepageStore()
const { toggleRgbBanner } = homepageStore

onMounted(() => {
  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
  );
  observer.observe(rgbBanner.value)
})

const handleClick = () => {
  toggleRgbBanner()
  window.scrollTo(0, 0);
}

</script>

<style scoped>
button {
  background-image: url('@/assets/RGB124v1.png');
  background-repeat: repeat-x;
  background-size: contain;
  position: sticky;
  top: -1px;
  background-color: black;
  max-height: 0px;
  z-index: 1;
  border: none;
  padding: 0;
  color: white;
}

.is-pinned {
  max-height: 51px;
  height: 51px;
}
</style>