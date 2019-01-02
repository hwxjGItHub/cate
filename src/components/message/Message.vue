<template>
  <transition name="move">
    <div class="message">
      <div class="header">
        <i class="icon-arrow_lift" @click="messageIf(false)"></i>
        <div class="meg">消息</div>
        <div class="unread">未读</div>
      </div>
      <div class="get">
        <mu-icon value="directions_boat" color="white" class="icon"></mu-icon>
        <div>官方小秘书 <span>官方</span></div>
      </div>
      <mu-divider></mu-divider>
      <div class="login" v-if="!settingGo">
        <div class="box">登录后显示您的消息</div>
        <div class="button" @click="goTo">请登录</div>
      </div>
      <div  v-if="settingGo">
        <div class="const">
         <mu-icon value="headset_mic" color="white" class="icon"></mu-icon>
         <div>电商客服专线 <span>商品或订单问题在此咨询</span></div>
       </div>
        <mu-divider></mu-divider>
        <div class="const">
         <mu-icon value="school" color="white" class="img"></mu-icon>
         <div>我的问答</div>
       </div>
        <mu-divider></mu-divider>
        <div class="bottom"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import {MESSAGE_SHOW} from '../../store/mutation-types'
  export default {
    computed: {
      ...mapState({
        settingGo: 'settingGo'
      })
    },
    methods: {
      ...mapMutations({
        messageIf: MESSAGE_SHOW
      }),
      goTo() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .message {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 2;
  }
  .message.move-enter-active {
    transition: all 0.5s
  }
  .message.move-enter {
    transform: translateX(100%)
  }
  .message.move-leave-active {
    transition: all 0.5s
  }
  .message.move-leave-to {
    transform: translateX(100%)
  }
  .header{
    display: flex;
    margin: 10px;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    font-size: 16px;
  }
  .header .icon-arrow_lift{
    flex: 0 0 30px;
  }
  .header .meg{
    flex: 1;
    text-align: center;
    font-size: 16px;
  }
  .header .unread{
    flex: 0 0 40px;
  }
  .get{
    display: flex;
    margin: 20px 10px;
    border: 1px solid white;
  }
  .get .icon{
    padding: 4px;
    border: 1px solid white;
    background: red;
    border-radius: 50%;
  }
  .get>div{
    flex: 1;
    margin-left: 15px;
    padding-top: 10px;
    color: #2cffdc;
    font-size: 15px;
  }
  .get>div>span{
    color: red;
    border: 1px solid red;
    border-radius: 4px;
    font-size: 12px;
  }
  .login{
    padding-top: 50px;
    height: 100%;
    background: rgba(220, 220, 220, 0.62);
    text-align: center;
  }
  .login .box{
    padding: 20px;
    font-size: 14px;
  }
  .login .button{
    margin: 0 auto;
    width: 100px;
    padding: 5px;
    color: red;
    border: 1px solid red;
    border-radius: 4px;
  }
  .const{
    display: flex;
    margin: 10px;
  }
  .const .icon{
    padding: 4px;
    border: 1px solid white;
    background: #58bfc4;
    border-radius: 50%;
  }
  .const>div{
    flex: auto;
    margin-left: 15px;
    padding-top: 10px;
    color: #2cffdc;
    font-size: 15px;
  }
  .const>div>span{
    color: #ccc;
    font-size: 12px;
  }
  .const .img{
    padding: 4px;
    border: 1px solid white;
    background: #2968b2;
    border-radius: 50%;
  }
  .bottom{
    width: 100%;
    height: 500px;
    background: rgba(220, 220, 220, 0.62);
  }
</style>
