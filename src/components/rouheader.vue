<template>
  <div class="hetop">
    <div class="headerbox first">
      <div class="hecon fitop">
        <div class="heconl">
          <router-link to="/" class="noborder">
            <p class="P">DEEZ</p>
            <span class="O">OR</span>
            <p class="R">CATZ</p>
          </router-link>
          <div class="henei">
            <p>{{ $store.state.headcon }}</p>
          </div>
        </div>
        <div class="lcion right">
          <a href="https://twitter.com/deez_erc20" target="_blank"
            ><img src="" alt="" /></a
          ><a href="https://t.me/deezcatz" target="_blank" class="fj"
            ><img src="" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import bus from "../utils/bus";
import { useStore } from "vuex";
const store = useStore();
onMounted(() => {
  let headcon = localStorage.getItem("rouhead");
  if (headcon == "Swap") {
    store.commit("updateData", "Welcome Swap Dashboard");
  } else if (headcon == "Airdrop") {
    store.commit("updateData", "Welcome Airdrop Dashboard");
  }
});
</script>

<style scoped>
.fitop .lcion {
  display: flex;
  align-items: center;
  column-gap: 1.25rem;
}

.fitop .lcion a {
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  background-color: rgb(222, 252, 255);
  padding: 0.8rem;
  box-sizing: border-box;
  border: 0.4rem solid rgb(0, 121, 190);
}
.fitop .lcion .fj {
  padding: 0.8rem 1rem 0.8rem 0.6rem;
}
.fitop .lcion a:nth-child(1) img {
  width: 100%;
  height: 100%;
  /* content: url("../assets/top4.png"); */
  /* content: url('../assets/tute.jpg'); */
  content: url("../assets/tute.png");
}
.fitop .lcion a:hover {
  background-color: rgb(87, 203, 253);
}
.fitop .lcion a:nth-child(2) img {
  width: 100%;
  height: 100%;
  content: url("../assets/tele.png");
}
.hetop {
  width: 58%;
  margin: 0 auto;
}
.headerbox {
  padding: 1rem 0 1.5rem;
}
.hecon {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.hecon .heconl {
  align-items: center;
  display: flex;
}
.hecon .heconl a {
  width: 14rem;
  height: 7.8125rem;
  position: relative;
  margin-left: -2rem;
  margin-top: 1rem;
}
.P {
  color: white;
  font-weight: 600;
  text-shadow: 0 -2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, 0 2px 0 #000,
    -2px 0 0 #000, 2px 0 0 #000, -2px 0 0 #000, 2px 0 0 #000, -1px -2px 0 #000,
    1px -2px 0 #000, -1px 2px 0 #000, 1px 2px 0 #000, -2px -1px 0 #000,
    2px -1px 0 #000, -2px 1px 0 #000, 2px 1px 0 #000, -2px -2px 0 #000,
    2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, -2px -2px 0 #000,
    2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
  font-size: 4.875rem;
  margin-left: -2rem;
}
.O {
  color: #000;
  position: absolute;
  font-size: 2rem;
  font-weight: 600;
  width: 2.6875rem;
  height: 2.6875rem;
  padding: 0.2rem;
  line-height: 2.6875rem;
  background-color: rgba(80, 228, 204, 1);
  border-radius: 50%;
  border: 0.25rem solid #000;
  top: 3.5rem;
  left: 3rem;
  transform: rotate(-35deg);
  text-align: center;
}
.R {
  color: black;
  font-weight: 600;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
  font-size: 4.875rem;
  margin-top: -1.5rem;
  margin-left: 2rem;
}
.henei {
  margin-left: 9rem;
  margin-top: 2rem;
  width: 30rem;
}
.hecon .heconl .henei p:nth-child(1) {
  color: #000;
  font-size: 2.5rem;
  line-height: 4rem;
  font-weight: 600;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}
.hecon .heconl .henei p:nth-child(2) {
  color: #000;
  font-size: 1.5rem;
  line-height: 1.25rem;
  margin-top: 0.75rem;
  font-weight: 600;
}

.two:hover {
  background-color: rgb(87, 203, 253);
}
.two {
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
  background-color: rgb(222, 252, 255);
  padding: 0.6rem;
  box-sizing: border-box;
  border: 0.4rem solid rgb(0, 121, 190);
}
.two img {
  width: 100%;
  height: 100%;
  content: url("../assets/fenx.png");
}
.ddd:hover {
  background-color: rgb(87, 203, 253);
}
.ddd {
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
  background-color: rgb(222, 252, 255);
  /* padding: 0.8rem; */
  box-sizing: border-box;
  border: 0.4rem solid rgb(0, 121, 190);
}

.ddd img {
  width: 100%;
  height: 100%;
  content: url("../assets/dian.png");
  padding: 0 0 0.75rem;
}
</style>
