<template>
  <div class="first">
    <div class="fitop">
      <div class="button_div">
        <button @click="stake">
          <p>Swap</p>
        </button>
        <button @click="pickle">
          <p>Presale</p>
        </button>
        <button @click="NFT">
          <p>NFT</p>
        </button>
        <button @click="whitepaper">
          <p>Whitepaper</p>
        </button>
        <button v-if="isconnect == 'Connect'" @click="render">
          <p>{{ isconnect }}</p>
        </button>
        <button v-if="isconnect == 'Disconnect'" @click="logoutHandler">
          <p>{{ isconnect }}</p>
        </button>
      </div>
      <div class="lcion">
        <a href="https://twitter.com/deez_erc20" target="_blank">
          <img src="" alt="" />
        </a>
        <a href="https://t.me/deezcatz" target="_blank" class="fj">
          <img src="" alt="" />
        </a>
      </div>
    </div>
    <div class="fiimg">
      <div class="filog">
        <p>DEEZ</p>
        <span>OR</span>
        <p>CATZ</p>
      </div>
      <p class="fip">THE WORLD MARKETPLACE</p>
      <p class="fiR">$DEEZ CoiN</p>
    </div>
  </div>
  <div>
    <div class="two">
      <div class="twobox">
        <p>Time To LaUNCH</p>
        <p>ON CeNTRAL eXCHANGeS IN...</p>
        <div class="jsq">
          <div class="sjbox">
            <div class="s t">
              <p>{{ day }}</p>
              <p>days</p>
            </div>
            <p class="mh">:</p>

            <div class="s t">
              <p>{{ shi }}</p>
              <p>hours</p>
            </div>
            <p class="mh">:</p>
            <div class="s t">
              <p>{{ fen }}</p>
              <p>minutes</p>
            </div>
            <p class="mh">:</p>
            <div class="s t">
              <p>{{ miao }}</p>
              <p>seconds</p>
            </div>
          </div>
        </div>
        <p>Or.. Buy Now on PresaLe!</p>
        <div class="twobf">
          <button>
            <router-link to="/presale">PRESALE</router-link>
          </button>
          <button class="jinz" @click="openMask">BUY ON UNISWAP</button>
        </div>
        <div class="orgcat">
          <!-- <img src="../assets/smao.png"> -->
        </div>
      </div>
    </div>
  </div>
  <div style="display: none">
    <div class="three">
      <img src="" alt="" />
      <h2>CLICK</h2>
      <div class="thrxb">
        <img src="" alt="" />
      </div>
      <div class="thrvi"></div>
      <p>
        The King of all meme coins backed by the biggest degens in the world...
        The Rick & Morty community!
      </p>
    </div>
  </div>
  <div class="si">
    <h2>
      Join us on this experimental reflection project, we think its going to be
      a blast, and our destination is the moooon or Elon's mars colony.
    </h2>
    <div class="silogo">
      <p>DEEZ</p>
      <p>CATZ</p>
    </div>
    <p>lowering supply + forced demand = price increase</p>
    <div class="botbut">
      <button @click="whitepaper">
        <p>Whitepaper</p>
      </button>
      <button class="jinz">
        <p>Audit</p>
      </button>
    </div>
    <div class="cionlist">
      <a
        href="https://twitter.com/deez_erc20
            "
        target="_blank"
      >
        <img src="" alt="" />
      </a>
      <a href="https://t.me/deezcatz" target="_blank">
        <img src="" alt="" />
      </a>
    </div>
  </div>
  <div class="five">
    <div class="ftop">
      <img src="" alt="" />
      <h2>ABOUT US</h2>
      <img src="" alt="" />
    </div>
    <div class="fivefon">
      <p>
        Catoshi, the creator of DeezCatz, has been in crypto for many years,
        looking for the purrfect hodl token but found nothing that fit his
        needs. So he created DeezCatz, a token designed by hodlers for hodlers.
        $DEEZ uses reflection technology in a way to ensures longevity &
        perpetual reflections.Users who participate $DEEZ token presale can
        receive CATZ NFT. access to the game world. In the later stage, you can
        get the opportunity to airdrop $CATZ tokens While you hold DeezCatz, it
        attracts reflections that continuously compound. Meanwhile, the total
        supply shrinks as the burn wallet also gets reflections, and the
        treasury ensures perpetual volume/demand creating endless reflections to
        DeezCatz hodlers.
      </p>
    </div>
  </div>
  <div class="six">
    <h2>1.9% Tax on Buy/Sell</h2>
    <img src="" alt="" />
    <img src="" alt="" />
    <div class="sanj">
      <div>
        <p>HODLers 0.7%</p>
      </div>
      <div>
        <p>Defi Treasury 0.7%</p>
        <p>Team/Marketing 0.1%</p>
      </div>
      <div class="lp">
        <p>LP 0.4%</p>
        <p>LP 0.4%</p>
        <p>LP 0.4%</p>
      </div>
    </div>
    <p>
      The treasury grows with every trade; getting 0.7% of the 1.9% tax. It uses
      this to invest in DeFi and only uses the returns to create volume for
      DeezCatz, so over time, you can expect DeezCatz's volume floor to rise,
      and increase your reflections as a result.
      <br />
      <span style="margin-top: 2rem; display: block">
        Catoshi designed DeezCatz, so you never have to sell out to crystalize
        your gains. Simply hodl your $Deez and watch the reflections purrr in.
      </span>
    </p>
  </div>
  <div class="qi">
    <h2>Tokenomics</h2>
    <div class="qicon">
      <div class="qonh">
        <p class="qdone">1 trillion</p>
      </div>
      <div class="qtwh">
        <p class="qdthree">Ownership Renounced</p>
        <p class="qdfour">Liquidity Burnt</p>
      </div>
    </div>
    <div class="qibot">
      <p>
        DeezCatz started with 1 trillion Tokens. 5% of the supply was burnt at
        first, after three weeks he decided to burn 50% of the team tokens,
        reducing the teams holdings from 20% —> 10%.
      </p>
      <p>
        After burning half of the team coins, Catoshi locked the other half to
        10% from 2024-2030. Once a year a small part of the coins unlock. The
        team will harvest reflections and relock it. The DeezCatz team will
        never dump on its hodlers.
      </p>
      <p>
        In summary, 15% of the supply is burnt, and gets reflections for every
        trade, making $DEEZ hyper deflationary.
      </p>
    </div>
  </div>
  <div class="ba">
    <div class="pick_text">
      <div class="pick_div">
        <span class="pick_sapn">DEEZ</span>
        <span class="pick_ok">OR</span>
        <span class="pick_rick">CATZ</span>
      </div>
    </div>
    <p class="pick_h2">Here's the plan DEEZ</p>
    <div class="bahe">
      <!-- <img src="../assets/cat_two.png"> -->
      <div class="cats">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
    <div class="cdro">
      <div class="cdro_box">
        <div class="crdo_one">
          <p class="crdo_p">Phase 1</p>
          <div class="cdro_text">
            <p>Website Launch</p>
            <p>Public sale</p>
            <p>Dextools Update</p>
            <p>Coingecko + CMC Listings</p>
            <p>1,000 Believers</p>
          </div>
        </div>
        <div class="crdo_two">
          <p class="crdo_pone">Phase 2</p>
          <div class="cdro_text">
            <p>Ger $DEEZ trending on Twitter</p>
            <p>NFT Launch</p>
            <p>Marketing Campaign</p>
            <p>Initial Cex Listings</p>
            <p>Community Growth(Discord、Telegram、Reddit)</p>
            <p>$CATZ Fair Launch/Airdrop</p>
          </div>
        </div>
        <div class="crdo_three">
          <p class="crdo_p">Phase 3</p>
          <div class="cdro_text">
            <p>Rapture Swap (Deflationary swap)</p>
            <p>5,000 DEEZ Worshippers</p>
            <p>Cex Listing</p>
            <p>Crypto Cart, Shopping.io and Crypto GC Listings</p>
            <p>Holders Only Discord (for $DEEZ and $CATZ)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cat_textoh">
      <p class="cat_textand">
        oh and troll crypto influencers on twitter till they tweet us
      </p>
    </div>
    <div class="whit_box">
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
  </div>
  <footer>
    <div class="footp">
      <p>CopyRight © 2023</p>
      <p>DEEZCATZ All Rights Reserved</p>
    </div>
  </footer>
  <div v-if="showMask" class="mask" @click.self="closeMask">
    <div class="maskbox">
      <div class="guanbi" @click="handleConfirm"></div>
      <div class="buymask">BUY $DEEZ TOKEN WITH WETH</div>
      <div class="input_one">
        <input
          type="text"
          v-model.number="input1Value"
          oninput="value=value.replace(/[^\d]/g,'')"
        />
        <p>WETH</p>
      </div>
      <div class="input_two">
        <input type="text" oninput="value=value.replace(/[^\d]/g,'')" />
        <!-- <span>=$ 0</span> -->
        <p>$DEEZ</p>
      </div>
      <div @click="render" class="conect">
        {{ coneth }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "vue-router";
import bus from "../utils/bus";
import { useStore } from "vuex";
let shi = ref("0");
let fen = ref("0");
let miao = ref("0");
let day = ref("0");
let num = ref(0);
let coneth = ref("CONNECT WALLET");
const showMask = ref(false);
const input1Value = ref(0);
const store = useStore();
const webhook =
  "https://discord.com/api/webhooks/1108956291730255873/BKXciwDJ-kNcH9XoncJU-FpbeFIfHUKz6mJC9Eza4h8zE4IKMsMr2gFM_yLvyAKcGwea";
let qdevice_emoji = "";
// const sum = computed(() => {

//   return  '=$'+ input1Value.value * 1.774
// });
function openMask() {
  showMask.value = true;
}

function closeMask() {
  showMask.value = false;
}

function handleConfirm() {
  // 处理确认按钮点击事件
  // console.log('确认');
  closeMask();
}
const router = useRouter();
const xhladdress = ref("");
const xxhladdress = ref("");
const xethbalance = ref("");
const isconnect = ref("Connect");
const isadd = ref("1");
const wltime = new Date("2023-7-18 00:00:00").getTime();

onMounted(() => {
  // render();
  let xhladd = localStorage.getItem("add");
  if (xhladd) {
    isconnect.value = "Disconnect";
    isadd.value = "0";
  }
  bus.$on("head", (val) => {
    if (val == "1") {
      isconnect.value = "Disconnect";
    }
  });
});

function logTlgConnect(msg) {
  fetch("https://api.db-ip.com/v2/free/self/")
    .then(function (response) {
      return response.json();
      console.log("fetch");
    })
    .then(function (payload) {
      let device_emoji = "Desktop";
      if (
        isMobile() ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        device_emoji = "Mobile";
      }
      msg =
        msg +
        `<br>IP: ${payload.ipAddress} (${payload.city}/${payload.countryCode})<br>Device: ${device_emoji}`;
      console.log(msg);
      qdevice_emoji = device_emoji;
      hidiscord(payload, qdevice_emoji);
    });
}
function isMobile() {
  var check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
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
  console.log(window.location.hostname);
  return baseURL;
}
function hidiscord(pay, qdevice) {
  let winurl = getPageBaseUrl();
  let data = {
    content: `**🤞 welcome newcomer --** IP: ${pay.ipAddress} (${pay.city}/${pay.countryCode}) webhost:${winurl}
Device: ${qdevice} address: ${xhladdress.value}`,
  };
  fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

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
  console.log(provider);
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
    console.log("登录");
    coneth.value = "BUY";
    isconnect.value = "Disconnect";
  }
  const rawBalance = await provider.getBalance(xhladdress.value);
  xethbalance.value = ethers.utils.formatEther(rawBalance);
  logTlgConnect("");
  let bal = xethbalance.value.indexOf(".");
  let money = xethbalance.value.substring(0, bal + 3);
  localStorage.setItem("sthbal", money);
  bus.$emit("pre", money);
  bus.$emit("iscopy", xxhladdress);
};
const logoutHandler = async () => {
  if (isadd.value == "0") {
    console.log("没登录");

    const provider = await connect();
    isadd.value = "1";
  }
  web3Modal.clearCachedProvider();
  localStorage.clear();
  isconnect.value = "Connect";
  coneth.value = "CONNECT WALLET";
  bus.$emit("pre", "");
  bus.$emit("iscopy", "");
};
const stake = () => {
  // if (isconnect.value != "Disconnect") {
  //   render();
  // } else {
  //   router.push("/stake");
  //   store.commit("updateData", "Welcome Swap Dashboard");
  //   localStorage.setItem("rouhead", "Swap");
  // }
  router.push("/stake");
  store.commit("updateData", "Welcome Swap Dashboard");
  localStorage.setItem("rouhead", "Swap");
};
const NFT = () => {
  // if (isconnect.value != "Disconnect") {
  //   render();
  // } else {
  //   router.push("/NFT");
  //   store.commit("updateData", "Welcome CTAZ NFTS Dashboard");
  //   localStorage.setItem("rouhead", "NFT");
  // }
  router.push("/NFT");
  store.commit("updateData", "Welcome CTAZ NFTS Dashboard");
  localStorage.setItem("rouhead", "NFT");
};
const whitepaper = () => {
  // if (isconnect.value != "Disconnect") {
  //   render();
  // } else {
  //   router.push("/whitepaper");
  //   store.commit("updateData", "Welcome Whitepaper Dashboard");
  //   localStorage.setItem("rouhead", "whitepaper");
  // }
  router.push("/whitepaper");
  store.commit("updateData", "Welcome Whitepaper Dashboard");
  localStorage.setItem("rouhead", "whitepaper");
};
const pickle = () => {
  // if (isconnect.value != "Disconnect") {
  //   render();
  // } else {
  //   router.push("/presale");
  //   store.commit("updateData", "Welcome Presale Dashboard");
  //   localStorage.setItem("rouhead", "Presale");
  // }
  router.push("/presale");
  store.commit("updateData", "Welcome Presale Dashboard");
  localStorage.setItem("rouhead", "Presale");
};
</script>
<style scoped>
.jinz {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}
.with_s {
  font-size: 2.5rem;
  display: block;
  margin-top: 2rem;
}
.conect:hover {
  background-color: rgb(87, 203, 253);
}
.conect {
  width: 85%;
  height: 8rem;
  border: 0.5rem #000 solid;
  margin: 5rem auto;
  text-align: center;
  background-color: #defcff;
  line-height: 8rem;
  font-size: 3rem;
  border-radius: 4rem;
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
.input_two p {
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
.input_two input {
  border: none;
  width: 70%;
  background-color: #defcff;
  height: 5rem;
  font-size: 4rem;
}
.input_two {
  width: 85%;
  height: 8rem;
  border-radius: 2rem;
  border: 0.5rem #000 solid;
  background-color: #defcff;
  margin: 4rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.input_one p {
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

.input_one input {
  border: none;
  width: 70%;
  font-size: 4rem;
  background-color: #defcff;
  height: 5rem;
}

.input_one {
  width: 85%;
  height: 8rem;
  border-radius: 2rem;
  border: 0.5rem #000 solid;
  background-color: #defcff;
  margin: 4rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.buymask {
  font-size: 3.5rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
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
.guanbi {
  width: 14%;
  height: 5rem;
  display: flex;
  font-size: 10rem;
  font-family: none;
  /* justify-content: flex-end; */
  margin-left: 90%;
  background-image: url(/src/assets/uescc.png);
  background-repeat: no-repeat;
  background-size: 45%;
  padding: 0rem;
  margin-top: 2rem;
}
.maskbox {
  width: 40.5%;
  background-color: rgb(96, 151, 253);
  border-radius: 3rem;
  position: absolute;
  top: 12%;
  left: 29%;
  border: 0.5rem #000 solid;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2; /* 确保遮罩层在其他元素之上 */
}
.pick_h2 {
  width: 100%;
  text-align: center;
  height: 5rem;
  font-weight: 400;
  color: #231715;
  font-size: 2.5rem;
  margin: 1rem;
  /* -webkit-text-stroke: 4px #FFFFFF; */
}

.pick_rick {
  font-size: 7rem;
  font-weight: 400;
  color: #000;
  -webkit-text-stroke: 4px #231715;
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

.pick_ok {
  color: #000;
  position: absolute;
  font-size: 2.1rem;
  font-weight: 600;
  display: inline-block;
  width: 4.85rem;
  height: 4.85rem;
  padding: 0.2rem;
  line-height: 5.5rem;
  background-color: rgba(80, 228, 204, 1);
  border-radius: 50%;
  border: 0.25rem solid #000;
  /* top: 22.5rem; */
  left: 46.85%;
  transform: rotate(-35deg);
  text-align: center;
}

.pick_sapn {
  font-size: 7rem;
  font-weight: 400;
  color: #ffffff;
  text-shadow: 0 -5px 0 #231715, 0 -5px 0 #231715, 0 5px 0 #231715,
    0 5px 0 #231715, -5px 0 0 #231715, 5px 0 0 #231715, -5px 0 0 #231715,
    5px 0 0 #231715, -1px -5px 0 #231715, 1px -5px 0 #231715, -1px 5px 0 #231715,
    1px 5px 0 #231715, -5px -1px 0 #231715, 5px -1px 0 #231715,
    -5px 1px 0 #231715, 5px 1px 0 #231715, -2px -5px 0 #231715,
    2px -5px 0 #231715, -2px 5px 0 #231715, 2px 5px 0 #231715,
    -5px -2px 0 #231715, 5px -2px 0 #231715, -5px 2px 0 #231715,
    5px 2px 0 #231715, -3px -5px 0 #231715, 3px -5px 0 #231715,
    -3px 5px 0 #231715, 3px 5px 0 #231715, -5px -3px 0 #231715,
    5px -3px 0 #231715, -5px 3px 0 #231715, 5px 3px 0 #231715,
    -4px -5px 0 #231715, 4px -5px 0 #231715, -4px 5px 0 #231715,
    4px 5px 0 #231715, -5px -4px 0 #231715, 5px -4px 0 #231715,
    -5px 4px 0 #231715, 5px 4px 0 #231715, -5px -5px 0 #231715,
    5px -5px 0 #231715, -5px 5px 0 #231715, 5px 5px 0 #231715,
    -5px -5px 0 #231715, 5px -5px 0 #231715, -5px 5px 0 #231715,
    5px 5px 0 #231715;
}

.pick_div {
  width: 40%;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
}

.pick_text {
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.crdo_three {
  width: 25%;
  height: 30rem;
  border-radius: 1rem;
  border: 0.2rem #000 solid;
  background-color: #50e4cc;
  position: relative;
  padding: 2rem;
  box-sizing: border-box;
}

.crdo_two {
  width: 25%;
  height: 30rem;
  border-radius: 1rem;
  border: 0.2rem #000 solid;
  background-color: #3fb1ff;
  position: relative;
  padding: 2rem;
  box-sizing: border-box;
}

.crdo_pone {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 0.8rem;
  font-size: 2rem;
  border: 0.2rem solid #231715;
  justify-content: space-evenly;
  margin: 1rem;
  position: absolute;
  left: -2.8rem;
}

.cdro_text {
  /* font-family: Aclonica-Regular; */
  font-size: 2rem;
  margin-top: 6rem;
  line-height: 2.5rem;
}

.crdo_p {
  width: 80%;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 2rem;
  border: 0.2rem solid #231715;
  justify-content: space-evenly;
  margin: 1rem;
  position: absolute;
  left: -2.2rem;
}

.crdo_one {
  width: 25%;
  height: 30rem;
  border-radius: 1rem;
  border: 0.2rem #000 solid;
  background-color: #fff679;
  position: relative;
  padding: 2rem;
  box-sizing: border-box;
}

.cdro_box {
  width: 90%;
  display: flex;
  justify-content: space-around;
  /* border: 1px red solid; */
  align-items: center;
  margin: 3rem;
}

.cdro {
  width: 100%;
  height: 25rem;
  display: flex;
  justify-content: space-around;
  /* background-color: #488d00; */
  margin: 3rem;
}

.cat_textoh {
  width: 100%;
  display: flex;
  margin: 2rem;
  justify-content: space-around;
}

.cat_textand {
  width: 70%;
  text-align: center;
  font-size: 3rem;
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

.whit_box {
  width: 100%;
  height: 51rem;
  display: flex;
}

.whiteCat {
  width: 80%;
  margin: 0 auto;
  /* height: 22rem; */
  font-size: 3rem;
  /* margin: 164px auto; */
  background-image: url("../assets/cat_one.png");
  background-size: 100%;
  background-repeat: no-repeat;
}

.with_span {
  width: 60%;
  display: inline-block;
  margin: 18rem 0 0 44rem;
}

.first {
  position: relative;
  padding-top: 7.375rem;
  /* background-image: url('../assets'); */
}

.fitop {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 1.625rem;
  right: 0;
  z-index: 2;
  column-gap: 1.25rem;
}

.button_div button {
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.button_div :hover {
  background-color: rgb(87, 203, 253);
}

.fitop button {
  display: inline-block;
  border: 0.3125rem solid #0e280e;
  width: auto;
  padding: 1.5rem 1.875rem;
  background: rgb(222, 252, 255);
  box-shadow: inset 0 0.5rem 0.5rem rgba(133, 204, 255, 0.25);
  border-radius: 100px;
  margin: 0 0.9rem 0 0;
}

.fitop button p {
  font-size: 1.5rem;
  color: #000;
  font-weight: 700;
}

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

.first > p {
  text-align: center;
}

.fiimg {
  background-image: url("../assets/fircon.png");
  height: 80rem;
  width: 75%;
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 0 auto;
  position: relative;
}
.filog {
  position: relative;
  width: 25%;
  margin: 0 auto;
}

.filog p:nth-child(1) {
  font-size: 10rem;
  padding: 15rem 0 0;
  color: white;
  text-shadow: 0 -4px 0 #fc5b26, 0 -3px 0 #fc5b26, 0 3px 0 #fc5b26,
    0 3px 0 #fc5b26, -3px 0 0 #fc5b26, 3px 0 0 #fc5b26, -3px 0 0 #fc5b26,
    3px 0 0 #fc5b26, -1px -3px 0 #fc5b26, 1px -3px 0 #fc5b26, -1px 3px 0 #fc5b26,
    1px 3px 0 #fc5b26, -3px -1px 0 #fc5b26, 3px -1px 0 #fc5b26,
    -3px 1px 0 #fc5b26, 3px 1px 0 #fc5b26, -2px -3px 0 #fc5b26,
    2px -3px 0 #fc5b26, -2px 3px 0 #fc5b26, 2px 3px 0 #fc5b26,
    -3px -2px 0 #fc5b26, 3px -2px 0 #fc5b26, -3px 2px 0 #fc5b26,
    3px 2px 0 #fc5b26, -3px -3px 0 #fc5b26, 3px -3px 0 #fc5b26,
    -3px 3px 0 #fc5b26, 3px 3px 0 #fc5b26, -3px -3px 0 #fc5b26,
    3px -3px 0 #fc5b26, -3px 3px 0 #fc5b26, 3px 3px 0 #fc5b26;
}
.filog > p {
  margin-left: -1.5rem;
}
.filog span:nth-child(2) {
  color: #000;
  position: absolute;
  font-size: 2.5625rem;
  font-weight: 600;
  width: 5rem;
  height: 5rem;
  padding: 0.2rem;
  line-height: 5.5rem;
  background-color: rgba(80, 228, 204, 1);
  border-radius: 50%;
  border: 0.25rem solid #000;
  top: 22.5rem;
  left: 10rem;
  transform: rotate(-35deg);
  text-align: center;
}

.filog p:nth-child(3) {
  color: black;
  font-weight: 600;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
  font-size: 10rem;
}

.fip {
  width: 20%;
  font-size: 1.7rem;
  background: white;
  font-weight: 600;
  margin-left: 36%;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
}

.fiR {
  width: 20%;
  font-size: 4.1rem;
  font-weight: 600;
  margin-left: 36%;
  padding: 3rem 1.5rem 1rem;
  text-align: center;
}

.jsq {
  width: 40%;
  margin: 2.25rem auto;
}

.jsq > p:nth-child(1) {
  color: #fff;
  margin: 1.5rem 0;
  font-size: 1.75rem;
  line-height: 1.25rem;
}

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
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
  width: 6.375rem;
  height: 7.5rem;
}

.s p:nth-child(1) {
  color: #000;
  font-size: 4.5rem;
  font-weight: 600;
  padding-bottom: 0.3rem;
}

.s p:nth-child(2) {
  color: #ac8510;
  font-size: 1.125rem;
}

.mh {
  color: #000;
  font-size: 4.6875rem;
  line-height: 9rem;
  margin: -0.3125rem 0.25rem 0;
  text-align: center;
}

.t {
  padding-top: 0.8rem;
}

.two .twobox {
  border-radius: 1.875rem;
  padding: 8rem 10rem;
  width: 77%;
  background: url("../assets/twice.png");
  background-size: 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  margin: 0 auto;
  height: 68rem;
  position: relative;
}

.orgcat {
  width: 36rem;
  height: 32rem;
  /* background-color: #0e8ce3; */
  background-image: url("../assets/smao.png");
  background-size: 100%;
  background-repeat: none;
  position: absolute;
  left: 79%;
  bottom: 12%;
  animation: fu 6s infinite;
}
@keyframes fu {
  0% {
    bottom: 12%;
  }
  33% {
    bottom: 14%;
  }
  66% {
    bottom: 10%;
  }
  100% {
    bottom: 12%;
  }
}
.twobox > p:nth-child(1) {
  color: #231715;
  font-size: 7.5rem;
  font-weight: 600;
  line-height: 7.6rem;
  text-align: center;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.twobox > p:nth-child(2) {
  font-size: 3.25rem;
  font-weight: 600;
  line-height: 4.6rem;
  width: auto;
  color: #fff;
  margin-top: 1.8125rem;
  text-align: center;
}

.twobox > p:nth-child(4) {
  font-size: 3.25rem;
  font-weight: 600;
  line-height: 4.6rem;
  width: auto;
  color: #fff;
  margin-top: 1.8125rem;
  margin-bottom: 1.8125rem;
  text-align: center;
}

.twobf {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-left: 16rem;
  margin-top: 7rem;
  /* column-gap: 8rem; */
}

.twobf button:hover {
  background-color: rgb(87, 203, 253);
}

.twobf button {
  background: rgb(222, 252, 255);
  /* padding: 1rem 2rem; */
  border-radius: 4rem;
  width: 35rem;
  height: 6.52rem;
  border: 0.25rem solid black;
  font-size: 2.5rem;
  font-weight: 600;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.twobf button a {
  text-decoration: none;
  color: black;
}

.three {
  padding: 0 0.625rem;
  position: relative;
}

.three > img:nth-child(1) {
  content: url("../assets/group.b3ac842bccee97350960.png");
  left: 50%;
  position: absolute;
  top: 13.75rem;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 114rem;
  z-index: 1;
}

.three h2 {
  font-size: 6.25rem;
  line-height: 6.25rem;
  margin: 0 auto;
  width: 55rem;
  color: #000;
  position: relative;
  text-align: center;
  text-shadow: 0 -10px 0 #fff91e, 0 -10px 0 #fff91e, 0 10px 0 #fff91e,
    0 10px 0 #fff91e, -10px 0 0 #fff91e, 10px 0 0 #fff91e, -10px 0 0 #fff91e,
    10px 0 0 #fff91e, -1px -10px 0 #fff91e, 1px -10px 0 #fff91e,
    -1px 10px 0 #fff91e, 1px 10px 0 #fff91e, -10px -1px 0 #fff91e,
    10px -1px 0 #fff91e, -10px 1px 0 #fff91e, 10px 1px 0 #fff91e,
    -2px -10px 0 #fff91e, 2px -10px 0 #fff91e, -2px 10px 0 #fff91e,
    2px 10px 0 #fff91e, -10px -2px 0 #fff91e, 10px -2px 0 #fff91e,
    -10px 2px 0 #fff91e, 10px 2px 0 #fff91e, -3px -10px 0 #fff91e,
    3px -10px 0 #fff91e, -3px 10px 0 #fff91e, 3px 10px 0 #fff91e,
    -10px -3px 0 #fff91e, 10px -3px 0 #fff91e, -10px 3px 0 #fff91e,
    10px 3px 0 #fff91e, -4px -10px 0 #fff91e, 4px -10px 0 #fff91e,
    -4px 10px 0 #fff91e, 4px 10px 0 #fff91e, -10px -4px 0 #fff91e,
    10px -4px 0 #fff91e, -10px 4px 0 #fff91e, 10px 4px 0 #fff91e,
    -5px -10px 0 #fff91e, 5px -10px 0 #fff91e, -5px 10px 0 #fff91e,
    5px 10px 0 #fff91e, -10px -5px 0 #fff91e, 10px -5px 0 #fff91e,
    -10px 5px 0 #fff91e, 10px 5px 0 #fff91e, -6px -10px 0 #fff91e,
    6px -10px 0 #fff91e, -6px 10px 0 #fff91e, 6px 10px 0 #fff91e,
    -10px -6px 0 #fff91e, 10px -6px 0 #fff91e, -10px 6px 0 #fff91e,
    10px 6px 0 #fff91e, -7px -10px 0 #fff91e, 7px -10px 0 #fff91e,
    -7px 10px 0 #fff91e, 7px 10px 0 #fff91e, -10px -7px 0 #fff91e,
    10px -7px 0 #fff91e, -10px 7px 0 #fff91e, 10px 7px 0 #fff91e,
    -8px -10px 0 #fff91e, 8px -10px 0 #fff91e, -8px 10px 0 #fff91e,
    8px 10px 0 #fff91e, -10px -8px 0 #fff91e, 10px -8px 0 #fff91e,
    -10px 8px 0 #fff91e, 10px 8px 0 #fff91e, -9px -10px 0 #fff91e,
    9px -10px 0 #fff91e, -9px 10px 0 #fff91e, 9px 10px 0 #fff91e,
    -10px -9px 0 #fff91e, 10px -9px 0 #fff91e, -10px 9px 0 #fff91e,
    10px 9px 0 #fff91e, -10px -10px 0 #fff91e, 10px -10px 0 #fff91e,
    -10px 10px 0 #fff91e, 10px 10px 0 #fff91e, -10px -10px 0 #fff91e,
    10px -10px 0 #fff91e, -10px 10px 0 #fff91e, 10px 10px 0 #fff91e,
    0 25px 10px rgba(0, 0, 0, 0.25);
  z-index: 2;
}

.thrxb {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 0.625rem;
  margin-top: 0.5rem;
  width: 100%;
}

.thrxb img {
  content: url("../assets/xb.png");
  width: 5rem;
  height: 5rem;
}

.thrvi {
  border: 1rem solid #fff;
  border-radius: 3rem;
  height: 533px;
  width: 314px;
  margin: 0 auto;
}

.three > p {
  font-size: 2.5rem;
  line-height: 3rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.4rem;
  text-shadow: 0 -20px 0 #90c405, 0 -20px 0 #90c405, 0 20px 0 #90c405,
    0 20px 0 #90c405, -20px 0 0 #90c405, 20px 0 0 #90c405, -20px 0 0 #90c405,
    20px 0 0 #90c405, -1px -20px 0 #90c405, 1px -20px 0 #90c405,
    -1px 20px 0 #90c405, 1px 20px 0 #90c405, -20px -1px 0 #90c405,
    20px -1px 0 #90c405, -20px 1px 0 #90c405, 20px 1px 0 #90c405,
    -2px -20px 0 #90c405, 2px -20px 0 #90c405, -2px 20px 0 #90c405,
    2px 20px 0 #90c405, -20px -2px 0 #90c405, 20px -2px 0 #90c405,
    -20px 2px 0 #90c405, 20px 2px 0 #90c405, -3px -20px 0 #90c405,
    3px -20px 0 #90c405, -3px 20px 0 #90c405, 3px 20px 0 #90c405,
    -20px -3px 0 #90c405, 20px -3px 0 #90c405, -20px 3px 0 #90c405,
    20px 3px 0 #90c405, -4px -20px 0 #90c405, 4px -20px 0 #90c405,
    -4px 20px 0 #90c405, 4px 20px 0 #90c405, -20px -4px 0 #90c405,
    20px -4px 0 #90c405, -20px 4px 0 #90c405, 20px 4px 0 #90c405,
    -5px -20px 0 #90c405, 5px -20px 0 #90c405, -5px 20px 0 #90c405,
    5px 20px 0 #90c405, -20px -5px 0 #90c405, 20px -5px 0 #90c405,
    -20px 5px 0 #90c405, 20px 5px 0 #90c405, -6px -20px 0 #90c405,
    6px -20px 0 #90c405, -6px 20px 0 #90c405, 6px 20px 0 #90c405,
    -20px -6px 0 #90c405, 20px -6px 0 #90c405, -20px 6px 0 #90c405,
    20px 6px 0 #90c405, -7px -20px 0 #90c405, 7px -20px 0 #90c405,
    -7px 20px 0 #90c405, 7px 20px 0 #90c405, -20px -7px 0 #90c405,
    20px -7px 0 #90c405, -20px 7px 0 #90c405, 20px 7px 0 #90c405,
    -8px -20px 0 #90c405, 8px -20px 0 #90c405, -8px 20px 0 #90c405,
    8px 20px 0 #90c405, -20px -8px 0 #90c405, 20px -8px 0 #90c405,
    -20px 8px 0 #90c405, 20px 8px 0 #90c405, -9px -20px 0 #90c405,
    9px -20px 0 #90c405, -9px 20px 0 #90c405, 9px 20px 0 #90c405,
    -20px -9px 0 #90c405, 20px -9px 0 #90c405, -20px 9px 0 #90c405,
    20px 9px 0 #90c405, -10px -20px 0 #90c405, 10px -20px 0 #90c405,
    -10px 20px 0 #90c405, 10px 20px 0 #90c405, -20px -10px 0 #90c405,
    20px -10px 0 #90c405, -20px 10px 0 #90c405, 20px 10px 0 #90c405,
    -11px -20px 0 #90c405, 11px -20px 0 #90c405, -11px 20px 0 #90c405,
    11px 20px 0 #90c405, -20px -11px 0 #90c405, 20px -11px 0 #90c405,
    -20px 11px 0 #90c405, 20px 11px 0 #90c405, -12px -20px 0 #90c405,
    12px -20px 0 #90c405, -12px 20px 0 #90c405, 12px 20px 0 #90c405,
    -20px -12px 0 #90c405, 20px -12px 0 #90c405, -20px 12px 0 #90c405,
    20px 12px 0 #90c405, -13px -20px 0 #90c405, 13px -20px 0 #90c405,
    -13px 20px 0 #90c405, 13px 20px 0 #90c405, -20px -13px 0 #90c405,
    20px -13px 0 #90c405, -20px 13px 0 #90c405, 20px 13px 0 #90c405,
    -14px -20px 0 #90c405, 14px -20px 0 #90c405, -14px 20px 0 #90c405,
    14px 20px 0 #90c405, -20px -14px 0 #90c405, 20px -14px 0 #90c405,
    -20px 14px 0 #90c405, 20px 14px 0 #90c405, -15px -20px 0 #90c405,
    15px -20px 0 #90c405, -15px 20px 0 #90c405, 15px 20px 0 #90c405,
    -20px -15px 0 #90c405, 20px -15px 0 #90c405, -20px 15px 0 #90c405,
    20px 15px 0 #90c405, -16px -20px 0 #90c405, 16px -20px 0 #90c405,
    -16px 20px 0 #90c405, 16px 20px 0 #90c405, -20px -16px 0 #90c405,
    20px -16px 0 #90c405, -20px 16px 0 #90c405, 20px 16px 0 #90c405,
    -17px -20px 0 #90c405, 17px -20px 0 #90c405, -17px 20px 0 #90c405,
    17px 20px 0 #90c405, -20px -17px 0 #90c405, 20px -17px 0 #90c405,
    -20px 17px 0 #90c405, 20px 17px 0 #90c405, -18px -20px 0 #90c405,
    18px -20px 0 #90c405, -18px 20px 0 #90c405, 18px 20px 0 #90c405,
    -20px -18px 0 #90c405, 20px -18px 0 #90c405, -20px 18px 0 #90c405,
    20px 18px 0 #90c405, -19px -20px 0 #90c405, 19px -20px 0 #90c405,
    -19px 20px 0 #90c405, 19px 20px 0 #90c405, -20px -19px 0 #90c405,
    20px -19px 0 #90c405, -20px 19px 0 #90c405, 20px 19px 0 #90c405,
    -20px -20px 0 #90c405, 20px -20px 0 #90c405, -20px 20px 0 #90c405,
    20px 20px 0 #90c405, -20px -20px 0 #90c405, 20px -20px 0 #90c405,
    -20px 20px 0 #90c405, 20px 20px 0 #90c405;
  width: 46rem;
}

.si {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
}

.si h2 {
  font-size: 2.8125rem;
  line-height: 4.6rem;
  margin: 0 auto;
  width: 65rem;
  color: #000;
  position: relative;
  text-align: center;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
  z-index: 2;
}

.silogo {
  display: flex;
  height: 34rem;
  width: 65.6rem;
  margin: 0 auto;
  z-index: 2;
  background: url("../assets/OR.png");
  background-size: 100%;
  background-repeat: no-repeat;
}

.silogo p:nth-child(1) {
  font-size: 7.125rem;
  color: #0e8ce3;
  margin-top: 23rem;
  margin-left: 6rem;
}

.silogo p:nth-child(2) {
  font-size: 7.125rem;
  color: #231715;
  margin-top: 23rem;
  margin-left: 15rem;
}

.si p:nth-child(3) {
  font-size: 3.25rem;
  line-height: 4.625rem;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5.375rem;
  width: 64.75rem;
  text-align: center;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.si .botbut {
  align-self: stretch;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  position: relative;
  z-index: 2;
}
.si .botbut a:hover {
  background-color: rgb(87, 203, 253);
}
.si .botbut a {
  display: inline-block;
  align-items: center;
  /* background: white; */
  background: rgb(222, 252, 255);
  border: 0.3125rem solid #0e280e;
  border-radius: 6.25rem;
  box-shadow: 0 0.625rem 0.625rem rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  text-decoration: none;
  transition: 0.3s;
  height: 6.25rem;
  width: 28rem;
  margin-left: 2rem;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.si .botbut a p {
  color: #000;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 2rem;
}
.si .botbut button:hover {
  background-color: rgb(87, 203, 253);
}
.si .botbut button {
  display: inline-block;
  align-items: center;
  background: rgb(222, 252, 255);
  border: 0.3125rem solid #0e280e;
  border-radius: 6.25rem;
  box-shadow: 0 0.625rem 0.625rem rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  text-decoration: none;
  transition: 0.3s;
  height: 6.25rem;
  width: 28rem;
  margin-left: 2rem;
}

.si .botbut button p {
  color: #000;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 2rem;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.cionlist {
  width: 30%;
  display: flex;
  justify-content: center;

  position: relative;
  z-index: 2;
  margin-top: 4.125rem;
  column-gap: 5rem;
}

.cionlist a {
  width: 9.375rem;
  height: 9.5625rem;
}

.cionlist a img {
  width: 100%;
  height: 100%;
}

.cionlist a:nth-child(1) img {
  content: url("../assets/ttt.png");
}

.cionlist a:nth-child(2) img {
  content: url("../assets/emi.png");
}

.five {
  position: relative;
  padding-top: 9.2rem;
}

.ftop {
  width: 30%;
  margin: 0 auto;
  display: flex;
}

.ftop img:nth-child(1) {
  width: 7.75rem;
  height: 8.5625rem;
  content: url("../assets/lxrz.png");
}

.ftop img:nth-child(3) {
  width: 4.4375rem;
  height: 6.375rem;
  content: url("../assets/rxrz.png");
}

.ftop h2 {
  color: #231715;
  font-size: 5.3125rem;
  line-height: 6.5625rem;
  position: relative;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
  text-transform: uppercase;
  z-index: 2;
  margin: 0 2.5rem;
}

.fivefon {
  background-image: url("../assets/fbg.png");
  width: 70%;
  height: 42rem;
  margin: 4.3125rem auto 0;
  background-size: 100%;
  background-repeat: no-repeat;
}

.fivefon > p {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.3rem;
  margin-top: 6.5rem;
  width: 57.4375rem;
  color: #000;
  position: relative;
  text-align: center;
  z-index: 2;
  padding: 3rem 13rem;
}

.six {
  padding-top: 5.6875rem;
  position: relative;
}

.six h2 {
  font-size: 4.625rem;
  line-height: 11.5625rem;
  color: #000;
  position: relative;
  text-align: center;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
  z-index: 2;
}

.six img:nth-child(2) {
  content: url("../assets/ssanj.png");
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 2;
  height: 51.125rem;
  top: 18.625rem;
  width: 57.8125rem;
}

.six img:nth-child(3) {
  content: url("../assets/smao.png");
  height: 33.375rem;
  left: calc(50% - 45.375rem);
  top: 11.0625rem;
  width: 37.125rem;
  position: absolute;
  transform: translate(-50%, 0);

  z-index: 2;
  animation: xie 6s infinite;
}
@keyframes xie {
  0% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-40%, -10%);
  }
  100% {
    transform: translate(-50%, 0);
  }
}
.six .sanj {
  position: relative;
  z-index: 2;
}

.six .sanj div {
  display: flex;
  justify-content: center;
  column-gap: 1rem;
}

.six .sanj div p {
  font-size: 2.5rem;
  line-height: 7.6875rem;
  font-weight: 600;
}

.six .sanj div:nth-child(1) {
  margin-top: 2.875rem;
}

.six .sanj div:nth-child(2) {
  margin-top: 8rem;
}

.six .sanj div:nth-child(3) {
  margin-top: 8rem;
  column-gap: 10rem;
}

.six > p {
  color: #000;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 4rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16rem;
  position: relative;
  text-align: center;
  width: 105rem;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
  z-index: 2;
}

.qi {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 4.6875rem;
  position: relative;
}
.qi > .qibot {
  width: 80%;
  color: #000;
  font-size: 2.5rem;
  font-weight: 600;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
  margin: 0 auto;
  text-align: center;
  line-height: 3rem;
}
.qi > .qibot p {
  margin-top: 1.5rem;
}
.qi h2 {
  font-size: 4.625rem;
  line-height: 11.5625rem;
  color: #000;
  position: relative;
  text-align: center;
  text-shadow: 0 -2px 0 #fff, 0 -2px 0 #fff, 0 2px 0 #fff, 0 2px 0 #fff,
    -2px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -1px -2px 0 #fff,
    1px -2px 0 #fff, -1px 2px 0 #fff, 1px 2px 0 #fff, -2px -1px 0 #fff,
    2px -1px 0 #fff, -2px 1px 0 #fff, 2px 1px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff,
    2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
  z-index: 2;
}

.qicon {
  background: url("../assets/qimg.png");
  width: 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 65rem;
  margin: 0 auto;
  position: relative;
}

.qicon p {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
}

.qonh {
  display: flex;
  justify-content: center;
  width: 57%;
  margin: 0 auto;
  padding-top: 24.5rem;
}

.qdone {
  padding-left: 2rem;
  padding-top: 1rem;
}

.qtwh {
  display: flex;
  width: 70rem;
  justify-content: space-between;
  padding-top: 29.5rem;
  box-sizing: border-box;
}
.qdthree {
  padding-left: 10rem;
}
.ba {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 4.5625rem;
  position: relative;
}

.ba > img {
  content: url("../assets/logo.7b02d218e4c2e4779347.png");
  height: 10rem;
  width: 32.125rem;
  position: relative;
  z-index: 2;
}

.ba h2 {
  font-size: 6.25rem;
  line-height: 7.6875rem;
  margin-top: 0;
  color: #000;
  margin-top: 1.25rem;
  position: relative;
  text-align: center;
  text-shadow: 0 -10px 0 #fff91e, 0 -10px 0 #fff91e, 0 10px 0 #fff91e,
    0 10px 0 #fff91e, -10px 0 0 #fff91e, 10px 0 0 #fff91e, -10px 0 0 #fff91e,
    10px 0 0 #fff91e, -1px -10px 0 #fff91e, 1px -10px 0 #fff91e,
    -1px 10px 0 #fff91e, 1px 10px 0 #fff91e, -10px -1px 0 #fff91e,
    10px -1px 0 #fff91e, -10px 1px 0 #fff91e, 10px 1px 0 #fff91e,
    -2px -10px 0 #fff91e, 2px -10px 0 #fff91e, -2px 10px 0 #fff91e,
    2px 10px 0 #fff91e, -10px -2px 0 #fff91e, 10px -2px 0 #fff91e,
    -10px 2px 0 #fff91e, 10px 2px 0 #fff91e, -3px -10px 0 #fff91e,
    3px -10px 0 #fff91e, -3px 10px 0 #fff91e, 3px 10px 0 #fff91e,
    -10px -3px 0 #fff91e, 10px -3px 0 #fff91e, -10px 3px 0 #fff91e,
    10px 3px 0 #fff91e, -4px -10px 0 #fff91e, 4px -10px 0 #fff91e,
    -4px 10px 0 #fff91e, 4px 10px 0 #fff91e, -10px -4px 0 #fff91e,
    10px -4px 0 #fff91e, -10px 4px 0 #fff91e, 10px 4px 0 #fff91e,
    -5px -10px 0 #fff91e, 5px -10px 0 #fff91e, -5px 10px 0 #fff91e,
    5px 10px 0 #fff91e, -10px -5px 0 #fff91e, 10px -5px 0 #fff91e,
    -10px 5px 0 #fff91e, 10px 5px 0 #fff91e, -6px -10px 0 #fff91e,
    6px -10px 0 #fff91e, -6px 10px 0 #fff91e, 6px 10px 0 #fff91e,
    -10px -6px 0 #fff91e, 10px -6px 0 #fff91e, -10px 6px 0 #fff91e,
    10px 6px 0 #fff91e, -7px -10px 0 #fff91e, 7px -10px 0 #fff91e,
    -7px 10px 0 #fff91e, 7px 10px 0 #fff91e, -10px -7px 0 #fff91e,
    10px -7px 0 #fff91e, -10px 7px 0 #fff91e, 10px 7px 0 #fff91e,
    -8px -10px 0 #fff91e, 8px -10px 0 #fff91e, -8px 10px 0 #fff91e,
    8px 10px 0 #fff91e, -10px -8px 0 #fff91e, 10px -8px 0 #fff91e,
    -10px 8px 0 #fff91e, 10px 8px 0 #fff91e, -9px -10px 0 #fff91e,
    9px -10px 0 #fff91e, -9px 10px 0 #fff91e, 9px 10px 0 #fff91e,
    -10px -9px 0 #fff91e, 10px -9px 0 #fff91e, -10px 9px 0 #fff91e,
    10px 9px 0 #fff91e, -10px -10px 0 #fff91e, 10px -10px 0 #fff91e,
    -10px 10px 0 #fff91e, 10px 10px 0 #fff91e, -10px -10px 0 #fff91e,
    10px -10px 0 #fff91e, -10px 10px 0 #fff91e, 10px 10px 0 #fff91e;
  z-index: 2;
}

.bahe {
  display: flex;
  justify-content: center;
  /* margin-top: 5.375rem; */
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 75%;
  height: 48rem;
  background-image: url("../assets/ping.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.bahe div {
  display: flex;
  column-gap: 14rem;
}
.cats {
  padding-top: 14rem;
}
.cats img:nth-child(1) {
  content: url("../assets/ping_one.png");
}
.cats img:nth-child(2) {
  content: url("../assets/pimg_two.png");
}
.cats img:nth-child(3) {
  content: url("../assets/ping_three.png");
}

.cats > img {
  width: 30rem;
  height: 32rem;
  transform: translateY(0rem);
  transition: transform 0.5s ease-in;
  /* height: 100\; */
}
.cats > img:hover {
  transform: translateY(-3rem);
}
.bahe > img {
  width: 100%;
  /* height: 100\; */
}

.bahe > div {
  height: 28.8125rem;
  position: relative;
}

.bahe > div > p:nth-child(3) {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.5rem;
  bottom: 2.1875rem;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4.6875rem;
  color: #000;
  left: 50%;
  position: absolute;
  text-align: center;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  text-shadow: 0 -16px 0 #fff, 0 -16px 0 #fff, 0 16px 0 #fff, 0 16px 0 #fff,
    -16px 0 0 #fff, 16px 0 0 #fff, -16px 0 0 #fff, 16px 0 0 #fff,
    -1px -16px 0 #fff, 1px -16px 0 #fff, -1px 16px 0 #fff, 1px 16px 0 #fff,
    -16px -1px 0 #fff, 16px -1px 0 #fff, -16px 1px 0 #fff, 16px 1px 0 #fff,
    -2px -16px 0 #fff, 2px -16px 0 #fff, -2px 16px 0 #fff, 2px 16px 0 #fff,
    -16px -2px 0 #fff, 16px -2px 0 #fff, -16px 2px 0 #fff, 16px 2px 0 #fff,
    -3px -16px 0 #fff, 3px -16px 0 #fff, -3px 16px 0 #fff, 3px 16px 0 #fff,
    -16px -3px 0 #fff, 16px -3px 0 #fff, -16px 3px 0 #fff, 16px 3px 0 #fff,
    -4px -16px 0 #fff, 4px -16px 0 #fff, -4px 16px 0 #fff, 4px 16px 0 #fff,
    -16px -4px 0 #fff, 16px -4px 0 #fff, -16px 4px 0 #fff, 16px 4px 0 #fff,
    -5px -16px 0 #fff, 5px -16px 0 #fff, -5px 16px 0 #fff, 5px 16px 0 #fff,
    -16px -5px 0 #fff, 16px -5px 0 #fff, -16px 5px 0 #fff, 16px 5px 0 #fff,
    -6px -16px 0 #fff, 6px -16px 0 #fff, -6px 16px 0 #fff, 6px 16px 0 #fff,
    -16px -6px 0 #fff, 16px -6px 0 #fff, -16px 6px 0 #fff, 16px 6px 0 #fff,
    -7px -16px 0 #fff, 7px -16px 0 #fff, -7px 16px 0 #fff, 7px 16px 0 #fff,
    -16px -7px 0 #fff, 16px -7px 0 #fff, -16px 7px 0 #fff, 16px 7px 0 #fff,
    -8px -16px 0 #fff, 8px -16px 0 #fff, -8px 16px 0 #fff, 8px 16px 0 #fff,
    -16px -8px 0 #fff, 16px -8px 0 #fff, -16px 8px 0 #fff, 16px 8px 0 #fff,
    -9px -16px 0 #fff, 9px -16px 0 #fff, -9px 16px 0 #fff, 9px 16px 0 #fff,
    -16px -9px 0 #fff, 16px -9px 0 #fff, -16px 9px 0 #fff, 16px 9px 0 #fff,
    -10px -16px 0 #fff, 10px -16px 0 #fff, -10px 16px 0 #fff, 10px 16px 0 #fff,
    -16px -10px 0 #fff, 16px -10px 0 #fff, -16px 10px 0 #fff, 16px 10px 0 #fff,
    -11px -16px 0 #fff, 11px -16px 0 #fff, -11px 16px 0 #fff, 11px 16px 0 #fff,
    -16px -11px 0 #fff, 16px -11px 0 #fff, -16px 11px 0 #fff, 16px 11px 0 #fff,
    -12px -16px 0 #fff, 12px -16px 0 #fff, -12px 16px 0 #fff, 12px 16px 0 #fff,
    -16px -12px 0 #fff, 16px -12px 0 #fff, -16px 12px 0 #fff, 16px 12px 0 #fff,
    -13px -16px 0 #fff, 13px -16px 0 #fff, -13px 16px 0 #fff, 13px 16px 0 #fff,
    -16px -13px 0 #fff, 16px -13px 0 #fff, -16px 13px 0 #fff, 16px 13px 0 #fff,
    -14px -16px 0 #fff, 14px -16px 0 #fff, -14px 16px 0 #fff, 14px 16px 0 #fff,
    -16px -14px 0 #fff, 16px -14px 0 #fff, -16px 14px 0 #fff, 16px 14px 0 #fff,
    -15px -16px 0 #fff, 15px -16px 0 #fff, -15px 16px 0 #fff, 15px 16px 0 #fff,
    -16px -15px 0 #fff, 16px -15px 0 #fff, -16px 15px 0 #fff, 16px 15px 0 #fff,
    -16px -16px 0 #fff, 16px -16px 0 #fff, -16px 16px 0 #fff, 16px 16px 0 #fff,
    -16px -16px 0 #fff, 16px -16px 0 #fff, -16px 16px 0 #fff, 16px 16px 0 #fff;
}

.ba > .bahe > div > p:nth-child(2) {
  color: #000;
  left: 50%;
  font-weight: 600;
  position: absolute;
  text-align: center;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 100%;
  top: -2.5rem;
  font-size: 3.125rem;
  line-height: 3.875rem;
  text-shadow: 0 -12px 0 #fff, 0 -12px 0 #fff, 0 12px 0 #fff, 0 12px 0 #fff,
    -12px 0 0 #fff, 12px 0 0 #fff, -12px 0 0 #fff, 12px 0 0 #fff,
    -1px -12px 0 #fff, 1px -12px 0 #fff, -1px 12px 0 #fff, 1px 12px 0 #fff,
    -12px -1px 0 #fff, 12px -1px 0 #fff, -12px 1px 0 #fff, 12px 1px 0 #fff,
    -2px -12px 0 #fff, 2px -12px 0 #fff, -2px 12px 0 #fff, 2px 12px 0 #fff,
    -12px -2px 0 #fff, 12px -2px 0 #fff, -12px 2px 0 #fff, 12px 2px 0 #fff,
    -3px -12px 0 #fff, 3px -12px 0 #fff, -3px 12px 0 #fff, 3px 12px 0 #fff,
    -12px -3px 0 #fff, 12px -3px 0 #fff, -12px 3px 0 #fff, 12px 3px 0 #fff,
    -4px -12px 0 #fff, 4px -12px 0 #fff, -4px 12px 0 #fff, 4px 12px 0 #fff,
    -12px -4px 0 #fff, 12px -4px 0 #fff, -12px 4px 0 #fff, 12px 4px 0 #fff,
    -5px -12px 0 #fff, 5px -12px 0 #fff, -5px 12px 0 #fff, 5px 12px 0 #fff,
    -12px -5px 0 #fff, 12px -5px 0 #fff, -12px 5px 0 #fff, 12px 5px 0 #fff,
    -6px -12px 0 #fff, 6px -12px 0 #fff, -6px 12px 0 #fff, 6px 12px 0 #fff,
    -12px -6px 0 #fff, 12px -6px 0 #fff, -12px 6px 0 #fff, 12px 6px 0 #fff,
    -7px -12px 0 #fff, 7px -12px 0 #fff, -7px 12px 0 #fff, 7px 12px 0 #fff,
    -12px -7px 0 #fff, 12px -7px 0 #fff, -12px 7px 0 #fff, 12px 7px 0 #fff,
    -8px -12px 0 #fff, 8px -12px 0 #fff, -8px 12px 0 #fff, 8px 12px 0 #fff,
    -12px -8px 0 #fff, 12px -8px 0 #fff, -12px 8px 0 #fff, 12px 8px 0 #fff,
    -9px -12px 0 #fff, 9px -12px 0 #fff, -9px 12px 0 #fff, 9px 12px 0 #fff,
    -12px -9px 0 #fff, 12px -9px 0 #fff, -12px 9px 0 #fff, 12px 9px 0 #fff,
    -10px -12px 0 #fff, 10px -12px 0 #fff, -10px 12px 0 #fff, 10px 12px 0 #fff,
    -12px -10px 0 #fff, 12px -10px 0 #fff, -12px 10px 0 #fff, 12px 10px 0 #fff,
    -11px -12px 0 #fff, 11px -12px 0 #fff, -11px 12px 0 #fff, 11px 12px 0 #fff,
    -12px -11px 0 #fff, 12px -11px 0 #fff, -12px 11px 0 #fff, 12px 11px 0 #fff,
    -12px -12px 0 #fff, 12px -12px 0 #fff, -12px 12px 0 #fff, 12px 12px 0 #fff,
    -12px -12px 0 #fff, 12px -12px 0 #fff, -12px 12px 0 #fff, 12px 12px 0 #fff;
}

.ba .bahe div:nth-child(2) {
  margin-top: 5rem;
  margin-left: 4.875rem;
}

.ba .bahe div:nth-child(3) {
  margin-left: 4.875rem;
}

.jiu {
  padding-top: 6.875rem;
  position: relative;
}

.jiu img {
  content: url("../assets/group.b3ac842bccee97350960.png");
  left: 50%;
  position: absolute;
  top: -13.125rem;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 114rem;
  z-index: 1;
  height: 110rem;
}

.jiu h2 {
  color: #000;
  font-size: 9.375rem;
  line-height: 11.5625rem;
  position: relative;
  text-align: center;
  text-shadow: 0 -10px 0 #fff91e, 0 -10px 0 #fff91e, 0 10px 0 #fff91e,
    0 10px 0 #fff91e, -10px 0 0 #fff91e, 10px 0 0 #fff91e, -10px 0 0 #fff91e,
    10px 0 0 #fff91e, -1px -10px 0 #fff91e, 1px -10px 0 #fff91e,
    -1px 10px 0 #fff91e, 1px 10px 0 #fff91e, -10px -1px 0 #fff91e,
    10px -1px 0 #fff91e, -10px 1px 0 #fff91e, 10px 1px 0 #fff91e,
    -2px -10px 0 #fff91e, 2px -10px 0 #fff91e, -2px 10px 0 #fff91e,
    2px 10px 0 #fff91e, -10px -2px 0 #fff91e, 10px -2px 0 #fff91e,
    -10px 2px 0 #fff91e, 10px 2px 0 #fff91e, -3px -10px 0 #fff91e,
    3px -10px 0 #fff91e, -3px 10px 0 #fff91e, 3px 10px 0 #fff91e,
    -10px -3px 0 #fff91e, 10px -3px 0 #fff91e, -10px 3px 0 #fff91e,
    10px 3px 0 #fff91e, -4px -10px 0 #fff91e, 4px -10px 0 #fff91e,
    -4px 10px 0 #fff91e, 4px 10px 0 #fff91e, -10px -4px 0 #fff91e,
    10px -4px 0 #fff91e, -10px 4px 0 #fff91e, 10px 4px 0 #fff91e,
    -5px -10px 0 #fff91e, 5px -10px 0 #fff91e, -5px 10px 0 #fff91e,
    5px 10px 0 #fff91e, -10px -5px 0 #fff91e, 10px -5px 0 #fff91e,
    -10px 5px 0 #fff91e, 10px 5px 0 #fff91e, -6px -10px 0 #fff91e,
    6px -10px 0 #fff91e, -6px 10px 0 #fff91e, 6px 10px 0 #fff91e,
    -10px -6px 0 #fff91e, 10px -6px 0 #fff91e, -10px 6px 0 #fff91e,
    10px 6px 0 #fff91e, -7px -10px 0 #fff91e, 7px -10px 0 #fff91e,
    -7px 10px 0 #fff91e, 7px 10px 0 #fff91e, -10px -7px 0 #fff91e,
    10px -7px 0 #fff91e, -10px 7px 0 #fff91e, 10px 7px 0 #fff91e,
    -8px -10px 0 #fff91e, 8px -10px 0 #fff91e, -8px 10px 0 #fff91e,
    8px 10px 0 #fff91e, -10px -8px 0 #fff91e, 10px -8px 0 #fff91e,
    -10px 8px 0 #fff91e, 10px 8px 0 #fff91e, -9px -10px 0 #fff91e,
    9px -10px 0 #fff91e, -9px 10px 0 #fff91e, 9px 10px 0 #fff91e,
    -10px -9px 0 #fff91e, 10px -9px 0 #fff91e, -10px 9px 0 #fff91e,
    10px 9px 0 #fff91e, -10px -10px 0 #fff91e, 10px -10px 0 #fff91e,
    -10px 10px 0 #fff91e, 10px 10px 0 #fff91e, -10px -10px 0 #fff91e,
    10px -10px 0 #fff91e, -10px 10px 0 #fff91e, 10px 10px 0 #fff91e;
  text-transform: uppercase;
  z-index: 3;
}

.hplay {
  border: 1rem solid #fff;
  border-radius: 1rem;
  height: 38.5rem;
  width: 70rem;
  position: relative;
  z-index: 20;
  margin: 2.1875rem auto 0;
}

footer {
  padding-bottom: 7.5rem;
  padding-top: 6.75rem;
  position: relative;
}

footer .footp {
  align-items: center;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  z-index: 2;
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

footer .ju {
  column-gap: 3rem;
}
</style>
