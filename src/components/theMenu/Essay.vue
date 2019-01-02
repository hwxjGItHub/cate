<template>
  <transition name="move">
    <div class="essay">
      <div class="top">
        <div class="left" @click="goToHome">关闭</div>
        <div class="right">下一步</div>
      </div>
      <div class="title">
        <textarea class="tex" placeholder="标题" rows="5" maxlength="60" v-model="desc" @input="descInput"></textarea>
        <span class="number" v-if="show">（60个字以内）</span>
        <span class="text">{{text}}</span>
      </div>
      <mu-divider></mu-divider>
      <div class="content">
        <textarea class="tex" placeholder="输入内容" rows="15" :class={bold:bold,line:line,center:center}></textarea>
      </div>
      <div class="bottom" :class={active:tag}>
        <mu-icon value="crop_original"  class="icon"></mu-icon>
        <mu-icon value="videocam" class="icon"></mu-icon>
        <mu-icon value="spellcheck" class="icon" @click="tagStr"></mu-icon>
        <mu-icon value="all_inclusive"  class="icon"></mu-icon>
      </div>
      <div class="style">
        <mu-icon value="format_bold"  class="icon" :class={active:bold} @click="boldStr"></mu-icon>
        <mu-icon value="format_underlined"  class="icon" :class={line:line} @click="underline"></mu-icon>
        <mu-icon value="format_align_center"  class="icon" :class={center:center} @click="centerStr"></mu-icon>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        desc: '',
        text: 0,
        tag: false,
        bold: false,
        line: false,
        center: false
      }
    },
    methods: {
      goToHome() {
        this.$router.go(-1)
      },
      descInput() {
        let inp = this.desc.length
        this.text = inp
        this.show = false
        if (inp === 60) {
          this.$alert('字数不能超过60个', '提示', {
            okLabel: '知道了'
          })
        } else if (inp === 0) {
          this.show = true
        }
      },
      tagStr() {
        this.tag = !this.tag
      },
      boldStr() {
        this.bold = !this.bold
      },
      underline() {
        this.line = !this.line
      },
      centerStr() {
        this.center = !this.center
      }
    }
  }
</script>

<style scoped>
  .essay {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 5;
  }
  .essay.move-enter-active{
    transition: all 0.5s
  }
  .essay.move-enter{
    transform: translateY(100%)
  }
  .essay.move-leave-active{
    transition: all 0.5s
  }
  .essay.move-leave-to{
    transform: translateY(100%)
  }
  .top{
    margin: 10px;
    display: flex;
  }
  .left{
    flex: auto;
  }
  .title {
    position: relative;
    margin: 10px;
    overflow: hidden;
  }
  .title .tex{
    margin: 10px;
    width: 95%;
    min-height: 50px;
    max-height: 120px;
    outline: none;
    border: none;
    font-size: 18px;
  }
  .title .number{
    position: absolute;
    left: 80px;
    top: 15px;
    color: #bcbcbc;
  }
  .title .text{
    position: absolute;
    right: 15px;
    bottom: 15px;
    font-size: 12px;
  }
  .content .tex{
    margin: 10px;
    width: 95%;
    outline: none;
    border: none;
    font-size: 14px;
  }
  .content .tex.bold{
    font-size: 16px;
    font-weight: 700;
  }
  .content .tex.line{
    text-decoration: underline
  }
  .content .tex.center{
    text-align: center;
  }
  .bottom{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
    overflow: hidden;
    background: #e2e2e2;
    z-index: 5;
  }
  .bottom.active{
    position: fixed;
    left: 0;
    bottom: 50px;
    z-index: 2;
  }
  .bottom .icon{
    margin: 10px 20px 0 20px;
    font-size: 25px;
    color: #5b5b5b;
  }
  .style{
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    height: 50px;
    width: 100%;
    overflow: hidden;
    z-index: 3;
  }
  .style .icon{
    flex: 1;
    margin: 10px 10px 0 10px;
    text-align: center;
    font-size: 25px;
    color: #5b5b5b;
  }
  .style .icon.active{
    color: red;
  }
  .style .icon.line{
    color: red;
  }
  .style .icon.center{
    color: red;
  }
</style>
