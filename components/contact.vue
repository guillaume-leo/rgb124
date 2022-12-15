
<template>
  <Banner class="sticky" title="CONTACT" color="rgb(0, 0, 255)" :is-open="contact.isOpen"
    @on-banner-click="handleClick" />

  <Collapse :when="contact.isOpen" class="v-collapse">
    <p class="contact__text-start">For more information, <br /> you can write us by email or instagram</p>
    <div class="contact__links">
      <a class="contact__email" target="_blank" href="mailto: info.rgb124@gmail.com">
        <img src="@/assets/MailTRANSP.png" alt="">
        <p>info.rgb124@gmail.com</p>
      </a>
      <a class="contact__insta" target="_blank" href="https://www.instagram.com/rgb.124/">
        <img src="@/assets/instaTRANSP.png" alt="">
        <p>@rgb.124</p>
      </a>
    </div>
    <p class="contact__text-end">Always excited for new project, don't hesitate to write us to talk about it</p>
  </Collapse>
</template>

<script setup>
import { Collapse } from 'vue-collapsed'

const homepageStore = useHomepageStore();
const { contact } = storeToRefs(homepageStore)
const { toggleContact } = homepageStore

const handleClick = () => {
  toggleContact()
  window.scrollTo(0, 0);
}

</script>


<style scoped>
.v-collapse {
  transition: height 300ms cubic-bezier(0.33, 1, 0.68, 1);
  background: rgb(0, 0, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
}

.contact__text-start,
.contact__text-end {
  text-align: center;
  min-width: 100%;
}

.contact__text-start {
  font-size: larger;
  font-style: italic;
}

.contact__text-start,
.contact__text-end,
.contact__insta,
.contact__email {
  color: white;
  margin: auto;
}

.contact__email,
.contact__insta {
  display: flex;
  gap: 20px;
  max-width: 200px;
  justify-self: flex-start;
  margin-inline: auto;
}

img {
  max-width: 50px;
  object-fit: cover;
}

a {
  cursor: pointer;
}

.sticky {
  position: sticky;
  top: 50px;
  z-index: 3;
}
</style>