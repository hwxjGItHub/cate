<template>
  <div class="discover">
    <div class="top">
      <mu-appbar style="width: 100%" color="red">
        <mu-icon color="#fff" value="forum" size="23" @click="messageIf(true)"></mu-icon>
        <div class="title" @click="searchIf">
          <i class="icon-uniE906"></i>
          <span class="text">收搜你想要的菜...</span>
        </div>
        <mu-button icon slot="right" ref="button" @click="open = !open">
          <mu-icon color="#fff" value="add" size="26"></mu-icon>
        </mu-button>
        <mu-popover cover :open.sync="open" :trigger="trigger" class="button">
          <mu-list>
            <mu-list-item button @click="open = !open">
              <mu-list-item-title>晒美食</mu-list-item-title>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item button @click="open = !open">
              <mu-list-item-title>拍视频</mu-list-item-title>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item button @click="clickMenu">
              <mu-list-item-title>发菜谱</mu-list-item-title>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item button @click="clickEssay">
              <mu-list-item-title>写文章</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-popover>
      </mu-appbar>
    </div>
    <div class="scroll" ref="menu">
      <div>
        <div class="box">
          <div>
            <div class="nav">
              <mu-carousel>
                <mu-carousel-item>
                  <div class="img">
                    <div class="describe">
                      <p class="name">莲花酱肉丝</p>
                      <p>功效：营养、增强抵抗力</p>
                      <p>适用人群：青少年、孕妇、白领</p>
                    </div>
                    <img :src="img1">
                  </div>
                </mu-carousel-item>
                <mu-carousel-item>
                  <div class="img">
                    <div class="describe">
                      <p class="name">泡椒肉末茄子</p>
                      <p>功效：营养、增强抵抗力</p>
                      <p>适用人群：老少皆适用</p>
                    </div>
                    <img :src="img2">
                  </div>
                </mu-carousel-item>
                <mu-carousel-item>
                  <div class="img">
                    <div class="describe">
                      <p class="name">红烧肉</p>
                      <p>功效：营养、健康</p>
                      <p>适用人群：老年人、青少年、白领</p>
                    </div>
                    <img :src="img3">
                  </div>
                </mu-carousel-item>
                <mu-carousel-item>
                  <div class="img">
                    <div class="describe">
                      <p class="name">肉馅豆腐夹</p>
                      <p>功效：美容、通乳、增肥、预防骨质疏松...</p>
                      <span>适用人群：老少皆适</span>
                    </div>
                    <img :src="img4">
                  </div>
                </mu-carousel-item>
              </mu-carousel>
            </div>
            <div class="content">
              <div class="content_box" @click="classifyStr(true)">
                <mu-icon value="widgets" color="red"></mu-icon>
                <p>菜谱分类</p>
              </div>
              <div class="content_box" @click="mealsStr">
                <mu-icon value="room_service" color="red"></mu-icon>
                <p>三餐</p>
              </div>
              <div class="content_box" @click="healthClick">
                <mu-icon value="local_cafe" color="red"></mu-icon>
                <p>健康</p>
              </div>
              <div class="content_box">
                <mu-icon value="menu" color="red"></mu-icon>
                <p>菜单</p>
              </div>
              <div class="content_box" @click="xClick">
                <mu-icon value="format_underlined" color="red"></mu-icon>
                <p>小吃</p>
              </div>
              <div class="content_box" @click="specialty">
                <mu-icon value="spa" color="red"></mu-icon>
                <p>特产</p>
              </div>
              <div class="content_box">
                <mu-icon value="more_horiz" color="red"></mu-icon>
                <p>敬请期待</p>
              </div>
            </div>
            <div class="live">
              <i class="icon-play3"></i>
              哈友生活秀
            </div>
          </div>
        </div>
        <div class="share">
          <div class="recommend" v-for="(item,index) in dataOut" @click="detailsStr(item.id)" :key="index">
            <img :src="item.albums" class="icon">
            <span class="describe">{{item.title}}</span>
            <div class="message">
              <img :src="item.icon">
              <span class="span">{{item.name}}</span>
              <i class="icon-uniE90B"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import img1 from '../../public/img/img1.jpg'
  import img2 from '../../public/img/img2.jpg'
  import img3 from '../../public/img/img3.jpg'
  import img4 from '../../public/img/img4.jpg'
  import {mapState, mapMutations} from 'vuex'
  import {CLASSIFY_SHOW, SEARCH_HOT, THE_MENU, MESSAGE_SHOW} from '../../store/mutation-types'
  export default {
    created() {
      this.axios('api/result')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.dataOut = res.data.recommend
          }
        })
      this.$nextTick(() => {
        this.menuScroll = new BScroll(this.$refs.menu, {
          click: true
        })
      })
    },
    data () {
      return {
        img1,
        img2,
        img3,
        img4,
        dataOut: [],
        open: false,
        trigger: null
      }
    },
    mounted() {
      this.trigger = this.$refs.button.$el
    },
    computed: {
      ...mapState({
        data: state => state.data,
        settingGo: 'settingGo'
      })
    },
    methods: {
      ...mapMutations({
        classifyStr: CLASSIFY_SHOW,
        searchHot: SEARCH_HOT,
        setMenu: THE_MENU,
        messageIf: MESSAGE_SHOW
      }),
      detailsStr(id) {
        this.$router.push({path: `/details/${id}`})
      },
      searchIf() {
        this.searchHot(true)
        this.$router.push('/search')
      },
      mealsStr() {
        this.$router.push('/meals')
      },
      healthClick() {
        let txt = this.data[0]
        let hot = this.searchHot(false)
        this.$router.push({name: 'search', params: {txt: txt, hot}})
      },
      xClick() {
        let txt = this.data[1]
        let hot = this.searchHot(false)
        this.$router.push({name: 'search', params: {txt: txt, hot}})
      },
      specialty() {
        let txt = this.data[2]
        let hot = this.searchHot(false)
        this.$router.push({name: 'search', params: {txt: txt, hot}})
      },
      clickMenu() {
        if (this.settingGo === true) {
          this.setMenu(true)
          this.open = !this.open
        } else {
          this.$router.push('/login')
        }
      },
      clickEssay() {
        if (this.settingGo === true) {
          this.$router.push('/essay')
          this.open = !this.open
        } else {
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style scoped>
  .top .title {
    position: absolute;
    top: 15px;
    left: 45px;
    height: 25px;
    width: 75%;
    text-align: center;
    border-radius: 25px;
    background: rgba(221, 221, 221, 0.66);
  }

  .title .icon-uniE906 {
    position: absolute;
    left: 28%;
    top: 5px;
    color: rgba(158, 158, 158, 0.66)
  }

  .title .text {
    position: absolute;
    left: 35%;
    top: -14px;
    font-size: 14px;
    color: rgba(121, 121, 121, 0.66)
  }
  .mu-popover.transition-bottom-start{
    position: fixed;
    top: 50px !important;
    right: 10px;
    width: 100px;
  }
  .mu-item-title{
    font-size: 14px;
  }
  .scroll{
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 56px;
    width: 100%;
    overflow: hidden;
  }
  .box{
    overflow: hidden;
  }
  .nav{
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .nav .mu-carousel-item {
    position: relative;
    margin: 10px;
    height: 200px;
  }
  .nav .mu-carousel-item .img{
    width: 100%;
    height: 200px;
  }
  .nav .mu-carousel-item .img >img{
    width: 250px;
    height: 200px;
    border-radius: 4px;
  }
  .img .describe{
    position: absolute;
    right: 10px;
    top: 40px;
    width: 105px;
  }
  .img .describe .name{
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
  }
  .content{
    overflow: hidden;
  }
  .content_box{
    display: inline-block;
    margin: 5px 7px;
    width: 20%;
    text-align: center;
  }
  .content_box .mu-icon{
    margin-top: 5px;
    height: 20px;
    line-height: 20px;
  }
  .live{
    margin: 10px;
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
  .share{
    margin: 10px;
    text-align: center;
  }
  .recommend{
    position: relative;
    display: inline-block;
    margin: 4px 6px;
    width: 46%;
    height: 200px;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 6px 5px rgb(208, 208, 208);
  }
  .recommend .icon{
    width: 100%;
    height: 170px;
    border-radius: 6px;
  }
  .recommend .describe{
    position: absolute;
    left: 5px;
    bottom: 35px;
    text-align: left;
    color: rgb(217, 217, 217);
    font-weight: 700;
  }
  .recommend .message{
    display: flex;
    width: 100%;
  }
  .recommend .message>img{
    position: absolute;
    left: 5px;
    bottom: 6px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #ffffff;
  }
  .recommend .message .span{
    flex: 1;
    font-size: 14px;
    color: #adadad;
  }
  .icon-uniE90B{
    flex: 0 0 30px;
    font-size: 18px;
  }
</style>
