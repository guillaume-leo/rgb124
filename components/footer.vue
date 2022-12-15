<template>
  <footer>
    <div class="footer__text">
      <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus, vitae blanditiis ea ipsum numquam ut.
      Blanditiis doloremque repellendus repellat, officiis placeat quaerat ex cumque at minima ut repudiandae inventore.
      <br> <br>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum voluptate aliquam facere dignissimos consequatur
      consectetur, repellat atque, odit vitae ab praesentium, est quod culpa ad accusamus asperiores velit amet molestias. -->
    </div>
    <div class="footer__shape">
      <!-- <img src="@/assets/rgb124-loading.gif" alt="animated gif"> -->
    </div>
    <div class="footer__end end">
      <img class="end__rgb" src="@/assets/rgb124carre128.jpg" alt="rgb logo">
      <div class="end__links">
        <p>Created by <a href="https://github.com/guillaume-leo">guillaume-leo</a></p>
        <p>Designed by Alex GD</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-block-start: 150px;
}

img {
  max-width: 80px;
  object-fit: cover;
  margin-inline: auto;
}

.footer__shape {
  display: flex;
  justify-content: center;
}

.end {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.end__rgb {
  margin-block: auto;
  margin-inline: 0;

}

.end__links {
  margin-block: auto;
}

.end__links>p {
  padding: 0;
  margin: 0;
  padding-inline: 10px;

}

a {
  text-decoration: none;
  color: black;
  font-variant: small-caps;
}

a:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>