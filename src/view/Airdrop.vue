<template>
  <div class="pickbg">
    <Headers></Headers>
    <div>
      <div class="pickbox">
        <div class="pickb">
          <div class="pickbc">
            <p>Aridorp Cooming soon!</p>
          </div>
        </div>
      </div>
      <div class="presale">
        <div class="pre_div">
          <div class="pre_two" v-if="isconnect == 'Disconnect'">
            <div class="pre_input">
              <input
                class="prinput"
                v-model="balance"
                type="number"
                step="0.01"
                min="0.05"
                max="1.00"
                @blur="accounty()"
              />
              <span>ETH</span>
            </div>
            <div class="pre_button jinz">
              <button @click="contribute">Contribute</button>
            </div>
          </div>
          <div class="presale_admin">Eligibility Check</div>
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
          <p>CopyRight © 2025</p>
          <p>DEEZCATZ All Rights Reserved</p>
        </div>
      </footer>
    </div>
  </div>
  <Zhc></Zhc>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Headers from "../components/rouheader.vue";
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
.pre_button button:hover {
  background-color: rgb(87, 203, 253);
}
.prebutton div:hover {
  background-color: rgb(87, 203, 253);
}
.presale_admin {
  width: 57%;
  cursor: pointer;
  height: 6rem;
  margin: 1rem auto;
  text-align: center;
  line-height: 6rem;
  font-size: 2rem;
  border: 0.3rem #000 solid;
  border-radius: 1rem;
  background-color: #defcff;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.prebutton div {
  width: 20rem;
  height: 5rem;
  background-color: #defcff;
  font-size: 1.5rem;
  border: 0.3rem #000 solid;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
  border-radius: 2rem;
  cursor: pointer;
}

.prebutton {
  width: 30%;
  margin: 2rem auto 0;
  display: flex;
  text-align: center;
  line-height: 5rem;
  justify-content: space-around;
}

.pretab {
  margin: 0 auto;
  display: flex;
  width: 28%;
  border: 0.3rem #000 solid;
  justify-content: center;
  padding: 1rem;
  column-gap: 2rem;
  border-radius: 2rem;
  font-size: 2rem;
  height: 13rem;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.pretab div > p:nth-child(1) {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.pretab > div:nth-child(3) > p:nth-child(2) {
  text-align: left;
}

.pretab > div:nth-child(2) {
  width: 0;
  height: 5rem;
  border: 1px #000 solid;
}
.yyi {
  text-align: center;
  color: red;
  font-size: 1.3rem;
  font-weight: 500;
  margin-right: 18rem;
  margin-top: 1rem;
  height: 1.5rem;
}
.preher {
  width: 35%;
  text-align: center;
  margin: 2rem auto;
  font-size: 3.4rem;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}
.preher a {
  color: #000;
  width: 100%;
  display: block;
  word-wrap: break-word;
  margin-top: 1rem;
}
.pre_button button {
  width: 12rem;
  height: 5.5rem;
  font-size: 1.5rem;
  border: 0.3rem #000 solid;
  border-radius: 1.5rem;
  background-color: #defcff;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.prinput {
  width: 80%;
  display: flex;
  background-color: #defcff;
  line-height: 3rem;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;

  /* text-align: left; */
  /* justify-content: space-between; */
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
  text-align: center;
  /* border: 0.5rem solid rgb(103, 114, 227); */
  color: black;
  /* padding: 1rem; */
  width: 75%;
  border: none;
  font-size: 1.5rem;
}

.pre_input {
  /* border: 1px red solid; */
  border: 0.3rem #000 solid;
  border-radius: 1rem;
  font-size: 2rem;
  line-height: 5rem;
  /* background-color: #fff; */
  background-color: #defcff;
  height: 5rem;
  width: 30rem;
}

.pre_div {
  width: 28%;
  margin: 0 auto;
  padding: 0rem 0;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.pre_two {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.presale b {
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  display: inline-block;
  margin-bottom: 1rem;
  color: white;
}

.presale {
  width: 100%;
  height: 12.2rem;
  /* border: 1px red solid;  */
  /* background-color: #0e280e; */
}

.pickbg {
  background-image: url("../assets/pickback.png");
  background-size: 100%;
  background-repeat: no-repeat;
}

.pickbox {
  width: 58%;
  margin: 0.5rem auto 0;
  padding: 0rem 0.75rem 0rem;
  border-radius: 1.875rem;
  position: relative;
}

.pickt {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  display: none;
}

.pickto {
  width: 20rem;
  backdrop-filter: blur(0.625rem);
  background: #fff;
  border: 0.3rem solid #0e280e;
  border-radius: 1.25rem;
  padding-bottom: 1.875rem;
  padding-top: 2.25rem;
  position: relative;
}

.ty {
  width: 10.875rem;
  height: 10.875rem;
  background-image: url("../assets/ty.png");
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.pickto p {
  font-weight: 600;
}

.pickto > p:nth-child(1) {
  color: #000;
  font-size: 1.685rem;
  line-height: 1.25rem;
  text-align: center;
  margin-bottom: 2rem;
}

.ty p:nth-child(1) {
  padding: 3rem 0 1rem;
  color: #000;
  text-align: center;
  font-size: 4.53rem;
  line-height: 2.3125rem;
}

.ty p:nth-child(2) {
  color: #000;
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 1.5625rem;
  text-align: center;
}

.picktt {
  background: url("../assets/pickbaba.png");
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 1.25rem;
  position: relative;
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.8125rem;
  margin-top: 0;
  padding: 0 7rem;
  width: 45.625rem;
  height: 19rem;
}

.pickttcon div {
  align-items: flex-end;
  display: flex;
  justify-content: center;
  column-gap: 4rem;
  margin-left: 8rem;
}

.pickttcon .twoh {
  margin-top: 1rem;
}

.pickttcon div p:nth-child(1) {
  color: #000;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.pickttcon div p:nth-child(2) {
  color: #000;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 2.3125rem;
}

.pickts {
  margin-left: 1rem;
  margin-top: 0;
  width: 30.1875rem;
  background: #fff;
  border: 0.3rem solid #0e280e;
  border-radius: 1.25rem;
  box-sizing: border-box;
  padding: 2.375rem 0;
  position: relative;
}

.pickts p:nth-child(1) {
  color: #000;
  font-size: 2.5rem;
  line-height: 3.0625rem;
  text-align: center;
}

.pickts p:nth-child(2) {
  color: #000;
  margin-top: 0.875rem;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
}

.pickts p:nth-child(3) {
  font-size: 3.75rem;
  line-height: 2.5625rem;
  margin-top: 0.625rem;
  text-align: center;
  padding: 1rem 0;
  box-sizing: border-box;
}

.pickts img {
  content: url("../assets/gifts.png");
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
}

.pickts p:nth-child(4) {
  margin-top: 0.75rem;
  color: #000;
  font-size: 1rem;
  line-height: 20px;
  text-align: center;
}

.pickts p {
  font-weight: 600;
}

.picktsb {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.picktsb button {
  background: radial-gradient(
      5.12% 19.92% at 92.14% 90.6%,
      rgba(239, 246, 33, 0.8) 0,
      rgba(239, 246, 33, 0) 100%
    ),
    radial-gradient(
      5.71% 38.74% at 98.57% 49.57%,
      #499000 0,
      rgba(73, 144, 0, 0) 100%
    ),
    radial-gradient(
      5.24% 22.38% at 2.14% 30.77%,
      rgba(239, 246, 33, 0.8) 0,
      rgba(239, 246, 33, 0) 100%
    ),
    radial-gradient(
      9.67% 65.38% at 5% 91.03%,
      #499000 0,
      rgba(73, 144, 0, 0) 100%
    ),
    linear-gradient(
      180deg,
      #458d00,
      #488d00 15.62%,
      #72b903 44.27%,
      #71b902 68.75%,
      #71ba02
    );
  border: 3px solid #0e280e;
  border-radius: 6.25rem;
  box-shadow: 0 0.625rem 0.625rem rgba(0, 0, 0, 0.25);
  cursor: pointer;
  height: 2.875rem;
  outline: none;
  width: 2.875rem;
}

.pickb {
  background-size: 100%;
  height: auto;
  background-repeat: no-repeat;
  padding: 0.95rem 4rem 1.5rem;
  border-radius: 1.25rem;
  position: relative;
}

.pickb > img {
  /* content: url("../assets/cattwp.png"); */
  bottom: 0;
  display: block;
  height: auto;
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 36rem;
  z-index: 1;
}

.pickbc {
  align-items: center;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.pickbc > p {
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

/* .pickbc .jsq {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
} */

.sjbox {
  display: flex;
  margin-left: 0.5rem;
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
  padding: 1rem 1.4rem;
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

.pinum {
  align-items: center;
  background: rgba(23, 144, 246, 1);
  border-radius: 0.875rem;
  box-shadow: inset 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  height: 4.25rem;
  justify-content: center;
  margin-top: 1.0625rem;
  padding: 1rem 1.625rem;
}

.flnum {
  display: flex;
  justify-content: space-between;
  justify-content: center;
  margin-top: 3rem;
  width: 70%;
}

.pinum input {
  background-color: initial;
  border: none;
  font-size: 2.625rem;
  font-weight: 600;
  outline: none;
  text-align: center;
  width: 8.25rem;
}

.piri {
  font-size: 2.625rem;
  font-weight: 600;
  margin-left: 1rem;
}

.pickvo {
  text-align: center;
  margin-bottom: 29rem;
}

.pickvo p {
  background: #defcff;
  cursor: not-allowed;
  border: 6px solid #0e280e;
  border-radius: 6.25rem;
  box-shadow: 0 0.625rem 0.625rem rgba(0, 0, 0, 0.25);
  height: 4.8125rem;
  font-weight: 600;
  outline: none;
  width: 13rem;
  color: #000;
  font-size: 1.625rem;
  line-height: 4.8125rem;
  text-align: center;
}

.t {
  padding-top: 0.8rem;
}
.jinz {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
