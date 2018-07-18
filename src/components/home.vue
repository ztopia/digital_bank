<template>
   <div>
       <div id='homes'>
        	<!-- <router-link to='/register'>
				<button>注册</button>
			</router-link>

            <router-link to='/login'>
				<button>登录</button>
			</router-link> -->
        

    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="Home">
          <div id="HomeWrap">
            <!-- banner部分 -->
               <div id="banner">
               <div class="bannerLogo">
                   <div><img src="../../static/img/logo.png" alt=""></div>
               </div>

               <div class="bannerTi">
                   <span>The Frontier Of Digital</span><br>
                   <span> Asset Services</span>
               </div>
           </div>

            <!-- 中部横栏 -->
           <div class="bar">
                <div style="line-height: 66px;"><img src="../../static/img/barLeft.png" alt=""></div>
                <div style="line-height: 60px;width: 60%;"><span class="barTi">Platform Data</span></div>
           </div>

            <!-- 数字部分 -->
           <div id="homeNums">
               <!-- 数字部分A -->
               <div>
                   <div><span class="boxTi">Accumulated Investment</span></div>
                   <div class="homeNum">
                       <span class="numTi">261275.77</span>
                       <span class="coinTi">BTC</span>
                   </div>
               </div>
                <!-- 数字部分B -->
               <div>
                    <div><span  class="boxTi">Cumulative users No.</span></div>

                    <div class="homeNum">
                        <span class="numTi">50189</span>
                        <span class="coinTi">USERS</span>
                   </div>
               </div>
           </div>

           <!-- 计时部分 -->
           <div id="homeTimes">
               <div style="padding-left:  3%;"><span  class="boxTi">Daily Rate Of Interest Wallet</span></div>
               <div class="homeTime">
                   <div style="padding-top: 5%;"><img src="../../static/img/time.png" alt=""></div>
                   <div style="line-height: 80px;padding-left: 6%;"><span class="otherTi">0.0039</span></div>
                   <div style="padding-top: 7%;padding-left: 11%;"><img src="../../static/img/B.png" alt=""></div>
               </div>
           </div>
          </div>
     
      </mt-tab-container-item>


      <mt-tab-container-item id="Investment">
        <Invesment></Invesment>
      </mt-tab-container-item>
      <mt-tab-container-item id="Asset">
     <router-link to="/echarts">
       <button>echarts</button>
     </router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="C2C">
       tab4
      </mt-tab-container-item>
       <mt-tab-container-item id="Account">
       tab5
      </mt-tab-container-item>
    </mt-tab-container>

          <mt-tabbar :selected.sync="selected" v-model="selected">
  <mt-tab-item id="Home">
      <img src="../../static/img/icon.png" alt="">
<p>Home</p>
	
  </mt-tab-item>
  <mt-tab-item id="Investment">
      <img src="../../static/img/icon1.png" alt="">
<p style="padding-top:  8%;">Investment</p>

  </mt-tab-item>
  <mt-tab-item id="Asset">
      <img src="../../static/img/icon2.png" alt="">
 <p style="padding-top:  5%;">Asset</p>

  </mt-tab-item>
  <mt-tab-item id="C2C">
       <img src="../../static/img/icon3.png" alt="">
 <p style="padding-top:  5%;">C2C</p>
 
  </mt-tab-item>
    <mt-tab-item id="Account">
         <img src="../../static/img/icon4.png" alt="">
 <p style="padding-top:  3%;">Account</p>

  </mt-tab-item>
</mt-tabbar>  
       </div>
   </div>
</template>
   
<style scoped>
/*                      Home                      */
#banner {
  width: 100%;
  height: 220px;
  background-image: url(/static/img/banner.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

/* #Home{
        background-image: url(/static/img/pos.png);
    } */
#HomeWrap {
  background-repeat: no-repeat;
  width: 100%;
  height: 667px;
  background-size: 100% 100%;
  background-image: url(/static/img/pos.png);
}

.bar {
  width: 100%;
  height: 60px;

  display: flex;
  padding-left: 3%;
}
#homeNums {
  display: flex;
  padding-top: 3%;
}
#homeNums > div {
  width: 50%;
  text-align: center;
}
.homeNum {
  background-image: url(/static/img/homeNum.png);
  background-repeat: no-repeat;
  width: 100%;
  height: 105px;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
}

#homeTimes {
  text-align: left;
  padding-top: 9%;
}
.homeTime {
  background-image: url(/static/img/homeTime.png);
  background-repeat: no-repeat;
  width: 100%;
  height: 105px;
  background-size: 100% 100%;
  display: flex;
}
.homeTime > div {
  width: 33.3%;
  padding-left: 10%;
}
.bannerLogo {
  padding-left: 2%;
  padding-top: 5%;
}
.bannerLogo > div > img {
  width: 104px;
  height: 25px;
}
.bannerTi {
  color: #fff;
  font-size: 20px;
  padding-left: 3%;
  padding-top: 10%;
}

.barTi {
  font-size: 20px;
  color: #515151;
  margin-left: 5%;
}

.boxTi {
  font-size: 14px;
  color: #515151;
  display: inline-block;
  padding-bottom: 2%;
}
.numTi {
  color: #1b55ab;
  font-size: 20px;
  padding-top: 8%;
}
.coinTi {
  color: #999999;
  font-size: 14px;
  padding-top: 8%;
}

.otherTi {
  color: #f99646;
  font-size: 25px;
}

/*                      Investment                      */
#banner2 {
  width: 100%;
  height: 138px;
  background-image: url(/static/img/banner2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.banners {
  height: 138px;
  position: absolute;
  right: 0;
  top: 5%;
}

#HomeWrap2 {
  background-repeat: no-repeat;
  width: 100%;
  height: 1218px;
  background-size: 100% 100%;
  background-image: url(/static/img/pos.png);
}
.mint-tabbar {
  position: fixed !important;
}
.bar {
  width: 100%;
  height: 60px;

  display: flex;
  padding-left: 3%;
}

.barC {
  padding-left: 5%;
}

#homeTimes {
  text-align: left;
  padding-top: 0%;
}
.homeTime2 {
  background-image: url(/static/img/homeTime.png);
  background-repeat: no-repeat;
  width: 100%;
  height: 105px;
  background-size: 100% 100%;
  text-align: left;
  border-bottom: 1px solid #e3e3e3;
}
.homeTime2 > span {
  display: inline-block;
  margin-top: 6%;
  font-size: 14px;
  color: #515151;
  margin-left: 8%;
}
.homeTime2 > div {
  width: 33.3%;
  padding-left: 10%;
}
.bannerLogo {
  padding-left: 2%;
  padding-top: 5%;
}
.bannerLogo > div > img {
  width: 104px;
  height: 25px;
}
.bannerTi2 {
  padding-top: 2%;
}
.bannerTi2 .TiOne {
  color: #fff;
  font-size: 20px;
  padding-left: 3%;
}
.bannerTi2 .TiTwo {
  color: #fff;
  font-size: 11px;
  padding-left: 3%;
}
.barTi {
  font-size: 20px;
  color: #515151;
  margin-left: 5%;
}

.boxTi {
  font-size: 14px;
  color: #515151;
  display: inline-block;
  padding-bottom: 2%;
}
.numTi {
  color: #1b55ab;
  font-size: 20px;
  padding-top: 8%;
}
.coinTi {
  color: #999999;
  font-size: 14px;
  padding-top: 8%;
}

.otherTi {
  color: #f99646;
  font-size: 25px;
}
.mint-button-icon {
  float: right;
}
.mint-button--default {
  width: 70px;
  height: 25px;
  background: rgba(230, 230, 230, 1);
  border-radius: 25px;
  box-shadow: 5px 0px 10px rgba(199, 199, 199, 0.3);
}
.coinBtn {
  padding-top: 5%;
  padding-left: 12%;
}
.mint-popup-right {
  top: 87% !important;
  left: 0 !important;
  right: auto !important;
  width: 100%;
  height: 185.5px;
}
.coinPopBottom {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.coinPopBottom > div {
  width: 80px;
  height: 20px;
}
.coinPopBottom > div {
  width: 80px;
  height: 20px;
}

.coinPopBottom > div span {
  cursor: pointer;
}

#graph {
  width: 100%;
  height: 190.5px;

  display: -webkit-box;
  overflow: hidden;
  overflow-x: scroll;
}

#graph > div {
  margin-left: 3%;
  width: 138.5px;
  height: 190.5px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  box-shadow: 12px 0px 8px rgba(132, 133, 141, 0.08);
}

#record .mint-button{
  width: 200px;
  box-shadow: none;
  border-radius: 0;

  background-color: #6b83ac;
}

#record .mint-button-text {
  color: #4a628c;
}
#record .nav {
  display: flex;
  height: 38px;
  background-color: #6b83ac;
  width: 95%;
  margin-left: 2%;
}

#record .mint-cell{
      background-color: rgba(26, 35, 121, 0.432);
    width: 95%;
    margin-left: 2%;
}
</style>
   
<script>
import Vue from "vue";
import { Tabbar, TabItem } from "mint-ui";
import { Popup } from "mint-ui";
import { Button } from "mint-ui";
import { TabContainer, TabContainerItem } from "mint-ui";
import Invesment from "./Invesment";

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
  data() {
    return {
      selected: "Home",
      popupVisible: false,
      active: "tab-container1"
    };
  },
  watch: {
    selected: function(val, oldVal) {
      console.log(val);
      // click后打印出当前mt-tab-item的id
    }
  },
  created() {},
  components: {
    Invesment,
    Tabbar,
    TabItem,
    Popup,
    Button
  },
  methods: {
    //   币种弹框
    handleClick: function() {
      this.popupVisible = true;
    }
  }
};
</script>