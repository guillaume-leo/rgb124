<template>
  <div class="container">
    <div class="hero">
      <Shape />

      <div class="hero__text">
        <div class="title">
          RGB <br> 124
        </div>
        <div class="detail">
          <h1>Digital image production </h1>
          <p>We provide creative VFX & 3D films for brands, agencies and music labels.</p>
          <div class="detail__socials socials">
            <a target="_blank" href="https://www.instagram.com/rgb.124/"><img src="@/assets/insta.jpg"
                alt="instagram"></a>
            <a target="_blank" class="socials__email" href="mailto: info.rgb124@gmail.com"><img src="@/assets/MAIL.jpg"
                alt="email"></a>
            <a target="_blank" href="https://vimeo.com/rgb124"><img src="@/assets/VIMEO.jpg" alt="vimeo"></a>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
h1 {
  color: black;
  font-size: 15px;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

img {
  max-width: 40px;
}

.container {
  background-color: black;
  position: relative;
}

.text {
  color: white;
  position: absolute;
  right: 0;
  left: 0;
  top: -60px;
  bottom: 0;
  margin: auto;
  z-index: 1;
  width: fit-content;
  height: fit-content;
}

.title {
  font-weight: 900;
  font-size: 30px;
  line-height: 30px;
  font-style: italic;
  padding: 0;
  margin: 0;
}

.detail {
  padding: 0;
  margin: 0;
  font-size: 13px;
  letter-spacing: -1px;
}

.contact {
  min-height: 300px;
  background-color: white;
  display: flex;
  flex-direction: row;
}

.contact a {
  font-variant: small-caps;
  padding-inline-end: 20px;
  color: black;

}

.hero__text {
  min-width: 50%;
  flex: 1 1 0px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: black;
}

.hero {
  display: flex;
  background-color: white;
}

canvas {
  flex: 1 1 0px;
  min-width: 50%;
  min-height: 350px;
}
</style>