<template>
  <div class="my" ref="my">
    <div>
      <div class="header">
        <div class="icon"></div>
        <div class="header_top" @click="goin" v-if="!settingGo">
          <i class="icon-4"></i>
          <span class="log">请先登录/注册</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="acction" v-if="settingGo" @click="skip">
          <mu-list>
            <mu-list-item button :ripple="false" style="overflow: hidden;height: 60px" >
              <mu-list-item-title class="uesr">
                <img src="../../public/img/m3.jpg" class="icon">
                <span class="text">太多的语言无法表达</span>
              </mu-list-item-title>
              <mu-list-item-action>
                <mu-icon value="chevron_right"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
          </mu-list>
        </div>
        <div class="set">
          <div class="interest">
            <span class="one">0</span>
            <span style="color:#727272">美食记</span>
          </div>
          <div class="interest">
            <span class="one">0</span>
            <span style="color:#727272">菜谱</span>
          </div>
          <div class="interest">
            <span class="one">0</span>
            <span style="color:#727272">关注</span>
          </div>
        </div>
      </div>
      <div class="get">
        <div class="interest">
          <span class="one">我的香豆</span>
          <span style="color:#727272">0</span>
        </div>
        <div class="interest">
          <span class="one">我的积分 </span>
          <span style="color:#727272">0</span>
        </div>
        <div class="interest">
          <span class="one">优惠卷</span>
          <span style="color:#727272">0</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="myCat">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>我的订单</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="chevron_right"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
      </div>
      <div class="line"></div>
      <div class="myCat">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>我的会员</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="chevron_right"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button>
            <mu-list-item-title>我的收藏</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="chevron_right"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button>
            <mu-list-item-title>浏览历史</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="chevron_right"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
      </div>
      <div class="line"></div>
      <div class="myCat">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>邀请好友
              <span style="color:red;font-size: 12px">(获100积分)</span>
            </mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="chevron_right"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button>
            <mu-list-item-title>反馈帮助</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="chevron_right"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
          <div @click="settingStr">
            <mu-list-item button>
              <mu-list-item-title>设置</mu-list-item-title>
              <mu-list-item-action>
                <mu-list-item-title class="versions">版本号：6.6</mu-list-item-title>
              </mu-list-item-action>
            </mu-list-item>
          </div>
          <mu-divider></mu-divider>
        </mu-list>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState, mapMutations} from 'vuex'
  import {SETTING_IF} from '../../store/mutation-types'

  export default {
    mounted() {
      this.$nextTick(() => {
        this.myScroll = new BScroll(this.$refs.my, {
          click: true
        })
      })
    },
    computed: {
      ...mapState(['settingGo'])
    },
    methods: {
      ...mapMutations({
        settingIf: SETTING_IF
      }),
      settingStr() {
        if (this.settingGo === true) {
          this.settingIf(true)
        }
      },
      goin() {
        this.$router.push('/login')
      },
      skip() {
        this.$router.push('/personage')
      }
    }
  }
</script>

<style scoped>
  .my{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 60px;
    width: 100%;
    overflow: hidden;
  }
  .header {
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #d8d8d8;
  }

  .header .icon {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -2;
    width: 100%;
    height: 150px;
    background: url('../../public/img/timg.jpg');
    filter: blur(8px);
  }

  .header .header_top {
    display: flex;
    padding: 15px;
    line-height: 55px;
  }

  .header .header_top .icon-4 {
    flex: 0 0 50px;
    margin-left: 25px;
    padding: 10px;
    font-size: 35px;
    color: white;
    background: #d3d3d3;
    border-radius: 50%;
  }

  .header .header_top .log {
    flex: 1;
    margin-left: 20px;
    line-height: 55px;
  }

  .header .header_top .icon-keyboard_arrow_right {
    flex: 0 0 20px;
    margin-top: 16px;
    font-size: 22px;
  }

  .acction {
    padding: 20px 0 20px 25px;
    height: 80px;
    width: 100%;
    overflow: hidden;
  }
  .acction .uesr {
    margin: 20px 0;
    width: 100%;
    height: 50px;
    vertical-align: top;
  }
  .acction .uesr .text {
    position: absolute;
    top: 20%;
    left: 90px;
    font-weight: 700;
  }
  .acction .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    filter: blur(0);
  }

  .header .set {
    display: flex;
    margin: 15px 15px;
    text-align: center;
  }

  .header .set .interest {
    flex: 1;
  }

  .header .set .interest .one {
    display: block;
  }

  .get {
    display: flex;
    margin: 10px 15px;
    text-align: center;
  }

  .get .interest {
    flex: 1;
  }

  .get .interest .one {
    display: block;
  }

  .line {
    width: 100%;
    height: 5px;
    background: rgba(224, 224, 224, 0.85);
  }
  .mu-item-title{
    font-size: 14px;
  }
  .mu-item{
    border-bottom: 1px solid #000;
  }
  .mu-list{
    padding: 0;
  }
  .versions{
    font-size: 12px;
    width: 90px;
    color: rgba(170, 170, 170, 0.85);
  }
</style>
