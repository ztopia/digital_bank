<template>
   <div>
               <div id="Investment">
            <!-- banner部分 -->
               <div id="banner2">
               <div class="bannerLogo">
                   <div><img src="../../static/img/logo.png" alt=""></div>
               </div>

               <div class="bannerTi2">
                   <span class="TiOne">This Is Our Futrue</span><br>
                
                   <span class="TiTwo">Providing asset digital technology</span><br>
                    <span class="TiTwo">and operational services</span>
               </div>
           </div>

           <div>
               <img src="../../static/img/banner2s.png" alt="" class="banners">
           </div>

            <!-- 中部横栏 -->
           <div class="bar">
                <div style="line-height: 66px;"><img src="../../static/img/barLeft.png" alt=""></div>
                <div style="line-height: 60px;width: 60%;"><span class="barTi">Rules</span></div>
           </div>


           <!-- 文字通告部分 -->
           <div id="InvestmentTimes">
               <div class="barC"><img src="../../static/img/barC.png" alt=""></div>
               <div style="padding-left:5%;"></div>
               <div class="Investments">
                  <span>"interest = investment X annualized rate /12X </span><br>
                  <span style="margin-top:  3%;">investment perio.</span>
               </div>
           </div>

           <!-- 曲线图部分 -->
           <div>
                <div class="bar" style="border-bottom:none">
                    <div style="line-height: 66px;"><img src="../../static/img/barLeft.png" alt=""></div>
                    <div style="line-height: 60px;width: 60%;"><span class="barTi">Investments</span></div>
                    <div class="coinBtn">
                      <mt-button  @click.native="handleClick">

                        <span style="font-size:14px;color:#999">BTC</span>
                        <img src="../../static/img/barC.png" height="20" width="10" slot="icon">
                    </mt-button>
                    </div>
                </div>
                <!-- 币种弹框 -->
                    <div>
                        <mt-popup
                :visible.sync="popupVisible"
                 popup-transition="popup-fade"
                 position="right"
                 v-model="popupVisible">
                <div id="coinPop">
                    <div class="coinPopTop"><span>Coin</span></div>
                <div class="coinPopBottom">
                    <div><span>BTC</span></div>
                    <div><span>ETH</span></div>
                    <div><span>EOS</span></div>
                    <div><span>EPN</span></div>
                    <div><span>GOD</span></div>
                    <div><span>LTC</span></div>
                    <div><span>DAHF</span></div>
                </div>

        </div>
</mt-popup>

                    </div>

                <!-- 4个曲线图 -->
                <div id="graph">
                    <div>
                      <div><span>3 Months Plan</span></div>
                      <div>XXXXXX</div>
                      <div><mt-button type="primary" size="normal">normal</mt-button></div>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
           </div>

           <!-- 订单 -->
           <div id="record">
            <div class="nav">
                <mt-button size="small" @click.native.prevent="active = 'tab-container1'" style="line-height:38px">Purchase record</mt-button>
                <mt-button size="small" @click.native.prevent="active = 'tab-container2'" style="line-height:38px">Inviting information</mt-button>
     
            </div>
    
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
        	<!-- cell组件 -->
          <mt-cell title="tab-container 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
        	<!-- cell组件 -->
          <mt-cell  title="tab-container 2"></mt-cell>
        </mt-tab-container-item>

      </mt-tab-container>
    </div>

            </div>

        </div>
   </div>
</template>
   
<style scoped>
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

#Investment {
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

#InvestmentTimes {
  text-align: left;
  padding-top: 0%;
}
.Investments {
  background-image: url(/static/img/homeTime.png);
  background-repeat: no-repeat;
  width: 100%;
  height: 105px;
  background-size: 100% 100%;
  text-align: left;
  border-bottom: 1px solid #e3e3e3;
}
.Investments > span {
  display: inline-block;
  margin-top: 6%;
  font-size: 14px;
  color: #515151;
  margin-left: 8%;
}
.Investments > div {
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

#record .mint-button {
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

#record .mint-cell {
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