<template>
  <div class="meals">
    <div class="header">
      <i class="icon-arrow_lift" @click="go"></i>
      <span class="morning">早中晚餐</span>
    </div>
    <div class="content">
      <mu-tabs :value.sync="active" center color="white" indicator-color="white">
        <mu-tab class="parse" :class="{get: active === 0}">
          <div>
            <mu-icon value="brightness_medium" class="icon" :class="{get: active === 0}"></mu-icon>
            早餐
          </div>
        </mu-tab>
        <mu-tab class="parse" :class="{get: active === 1}">
          <div>
            <mu-icon value="wb_sunny" class="icon" :class="{get: active === 1}"></mu-icon>
            中餐
          </div>
        </mu-tab>
        <mu-tab class="parse" :class="{get: active === 2}">
          <div>
            <mu-icon value="brightness_2" class="icon" :class="{get: active === 2}"></mu-icon>
            晚餐
          </div>
        </mu-tab>
      </mu-tabs>
      <div class="content_cat" ref="content">
        <div>
          <div class="demo-text" v-if="active === 0">
            <div class="demo_cat" v-for="(item, index) in cereal" :key="index" @click="mealsData(item)">
              <img :src="item.albums" class="img">
              <div class="text">{{item.title}}</div>
              <div class="name">
                <img :src="item.icon" class="icon">
                <span>{{item.name}}</span>
              </div>
              <mu-divider></mu-divider>
            </div>
          </div>
          <div class="demo-text" v-if="active === 1">
            <div class="demo_cat" v-for="(item, index) in lunch" :key="index" @click="mealsData(item)">
              <img :src="item.albums" class="img">
              <div class="text">{{item.title}}</div>
              <div class="name">
                <img :src="item.icon" class="icon">
                <span>{{item.name}}</span>
              </div>
              <mu-divider></mu-divider>
            </div>
          </div>
          <div class="demo-text" v-if="active === 2">
            <div class="demo_cat" v-for="(item, index) in supper" :key="index" @click="mealsData(item)">
              <img :src="item.albums" class="img">
              <div class="text">{{item.title}}</div>
              <div class="name">
                <img :src="item.icon" class="icon">
                <span>{{item.name}}</span>
              </div>
              <mu-divider></mu-divider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import {DETAILS_MELAS} from '../../store/mutation-types'
  import BScroll from 'better-scroll'
  export default {
    created() {
      this.$nextTick(() => {
        this.contentScroll = new BScroll(this.$refs.content, {
          click: true
        })
      })
    },
    data() {
      return {
        active: 1
      }
    },
    computed: {
      ...mapState({
        cereal: state => state.result.cereal,
        lunch: state => state.result.lunch,
        supper: state => state.result.supper
      })
    },
    methods: {
      go() {
         this.$router.go(-1)
      },
      ...mapMutations({melas: DETAILS_MELAS}),
      mealsData(item) {
        this.melas(item)
        this.$router.push('/mealsDetails')
      }
    }
  }
</script>

<style scoped>
  .meals {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
    overflow: hidden;
    background: white;
  }
  .header {
    display: flex;
    margin: 10px;
    width: 100%;
    height: 30px;
    line-height: 30px;
  }
  .header .icon-arrow_lift {
    flex: 0 0 20px;
    font-size: 17px;
    margin-top: 6px;
  }
  .header .morning {
    flex: 1;
    margin-right: 15px;
    text-align: center;
    font-size: 16px;
  }
  .content .parse{
    padding: 0 15px;
    color: #ccc;
  }
  .content .parse.get{
    color: #d89a78;
  }
  .content .parse .icon{
    vertical-align: middle;
    color: #d1d1d1;
  }
  .content .parse .icon.get{
    vertical-align: middle;
    color: #ff8a13;
  }
  .content_cat{
    position: absolute;
    left: 0;
    top: 100px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }
  .content_cat .demo-text .demo_cat{
    margin: 10px 10px 0 10px;
  }
  .content_cat .demo-text .img{
    margin: 15px 15px 10px 15px;
    width: 90%;
    height: 220px;
  }
  .content_cat .demo-text .demo_cat .text{
    margin-left: 10px;
    font-size: 16px;
    font-weight: 700;
  }
  .content_cat .demo-text .demo_cat .name{
    margin: 10px 10px 5px 10px;
  }
  .content_cat .demo-text .demo_cat .name .icon{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .content_cat .demo-text .demo_cat .name>span{
    vertical-align: top;
    margin-left: 6px;
    color: #acacac;
  }
</style>
