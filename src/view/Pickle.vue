<template>
  <div class="pickbg">
    <Headers></Headers>
    <div>
      <div class="pickbox">
        <div class="pickb">
          <div class="pickbc">
            <p>PRESALE SEAGE 1 IS LIVE IN</p>
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
          <div
            class="presale_admin"
            @click="render()"
            v-if="isconnect == 'Connect'"
          >
            Connect Wallet
          </div>
        </div>
        <!-- <p class="yyi">{{ warning }}</p> -->
        <p class="preher">
          {{ eth }}/100.0 ETH
          <br />
          CA:TBA
          <!-- <a
            href="https://etherscan.io/address/0x6d9a06774242a14fObOfd4a4f75bb93ee8d3e56d"
            target="_blank"
            >CA:TBA</a
          > -->
        </p>
        <div class="pretab">
          <div>
            <p>MIN/MAX</p>
            <p>MIN - 0.05 ETH<br />MAX - 1.0 ETH</p>
          </div>
          <div class="pretablive"></div>
          <div>
            <p>CAPS</p>
            <p>SOFTCAP - 25 ETH<br />HARDCAP - 100.0 ETH</p>
          </div>
        </div>
        <div class="prebutton">
          <div @click="zhcshow">My 5% Referral Link</div>
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
  </div>
  <Zhc></Zhc>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Headers from "../components/rouheader.vue";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import bus from "../utils/bus";
import Zhc from "../components/ZHC.vue";
import interactabi from "../assets/Contribute.json";
import Web3 from "web3";
let day = ref("0");
let shi = ref("0");
let fen = ref("0");
let miao = ref("0");
let num = ref(0);
let button = ref(false);
const xhladdress = ref("");
const xxhladdress = ref("");
const xethbalance = ref("");
const balance = ref("0.05");
const eth = ref("0.0");
const warning = ref("");
let pi = ref("0");
let isconnect = ref("Connect");
let interactadd = ref("0x4f5C018C35DD3C276B20Abc8f6aa17537538cB2b");
const wltime = new Date("2023-7-10 10:57:00").getTime();
onMounted(() => {
  let xhladds = localStorage.getItem("add");
  if (xhladds != "") {
    xhladdress.value = xhladds;
    // interact();
  } else {
    render();
  }
  let xhlbal = localStorage.getItem("sthbal");
  if (xhlbal) {
    isconnect.value = "Disconnect";
    xethbalance.value = xhlbal;
  }
  bus.$on("pre", (val) => {
    if (val != "") {
      isconnect.value = "Disconnect";
      xethbalance.value = val;
    }
  });
});
let zhcshow = () => {
  bus.$emit("show", true);
};
let accounty = () => {
  if (Number(balance.value) < 0.05) {
    warning.value = "⚠ 您输入的不在范围呢,请您输入正确的值!";
    balance.value = "0.05";
    console.log("⚠ 您输入的不在范围呢,请您输入正确的值!");
  } else if (Number(balance.value) > 1) {
    warning.value = "⚠ 您输入的不在范围呢,请您输入正确的值!";
    balance.value = "1.00";
  } else {
    balance.value = Number(balance.value).toFixed(2);
  }
};
const web3 = new Web3(
  "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
);
let interact = () => {
  const contract = new web3.eth.Contract(interactabi, interactadd.value);
  console.log(contract.methods);
  let max = contract.methods.MAX_INDIVIDUAL_CONTRIBUTION().encodeABI();
  const wei = 1000000000000000000n;
  eth.value = wei / BigInt(max);
  console.log(BigInt(max));
  return contract;
};
const contribute = async () => {
  let coun = interact();
  const amount = web3.utils.toWei(balance.value, "ether");
  console.log(balance.value);
  let data = coun.methods.contribute(xhladdress.value, amount).encodeABI();
  console.log(data);
  ethereum
    .request({
      method: "eth_sendTransaction",
      params: [
        {
          from: xhladdress.value,
          to: interactadd.value,
          value: amount,
          data: data,
        },
      ],
    })
    .then((txHash) =>
      toastr.error(
        "The transaction was not completed due to an error. Please try again in a few moments.",
        "Failed to Create Transaction"
      )
    )
    .catch((error) => console.error);
};

let web3Modal = {};
const connect = async () => {
  const WalletConnect = window.WalletConnectProvider.default;
  const Fortmatic = window.Fortmatic;
  const providerOptions = {
    fortmatic: {
      package: Fortmatic,
      options: {
        // Mikko's TESTNET api key
        key: "pk_test_391E26A3B43A3350",
      },
    },
    walletconnect: {
      package: WalletConnect,
      options: {
        rpc: {
          56: "https://bsc-dataseed.binance.org/",
          97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        },
        network: "binance",
      },
    },
  };

  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });
  const externalProvider = await web3Modal.connect();
  return new ethers.providers.Web3Provider(externalProvider);
};
const render = async () => {
  const provider = await connect();
  const signer = provider.getSigner(0);
  xhladdress.value = await signer.getAddress();
  localStorage.setItem("add", xhladdress.value);
  xxhladdress.value =
    xhladdress.value.substring(0, 4) +
    "..." +
    xhladdress.value.substring(
      xhladdress.value.length - 4,
      xhladdress.value.length
    );
  if (xhladdress.value != "") {
    isconnect.value = "Disconnect";
  }
  const rawBalance = await provider.getBalance(xhladdress.value);
  xethbalance.value = ethers.utils.formatEther(rawBalance);
  let bal = xethbalance.value.indexOf(".");
  let money = xethbalance.value.substring(0, bal + 3);
  xethbalance.value = money;
  localStorage.setItem("sthbal", money);
  bus.$emit("head", "1");
};
const gettime = () => {
  let nowtime = new Date().getTime();
  let chatime = wltime - nowtime;
  cltime(chatime);
  if (chatime <= 0) {
    day.value = "0";
    shi.value = "00";
    fen.value = "00";
    miao.value = "00";
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
  height: 48.2rem;
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
