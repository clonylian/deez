<template>
  <div :class="show == true ? 'show zhcbox' : 'zhcbox'">
    <div class="zhccont">
      <div class="zhcctop">
        <h2>{{ zhctitle }}</h2>
        <div @click="hidd"></div>
      </div>
      <div class="zhccb">
        <p>
          Refer a friend and you will receive a 5% USDT from their investment!
          In order to receive your bonus, your friend needs to purchase tokens
          worth of at least $30.
          <br />
          Your bonus will be sent to you within 24 hours, to your crypto wallet
          that is related with your referral link.
        </p>
        <div>
          <input class="zhcin" type="text" :placeholder="zhcbut" />
          <button class="zhcbut" @click="copy">{{ copyed }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import bus from "../utils/bus";
let zhctitle = ref("Your referral link");
let show = ref(false);
let zhcbut = ref("");
let copyed = ref("Copy link");
let nowurl = ref("");
onMounted(() => {
  getPageBaseUrl();
  bus.$on("show", (val) => {
    show.value = val;
  });
  bus.$on("iscopy", (val) => {
    if (val != "") {
      zhcbut.value = zhcbut.value + `/?ref=${val}`;
    }
  });
  let isdl = localStorage.getItem("add");
  if (isdl) {
    isdl =
      isdl.substring(0, 4) +
      "..." +
      isdl.substring(isdl.length - 4, isdl.length);
    zhcbut.value = zhcbut.value + `/?ref=${isdl}`;
  }
});
const hidd = () => {
  show.value = false;
};
function getPageBaseUrl() {
  let baseURL = "";
  if (!window.location.origin) {
    // 兼容IE，IE11版本下location.origin为undefined
    window.location.origin =
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "");
  } else {
    baseURL = window.location.origin;
  }
  zhcbut.value = baseURL;
  nowurl.value = baseURL;
}
const copy = () => {
  let isdl = localStorage.getItem("add");
  if (isdl) {
    nowurl.value = nowurl.value + `/?ref=${isdl}`;
  } else {
    nowurl.value = nowurl.value;
  }
  navigator.clipboard.writeText(nowurl.value);
  copyed.value = "Copied!";
};
</script>
<style scoped>
#app .show {
  display: block;
}
.zhcbox {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: none;
}
.zhccont {
  background-color: rgb(96, 151, 253);
  border-radius: 3rem;
  border: 0.5rem #000 solid;
  width: 76rem;
  margin: 30rem auto 0;
  padding: 5rem;
}
.zhcctop {
  display: flex;
  justify-content: space-between;
}
.zhcctop h2 {
  font-size: 3.5rem;
  text-shadow: 0 -5px 0 #fff, 0 -5px 0 #fff, 0 5px 0 #fff, 0 5px 0 #fff,
    -5px 0 0 #fff, 5px 0 0 #fff, -5px 0 0 #fff, 5px 0 0 #fff, -1px -5px 0 #fff,
    1px -5px 0 #fff, -1px 5px 0 #fff, 1px 5px 0 #fff, -5px -1px 0 #fff,
    5px -1px 0 #fff, -5px 1px 0 #fff, 5px 1px 0 #fff, -2px -5px 0 #fff,
    2px -5px 0 #fff, -2px 5px 0 #fff, 2px 5px 0 #fff, -5px -2px 0 #fff,
    5px -2px 0 #fff, -5px 2px 0 #fff, 5px 2px 0 #fff, -3px -5px 0 #fff,
    3px -5px 0 #fff, -3px 5px 0 #fff, 3px 5px 0 #fff, -5px -3px 0 #fff,
    5px -3px 0 #fff, -5px 3px 0 #fff, 5px 3px 0 #fff, -4px -5px 0 #fff,
    4px -5px 0 #fff, -4px 5px 0 #fff, 4px 5px 0 #fff, -5px -4px 0 #fff,
    5px -4px 0 #fff, -5px 4px 0 #fff, 5px 4px 0 #fff, -5px -5px 0 #fff,
    5px -5px 0 #fff, -5px 5px 0 #fff, 5px 5px 0 #fff, -5px -5px 0 #fff,
    5px -5px 0 #fff, -5px 5px 0 #fff, 5px 5px 0 #fff;
}
.zhcctop > div {
  background-image: url("../assets/uescc.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
}
.zhccb p {
  margin: 1rem 0 2rem;
  color: wheat;
  font-size: 1.5rem;
}
.zhcin {
  border: 0.3rem #000 solid;
  border-radius: 1rem;
  font-size: 2rem;
  line-height: 5rem;
  background-color: #defcff;
  height: 6rem;
  width: 50rem;
  padding: 1rem;
  box-sizing: border-box;
}
.zhcbut {
  border: 0.3rem #000 solid;
  border-radius: 1rem;
  font-size: 2rem;
  background-color: #defcff;
  height: 6rem;
  width: 15rem;
  padding: 1rem;
  box-sizing: border-box;
  margin-left: 1rem;
  text-shadow: 0 -5px 0 #fff, 0 -5px 0 #fff, 0 5px 0 #fff, 0 5px 0 #fff,
    -5px 0 0 #fff, 5px 0 0 #fff, -5px 0 0 #fff, 5px 0 0 #fff, -1px -5px 0 #fff,
    1px -5px 0 #fff, -1px 5px 0 #fff, 1px 5px 0 #fff, -5px -1px 0 #fff,
    5px -1px 0 #fff, -5px 1px 0 #fff, 5px 1px 0 #fff, -2px -5px 0 #fff,
    2px -5px 0 #fff, -2px 5px 0 #fff, 2px 5px 0 #fff, -5px -2px 0 #fff,
    5px -2px 0 #fff, -5px 2px 0 #fff, 5px 2px 0 #fff, -3px -5px 0 #fff,
    3px -5px 0 #fff, -3px 5px 0 #fff, 3px 5px 0 #fff, -5px -3px 0 #fff,
    5px -3px 0 #fff, -5px 3px 0 #fff, 5px 3px 0 #fff, -4px -5px 0 #fff,
    4px -5px 0 #fff, -4px 5px 0 #fff, 4px 5px 0 #fff, -5px -4px 0 #fff,
    5px -4px 0 #fff, -5px 4px 0 #fff, 5px 4px 0 #fff, -5px -5px 0 #fff,
    5px -5px 0 #fff, -5px 5px 0 #fff, 5px 5px 0 #fff, -5px -5px 0 #fff,
    5px -5px 0 #fff, -5px 5px 0 #fff, 5px 5px 0 #fff;
}
.zhcbut:hover {
  background-color: rgb(87, 203, 253);
}
</style>
