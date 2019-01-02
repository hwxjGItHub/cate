<template>
  <transition name="move">
    <div class="top">
      <div class="share">
        <div class="icon">
          <img src="../../public/img/bfh.png">
          <p>微信好友</p>
        </div>
        <div class="icon">
          <img src="../../public/img/bfi.png">
          <p>朋友圈</p>
        </div>
        <div class="icon">
          <img src="../../public/img/bfa.png">
          <p>QQ好友</p>
        </div>
        <div class="icon">
          <img src="../../public/img/bfb.png">
          <p>QQ空间</p>
        </div>
        <div class="icon">
          <img src="../../public/img/bfg.png">
          <p>微博</p>
        </div>
        <div class="icon">
          <img src="../../public/img/bfk.png">
          <p>拷贝</p>
        </div>
        <div @click="showShare(false)" class="cancel">x</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {SHOW_SHARE} from '../../store/mutation-types'
  export default {
    methods: {
      ...mapMutations({
        showShare: SHOW_SHARE
      })
    }
  }
</script>

<style scoped>
.top{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(0,0,0,0.3);
}
.top.move-enter-active {
  transform: scale(1);
  opacity: 0;
  transition: all 0.5s;
}
.top.move-enter {
  transform: scale(0.2);
  opacity: 1;
}
.top.move-leave-active {
  transition: all 0.8s;
  transform: scale(1);
  opacity: 1;
}
.top.move-leave-to {
  transform: scale(0.2);
  opacity: 0;
}
.share{
  position: relative;
  top: 25%;
  left: 10%;
  width: 80%;
  height: 220px;
  background: white;
  border-radius: 6px;
  z-index: 1000;
  overflow: hidden;
}
.share .icon{
  width: 25%;
  float: left;
  text-align: center;
}
.share .icon img{
  margin-top: 20px;
  width: 40px;
  height: 40px;
  vertical-align: bottom;
}
.share .icon p{
  font-size: 12px;
}
.share .cancel{
  position: absolute;
  bottom: 15px;
  left: 47%;
  width: 25px;
  height: 25px;
  line-height: 20px;
  font-size: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  color: #ccc;
}
</style>
