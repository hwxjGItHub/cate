<template>
  <transition name="move">
    <div class="details">
      <div class="header">
        <i class="icon-arrow_lift" @click="go"></i>
        <img src="../../public/img/timg.jpg" class="icon">
        <span>我的未来不是梦</span>
        <span class="attention">关注</span>
      </div>
      <div class="banner" ref="banner">
        <div>
          <div class="img">
            <img :src="calssIfy.albums[0]">
            <div class="name">{{calssIfy.title}}</div>
          </div>
          <div class="abstract">
            <span>简介：</span>
            {{calssIfy.imtro}}
          </div>
          <div class="content">
            <div class="content_set">
              <mu-list>
                <mu-divider></mu-divider>
                <mu-list-item button>
                  <mu-list-item-title style="font-weight: 700;font-size: 15px">用料</mu-list-item-title>
                </mu-list-item>
                <mu-divider></mu-divider>
                <mu-list-item button>
                  <mu-list-item-title style="font-size: 15px;">{{calssIfy.ingredients}}</mu-list-item-title>
                </mu-list-item>
                <mu-divider></mu-divider>
                <div class="sheet">{{calssIfy.burden}}</div>
                <mu-divider></mu-divider>
              </mu-list>
            </div>
          </div>
          <div class="practice">
            <div class="practice_box">做法：</div>
            <div class="step" v-for="(data,index) in calssIfy.steps" :key="index">
              <p>{{data.step}}</p>
              <img :src="data.img" class="step_two">
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    created() {
      this.$nextTick(() => {
        if (this.bannerScroll) {
          this.bannerScroll.refresh()
        } else {
          this.bannerScroll = new BScroll(this.$refs.banner, {
            click: true
          })
        }
      })
    },
    computed: {
      ...mapState({
        calssIfy: 'calssIfy'
      })
    },
    methods: {
      go() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .details{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 500;
  }
  .details.move-enter-active{
    transition: all 0.5s
  }
  .details.move-enter{
    transform: translateX(100%)
  }
  .details.move-leave-active{
    transition: all 0.5s
  }
  .details.move-leave-to{
    transform: translateX(100%)
  }
  .header{
    width: 100%;
    height: 40px;
    margin: 10px 15px;
    line-height: 40px;
  }
  .header .icon{
    margin: 0 15px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .header .attention{
    padding: 2px 5px;
    background: rgba(243, 70, 77, 0.82);
    color: white;
    border-radius: 4px;
  }
  .banner{
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }
  .img{
    width: 100%;
    text-align: center;
  }
  .img>img{
    width: 100%;
    height: 220px;
  }
  .img .name{
    margin: 10px;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
  }
  .abstract{
    margin: 0 15px;
  }
  .abstract>span{
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .content_set{
    font-size: 15px;
  }
  .content_set .sheet{
    margin-left: 15px;
    min-height: 45px;
    letter-spacing: 2px;
  }
  .practice .practice_box{
    margin-left: 15px;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-weight: 700;
    font-size: 15px;
  }
  .practice .step{
    margin: 5px 15px;
  }
  .practice .step .step_two{
    margin: 10px 0;
    width: 100%;
    height: 220px;
  }
</style>
