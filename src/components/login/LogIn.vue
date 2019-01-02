<template>
  <transition name="move">
    <div class="goin">
      <div class="header">
        <i class="icon-arrow_lift" @click="goto"></i>
      </div>
      <div class="test">
        <span class="enter">手机号注册/登录</span>
        <span class="text">首次登录将自动为您注册</span>
      </div>
      <div class="mobile">
        <div class="inp">
          <mu-icon value="phone_iphone" size="20" class="mu_icon"></mu-icon>
          <span class="number">+86 |</span>
          <input type="tel" placeholder="手机号" v-model="phoneNum" oninput="if(value.length>11)value=value.slice(0,11)">
        </div>
        <div class="message">
          <mu-icon value="code" size="20" class="mu_icons"></mu-icon>
          <input type="text" placeholder="请输入验证码" class="inp" v-model="input">
          <transition name="move">
            <div v-if="show" class="code" ref="code">
              【哈友菜谱】哈友菜谱IOS短信验证码为{{checkCode}},不要告诉别人哦！
            </div>
          </transition>
          <span class="lest" @click="sendSmsCode" ref="count">获取验证码</span>
        </div>
      </div>
      <div class="goin_box" @click="useCode" ref="use">登录</div>
      <div class="option">
        <span>密码登录 |</span>
        <span>忘记密码 |</span>
        <span>遇到问题？</span>
      </div>
      <div class="images">
        <img src="../../public/img/al5.png" alt="">
        <img src="../../public/img/bec.png" alt="">
        <img src="../../public/img/beg.png" alt="">
        <img src="../../public/img/bec.png" alt="">
      </div>
      <div class="notice">
        注册/登录即代表同意 <span>《哈友用户协议》</span>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {SETTING_GO} from '../../store/mutation-types'
  const $ = require('jquery')

  export default {
    data () {
      return {
        phoneNum: '',
        input: '',
        checkCode: '',
        show: true,
        array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        value11: '',
        value12: ''
      }
    },
    watch: {
      input(newTel, oldTel) {
        if (newTel.length === 4) {
          this.$refs.use.setAttribute('style', 'background:red')
        }
      },
      phoneNum(newTel, oldTel) {
        if (newTel.length === 11) {
          this.$refs.count.setAttribute('style', 'color:red')
        }
      }
    },
    computed: {
    },
    methods: {
      ...mapMutations({
        settingGo: SETTING_GO
      }),
      goto() {
        this.$router.go(-1)
      },
      sendSmsCode() {
        if (!(/^1[34578]\d{9}$/.test(this.phoneNum))) {
          this.$alert('请输入正确的电话号码', '提示', {
            okLabel: '知道了'
          })
        } else {
          this.checkCode = ''
          this.show = true
          this.code()
          this.createCode()
        }
      },
      createCode() {
        let codeLength = 4
        let random = this.array
        for (let i = 0; i < codeLength; i++) {
          let index = Math.floor(Math.random() * 10)
          this.checkCode += random[index]
        }
      },
      useCode() {
        let val = $('.inp').eq(1).val()
        if (val === this.checkCode && val !== '') {
          this.alert()
          this.checkCode = ''
          this.setStr()
          this.goto()
        } else {
          this.$alert('验证码输入错误', '提示', {
            okLabel: '重新输入'
          })
        }
      },
      alert () {
        this.$alert('登录成功', '提示', {
          okLabel: '知道了'
        })
      },
      setStr() {
        this.settingGo(true)
      },
      code() {
        this.$refs.code.setAttribute('style', 'display:block')
        setTimeout(() => {
          this.$refs.code.setAttribute('style', 'display:none')
        }, 3000)
      }
    }
  }
</script>

<style scoped>
  .goin {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    background: white;
    overflow: hidden;
  }
  .goin.move-enter-active{
    transition: all 0.5s
  }
  .goin.move-enter{
    transform: translateY(100%)
  }
  .goin.move-leave-active{
    transition: all 0.5s
  }
  .goin.move-leave-to{
    transform: translateY(100%)
  }
  .header {
    margin: 15px;
    font-size: 18px;
    color: #7b7b7b;
  }
  .test {
    margin: 40px;
    text-align: center;
  }
  .test .enter {
    display: block;
    font-size: 22px;
    font-weight: 700;
  }
  .test .text {
    margin-top: 5px;
    font-size: 14px;
    color: #aaaaaa;
  }
  .mobile{
    margin: 30px 10px;
    border: 1px solid white;
  }
  .mobile .inp{
    margin: 20px 20px;
    padding-bottom: 10px;
    color: #aaaaaa;
    border-bottom: 1px solid #dcdcdc;
  }
  .mobile .inp .mu_icon{
    color: #aaaaaa;
    vertical-align: middle;
  }
  .mobile .inp input, .message>input{
    width: 70%;
    padding-left: 10px;
    border: none;
    outline: none;
  }
  .message{
    position: relative;
    margin: 30px 20px 20px 20px;
    padding-bottom: 10px;
    color: #aaaaaa;
    border-bottom: 1px solid #dcdcdc;
  }
  .code{
    display: none;
    position: fixed;
    left: 25%;
    top: 0;
    width: 60%;
  }
  .message .code.move-enter-active{
    transition: all 0.5s;
  }
  .message .code.move-enter{
    transform: translateX(100%);
  }
  .message .mu_icons{
    padding: 0;
  }
  .message .lest{
    position: absolute;
    right: 5px;
    padding: 5px;
    border: 1px solid #bdbdbd;
    color: #bdbdbd;
    font-size: 12px;
    border-radius: 4px;
  }
  .goin_box{
    margin: 30px;
    padding: 10px;
    text-align: center;
    background: #fea89c;
    border: 1px solid #fea89c;
    border-radius: 6px;
    color: white;
  }
  .goin_box .demo-button{
    width: 100%;
    height: 100%;
    background: #fea89c;
  }
  .option{
    text-align: center;
  }
  .option>span{
    color: #acacac;
  }
  .images{
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
  .images>img{
    margin: 0 5px;
    width: 18%;
    height: 50px;
  }
  .notice{
    margin-top: 20px;
    text-align: center;
    color: #acacac;
  }
  .notice>span{
    color: #595959;
  }
</style>
