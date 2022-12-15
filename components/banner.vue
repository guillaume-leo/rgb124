<template>
  <div ref="banner" class="banner" @click="emit('onBannerClick')">
    <div class="banner__text text">
      <img class="text__icon" :class="{ open: props.isOpen }" src="@/assets/FlecheModule.png" alt="arrow icon">
      <p class="text__title">{{ props.title }}</p>
      <img class="text__icon" :class="{ open: props.isOpen }" src="@/assets/FlecheModule.png" alt="arrow icon">

      <span class="text__more" v-if="!props.isOpen">tap for more</span>
      <span class="text__more" v-else>tap for less</span>
    </div>

    <div class="banner__text text" aria-hidden="true">
      <img class="text__icon" :class="{ open: props.isOpen }" src="@/assets/FlecheModule.png" alt="arrow icon">
      <p class="text__title">{{ props.title }}</p>
      <img class="text__icon" :class="{ open: props.isOpen }" src="@/assets/FlecheModule.png" alt="arrow icon">

      <span class="text__more" v-if="!props.isOpen">tap for more</span>
      <span class="text__more" v-else>tap for less</span>
    </div>

    <div class="banner__text text" aria-hidden="true">
      <img class="text__icon" :class="{ open: props.isOpen }" src="@/assets/FlecheModule.png" alt="arrow icon">
      <p class="text__title">{{ props.title }}</p>
      <img class="text__icon" :class="{ open: props.isOpen }" src="@/assets/FlecheModule.png" alt="arrow icon">

      <span class="text__more" v-if="!props.isOpen">tap for more</span>
      <span class="text__more" v-else>tap for less</span>
    </div>

    <div class="banner__text text" aria-hidden="true">
      <img class="text__icon" :class="{ open: props.isOpen }" src="@/assets/FlecheModule.png" alt="arrow icon">
      <p class="text__title">{{ props.title }}</p>
      <img class="text__icon" :class="{ open: props.isOpen }" src="@/assets/FlecheModule.png" alt="arrow icon">

      <span class="text__more" v-if="!props.isOpen">tap for more</span>
      <span class="text__more" v-else>tap for less</span>
    </div>



  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  color: String,
  isOpen: Boolean,
})

const banner = ref(null)

const emit = defineEmits(['onBannerClick'])

watch(() => props.isOpen, () => {
  if (props.isOpen) {
    // const yOffset = -151;
    // const y = banner.value.getBoundingClientRect().top + window.pageYOffset + yOffset;
    // window.scrollTo({ top: y, behavior: 'smooth' });
    banner.value.scrollIntoView({ behavior: "smooth", block: 'start' });
  }
})

</script>

<style scoped>
.banner {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;
  background-color: v-bind(props.color);
  height: 50px;
  scroll-margin-block: 50px;
  ;
}

span,
img,
.text__title {
  margin-block: auto;

}

img {
  margin-inline: 5px;

}

span {
  color: white;
  font-variant: small-caps;
  font-size: 12px;
  letter-spacing: 0.1em;
}

.text__more {
  margin-inline: 7px;

}

.text {
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 5px;
  max-height: 70px;
  flex-shrink: 0;
  animation: scroll 10s linear infinite;

}

.text__icon {
  max-height: 20px;
  transition: all 0.1s ease-in-out;
  transform: rotate(180deg);
}

.open {
  transform: rotate(0deg);
}

.text__title {
  color: white;
  font-size: 40px;
  line-height: 40px;
  font-style: italic;
  font-weight: 0;
  display: inline;
}
</style>