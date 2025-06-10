<template>
  <div class="nftbg">
    <Headers></Headers>
    <h1>CATZ NFTs</h1>
    <div class="nftcon">
      <h4 class="list-title-2" style="text-align: center">
        - Early access &amp; Freemint for the upcoming CATZ project.<br />- Use
        NFT to access CATZ Launchpad.<br />- Use NFT CATZ to access future
        Borrow.<br />- Airdrop 300 $DEEZ Holding NFT.<br />
      </h4>
    </div>
    <div class="nftimg">
      <img src="" alt="" />
    </div>
    <div class="nftbut">
      <div class="flnum">
        <div class="jsq">
          <div class="sjbox">
            <div class="s t vs">
              <p>{{ day }}</p>
              <p>days</p>
            </div>
            <p class="mh">:</p>

            <div class="s p">
              <p>{{ shi }}</p>
              <p>hours</p>
            </div>
            <p class="mh">:</p>
            <div class="s f t">
              <p>{{ fen }}</p>
              <p>minutes</p>
            </div>
            <p class="mh">:</p>
            <div class="s m t">
              <p>{{ miao }}</p>
              <p>seconds</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button :class="prohibit == '0' ? 'prohibit' : ''">Mint INFO</button>
      </div>
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
import { ref, onMounted } from "vue";
import Headers from "../components/rouheader.vue";
let day = ref("0");
let shi = ref("0");
let fen = ref("0");
let miao = ref("0");
const wltime = new Date("2023-7-10 10:57:00").getTime();
let prohibit = ref("0");
const gettime = () => {
  let nowtime = new Date().getTime();
  let chatime = wltime - nowtime;
  if (chatime <= 0) {
    day.value = "0";
    shi.value = "00";
    fen.value = "00";
    miao.value = "00";
    prohibit.value = "1";
  } else {
    cltime(chatime);
  }
  const timer = setInterval(() => {
    let nowtime = new Date().getTime();
    let chatime = wltime - nowtime;
    if (chatime <= 0) {
      clearInterval(timer);
      day.value = "0";
      shi.value = "00";
      fen.value = "00";
      miao.value = "00";
      prohibit.value = "1";
    } else {
      cltime(chatime);
    }
  }, 1000);
};
const cltime = (chatime) => {
  day.value = Math.floor(chatime / 1000 / 60 / 60 / 24).toString();
  miao.value = Math.floor((chatime / 1000) % 60)
    .toString()
    .padStart(2, "0");
  fen.value = Math.floor((chatime / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");
  shi.value = Math.floor((chatime / 1000 / 60 / 60) % 24)
    .toString()
    .padStart(2, "0");
};
gettime();
</script>

<style scoped>
.with_s {
  font-size: 2.5rem;
  display: block;
  margin-top: 2rem;
}
.sjbox {
  display: flex;
  margin-left: 0.5rem;
}
.sjbox .t {
  padding-top: 0.8rem;
}
.s {
  align-items: center;
  background-color: #fffb7e;
  border: 0.3rem solid #000;
  border-radius: 0.825rem;
  box-shadow: 0 4.33121px 4.33121px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
}

.p {
  padding: 0.8rem 1.4rem;
}

.s p:nth-child(1) {
  color: #000;
  font-size: 2.5rem;
  font-weight: 600;
  padding-bottom: 0.3rem;
}

.s p:nth-child(2) {
  color: #ac8510;
  font-size: 1.125rem;
}

.mh {
  color: #000;
  font-size: 2.6875rem;
  line-height: 7rem;
  margin: -0.3125rem 0.25rem 0;

  text-align: center;
}
.flnum {
  display: flex;
  justify-content: space-between;
  justify-content: center;
  width: 25%;
}
.whit_box {
  width: 100%;
  height: 45rem;
  display: flex;
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

.vs {
  width: 7rem;
}
footer {
  position: relative;
  margin-bottom: 3rem;
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
.list-title-2 {
  margin-top: 0.9rem;
}
.nftbg {
  background-image: url("../assets/pickback.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.nftbg h1 {
  text-align: center;
  margin-top: 2rem;
  color: #000;
  font-size: 5.75rem;
  line-height: 4.625rem;
  text-align: center;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}
.nftcon {
  margin-top: 2rem;
  color: #000;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}
.nftimg {
  width: 45rem;
  height: 45rem;
  margin: -5rem auto;
  transition: transform 0.5s ease-in;
  transform: scale(0.9);
  animation: scale 4s linear infinite;
}
@keyframes scale {
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}
.nftimg img {
  width: 100%;
  height: 100%;
  content: url("../assets/nftimg.png");
}
.nftbut {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.nftbut > div:nth-child(2) button {
  display: inline-block;
  border: 0.3125rem solid #0e280e;
  width: auto;
  padding: 1.5rem 4.875rem;
  background: rgb(222, 252, 255);
  box-shadow: inset 0 0.5rem 0.5rem rgba(133, 204, 255, 0.25);
  border-radius: 100px;
  margin: 0.7rem 0.9rem 0 0;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
  font-size: 1.5rem;
  color: #000;
  font-weight: 700;
}
.nftbut > div:nth-child(2) button:hover {
  background-color: rgb(87, 203, 253);
}
.nftbut > div:nth-child(2) .prohibit {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
