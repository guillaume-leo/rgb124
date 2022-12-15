<template>
  <div ref="homepage" class="homepage">

    <Hero />
    <RgbBanner />
    <Projects />
    <Shorts />
    <Contact />
  </div>
  <Footer />
</template>

<script setup>

</script>

<style >
.homepage {
  display: flex;
  flex-direction: column;
  min-width: 100%;
}
</style>