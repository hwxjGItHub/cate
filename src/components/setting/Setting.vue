<template>
  <div class="setting">
    <div class="header">
      <i class="icon-arrow_lift" @click="settingIf(false)"></i>
      <span>设置</span>
    </div>
    <div class="acction">
      <mu-list>
        <mu-list-item button :ripple="false">
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
    <div class="btn">
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title class="button">账户与安全</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chevron_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button>
        <mu-list-item-title class="button">消息通知</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="chevron_right"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button>
          <mu-list-item-title class="button">清除缓存</mu-list-item-title>
          <mu-list-item-action>
            <mu-list-item-title class="versions">9.13MB</mu-list-item-title>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button>
          <mu-list-item-title class="button">给哈友的评价</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chevron_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button>
          <mu-list-item-title class="button">关于我们</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chevron_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>
    <div class="exit">
      <div class="exit_eat">
        <mu-button class="demo-button" color="#f65955" @click="confirm()">退出当前账户</mu-button>
      </div>
      <div class="edition">版本号：6.6.6</div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {SETTING_IF, SETTING_GO} from '../../store/mutation-types'

  export default {
    methods: {
      ...mapMutations({
        settingIf: SETTING_IF,
        settingGo: SETTING_GO
      }),
      exit() {
        this.settingIf(false)
        this.settingGo(false)
      },
      confirm () {
        this.$confirm('确定要退出么？', '提示', {
          type: 'warning'
        }).then(({ result }) => {
          if (result) {
            this.$alert('退出成功', '提示', {
              okLabel: '确定'
          })
            this.exit()
          }
        })
      }
    }
  }
</script>

<style scoped>
  .setting {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 2;
    overflow: hidden;
  }
  .header {
    display: flex;
    margin: 15px;
    height: 24px;
    line-height: 24px;
  }
  .header > span {
    flex: 1;
    font-size: 16px;
    text-align: center;
  }
  .acction {
    margin-top: 20px;
    height: 80px;
    width: 100%;
  }
  .acction .uesr {
    margin: 20px 0;
    width: 100%;
    height: 60px;
    vertical-align: top;
  }
  .acction .uesr .text {
    position: absolute;
    top: 20%;
    left: 90px;
    font-weight: 700;
  }
  .acction .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .btn .button{
    font-size: 14px;
  }
  .btn .versions{
    width: 70px;
    font-size: 14px;
  }
  .exit{
    margin: 20px 0;
    text-align: center;
  }
  .exit .exit_eat{
    padding:  20px;
    color: red;
  }
  .exit .exit_eat .demo-button{
    color: #000;
  }
  .exit .edition{
    margin-top: 15px;
    border: 1px solid white;
    font-size: 12px;
    color: #cbcbcb;
  }
</style>
