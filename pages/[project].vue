<template>
  <div v-for="video in  videos.filter(v => v.SLUG === slug && v.CATEGORY > 0) " class="container">
    <PhoneLazyVideoPlayer class="video" :is-project-page="true" max-height="400px" :url="video.VIDEO_HD_URL"
      :start-time="0" :controls="true" />
    <h1> {{ video.HOME_TITLE }} </h1>
    <p class="date">{{ video.DATE }}</p>
    <p class="description"> {{ video.DESCRIPTION }}</p>
    <div class="images">
      <div class="image" v-for=" image  in  currentProjectScreenshots ">
        <img :src="image" alt="">
      </div>
    </div>
    <p class="go-back" @click="goToPrev()"> BACK </p>
  </div>
</template>

<script setup>
const videosState = useVideoStore();
const { videos } = storeToRefs(videosState)

const slug = useRoute().path.split('/')[1]

const images = [
  {
    slug: 'gordon_knight',
    imgs: Object.values(import.meta.glob('@/assets/gordon_knight/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' })),
  },
  {
    slug: 'Fk_les_cops',
    imgs: Object.values(import.meta.glob('@/assets/Fk_les_cops/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' })),
  },
  {
    slug: 'isf',
    imgs: Object.values(import.meta.glob('@/assets/isf/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' })),
  },
  {
    slug: 'kenger',
    imgs: Object.values(import.meta.glob('@/assets/kenger/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' })),
  }
]

const currentProjectScreenshots = images.filter(e => e.slug === slug).length > 0 ? images.filter(e => e.slug === slug)[0].imgs : []


console.log(images);

const router = useRouter()

const goToPrev = () => {
  if (window.history.state.back === "/") {
    router.go(-1)
  } else {
    window.location = 'https://rgb124.be'
  }
}



</script>

<style scoped>
.images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.video,
.v-player {
  max-width: 830px;
  margin: auto;
}

video {}

.image {
  max-width: 49%;
  line-height: 0;
}

img {
  max-width: 200px;
  padding: 0;
  margin: 0;
}

.container {
  min-width: 100%;
  color: white;
  min-height: inherit;
  background-color: black;
  display: flex;
  flex-direction: column;
  row-gap: 0;
}

.video {
  max-height: 400px;
}

h1 {
  color: white;
  min-width: 100%;
  text-align: left;
}

.go-back {
  cursor: pointer;
  user-select: none;
  color: white;
  font-size: 30px;
  text-align: center;
  min-width: 100%;
  background-color: black;
  position: sticky;
  bottom: 0;
}

.date {
  font-weight: 100;
  font-size: 13px;
  font-style: italic;
}

.description {
  font-weight: lighter;
  font-size: 13px;
  font-style: italic;
}
</style>