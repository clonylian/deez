<template>
  <div class="stabg">
    <Headers></Headers>
    <div class="stakbox">
      <h2>Coming soon!</h2>
    </div>
    <div class="whit_box stafo">
      <p class="whiteCat">
        <span class="with_span"
          >Founded by Catoshi but powered by you.
          <span class="with_s">
            Catoshi and his trusted harem of Web3 makers, breakers, tinkerers
            and cat-lovers.
          </span>
        </span>
      </p>
    </div>
    <footer>
      <div class="footp">
        <p>CopyRight © 2023</p>
        <p>DEEZCATZ All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Headers from "../components/rouheader.vue";
let active = ref("1");
const change = (str) => {
  active.value = str;
};
</script>

<style scoped>
.with_s {
  font-size: 2.5rem;
  display: block;
  margin-top: 2rem;
}
.whit_box {
  width: 100%;
  height: 45rem;
  display: flex;
  margin-top: 5rem;
}

.whiteCat {
  width: 80%;
  margin: 0 auto;
  font-size: 3rem;
  background-image: url("../assets/cat_one.png");
  background-size: 100%;
  background-repeat: no-repeat;
}

.with_span {
  width: 60%;
  display: inline-block;
  margin: 18rem 0 0 44rem;
}

.stakbox {
  width: 70%;
  margin: 16rem auto;
}
.stabg {
  background-image: url("../assets/pickback.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.stakbox h2 {
  font-size: 12rem;
  text-align: center;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}
footer {
  position: relative;
  bottom: 0;
}
footer .footp {
  align-items: center;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  z-index: 0;
  column-gap: 10rem;
}

.footp {
  font-size: 3.125rem;
  line-height: 3.875rem;
  color: #000;
  font-weight: 600;
}

footer > p {
  color: #000;
  font-size: 3.125rem;
  line-height: 3.875rem;
  font-weight: 600;
  margin-top: 1.25rem;
  text-align: center;
}

.footer .ju {
  column-gap: 3rem;
}
</style>
