<template>

  <NuxtLink :to="url">
    <span v-for="letter in word" ref="glitchLetters"> {{ letter }} </span>
  </NuxtLink>

</template>

<script setup>

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

defineProps({
  word: String,
  url: String
})

const glitchLetters = ref([]);

const isActive = ref(true);

const glitchSometimes = async () => {
  await sleep(parseInt(Math.random() * 8500 + 1500));
  let repetitions = parseInt(Math.random() * 5 + 3);
  const repeat = setInterval(() => {
    if (repetitions > 0 && isActive.value) {


      glitchLetters.value.forEach((letter) => {
        const random = Math.random();
        letter.style.letterSpacing = `${Math.random() * 20 - 10}px`;
        letter.style.color = `${random > 0.5 ? 'red' : 'black'}`;
      })

      repetitions--;
    } else {
      glitchLetters.value.forEach((letter) => {
        letter.style.fontSize = `16px`;
        letter.style.color = `red`;
        letter.style.letterSpacing = `5px`;

      })
      clearInterval(repeat);
    }
  }, 30)
  glitchSometimes();
}

const route = useRoute()

const currentRoute = ref(route.path)

watch(route, (r) => {
  currentRoute.value = r.path
  if (glitchLetters.value[0].parentNode.classList.contains('router-link-active')) {
    isActive.value = true;
    glitchSometimes()
  } else {
    isActive.value = false;
  }
})

onMounted(() => {
  if (glitchLetters.value[0].parentNode.classList.contains('router-link-active')) {
    isActive.value = true;
    glitchSometimes()
  } else {
    isActive.value = false;
  }
})



</script>

<style scoped>
a {
  text-decoration: none;
  overflow-y: hidden;
}

span {
  color: red;
  letter-spacing: 5px;
}
</style>