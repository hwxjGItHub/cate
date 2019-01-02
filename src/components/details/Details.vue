<template>
  <div class="details">
    <div class="header">
      <i class="icon-arrow_lift" @click="go"></i>
      <img :src="details.icon" class="icon">
      <span>{{details.name}}</span>
      <span class="attention">关注</span>
    </div>
    <div class="banner" ref="banner">
      <div>
        <div class="img">
          <img :src="details.albums">
          <div class="name">{{details.title}}</div>
        </div>
        <div class="abstract">
          <span>简介：</span>
          {{details.imtro}}
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
                <mu-list-item-title style="font-size: 15px;">{{details.ingredients}}</mu-list-item-title>
              </mu-list-item>
              <mu-divider></mu-divider>
              <div class="sheet">{{details.burden}}</div>
              <mu-divider></mu-divider>
            </mu-list>
          </div>
        </div>
        <div class="practice">
          <div class="practice_box">做法：</div>
          <div class="step" v-for="(data,index) in details.steps" :key="index">
            <p>{{data.step}}</p>
            <img :src="data.img" class="step_two">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      'id': String,
      required: true
    },
    data() {
      return {
        details: []
      }
    },
    created() {
      this.axios('api/result')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.details = res.data.recommend[this.id]
          }
        })
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
    z-index: 2;
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
