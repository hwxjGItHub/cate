<template>
  <transition name="move">
    <div class="personage">
      <div class="header">
        <mu-list>
          <div class="top">
            <mu-icon value="chevron_left" size="30" style="float: left" @click="getBack"></mu-icon>
            <mu-icon value="more_horiz" size="30" style="float: right" @click="showShare(true)"></mu-icon>
          </div>
          <div class="uesr">
            <img src="../../public/img/m3.jpg" class="icon">
            <div class="text">
              太多的语言无法表达
              <div style="font-size: 12px">0粉丝 0赞 0人气</div>
              <div style="font-size: 12px">2018-11-24加入</div>
            </div>
          </div>
          <span class="redact">编辑资料</span>
        </mu-list>
      </div>
      <Share v-if="show"></Share>
      <div class="content">
        <mu-tabs :value.sync="active" color="#e2e2e2" indicator-color="#e2e2e2" full-width class="text" ripple="false">
          <mu-tab :class="{teg:active === 0}" class="arrange">图片</mu-tab>
          <mu-tab class="arrange" :class="{teg:active === 1}">美食记</mu-tab>
          <mu-tab class="arrange" :class="{teg:active === 2}">菜谱</mu-tab>
          <mu-tab class="arrange" :class="{teg:active === 3}">文章</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="active === 0">
          <p>你还没有上传过图片呢</p>
        </div>
        <div class="demo-text" v-if="active === 1">
          <p>还没有发过美食帖哦</p>
        </div>
        <div class="demo-text" v-if="active === 2">
          <p>还没有发过菜谱哦</p>
        </div>
        <div class="demo-text" v-if="active === 3">
          <p>还没有发布过文章哦</p>
          <div class="write">写文章</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Share from './Share.vue'
  import {mapState, mapMutations} from 'vuex'
  import {SHOW_SHARE} from '../../store/mutation-types'
  export default {
    data() {
      return {
        active: 0
      }
    },
    computed: {
      ...mapState(['show'])
    },
    methods: {
      ...mapMutations({
        showShare: SHOW_SHARE
      }),
      getBack() {
        this.$router.go(-1)
      }
    },
    components: {
      Share
    }
  }
</script>

<style scoped>
  .personage {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 2;
  }

  .personage.move-enter-active {
    transition: all 0.5s
  }

  .personage.move-enter {
    transform: translateX(100%)
  }

  .personage.move-leave-active {
    transition: all 0.5s
  }

  .personage.move-leave-to {
    transform: translateX(100%)
  }

  .header {
    background: linear-gradient(to right, #267895 0%, rgba(124, 184, 230, 0.92) 95%);
  }

  .header .top {
    margin: 10px;
  }

  .header .uesr {
    display: flex;
    margin-top: 40px;
  }

  .header .uesr .icon {
    flex: 0 0 70px;
    margin: 15px 15px 0 20px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid white;
  }

  .header .uesr .text {
    margin: 15px;
    color: white;
    font-size: 16px;
  }

  .header .redact {
    display: block;
    margin: 5px auto;
    text-align: center;
    padding: 4px;
    width: 80px;
    background: red;
    color: white;
    border-radius: 4px;
  }
  .content .text{
    color: #000;
  }
  .content .text .arrange.teg{
    color: red;
  }
  .demo-text>p{
    text-align: center;
    margin-top: 100px;
  }
  .demo-text .write{
    margin: 15px auto;
    padding: 2px;
    text-align: center;
    width: 80px;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
  }
</style>
