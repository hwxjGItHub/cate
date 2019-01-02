<template>
  <div class="account">
    <div class="top">上传菜谱</div>
    <div class="cont">
      <textarea class="tex" placeholder="说点什么..." rows="3" maxlength="50" v-model="desc" @input="descInput"></textarea>
      <div class="add">
        <div id="img-group">
          <div class="img-item" v-for="(item,index) in imgArr" :key="index">
            <img :src="item.src" alt="">
          </div>
        </div>
        <div class="add-pic" @click="addPic()" v-show="picFlag">+
          <input name="files" class="inp" type="file" accept="image/*" multiplez/>
        </div>
      </div>
    </div>
    <mu-divider></mu-divider>
    <div class="position">
      <mu-icon value="person_pin_circle" color="#6ec0ff" class="icon"></mu-icon>
      <p>定位</p>
    </div>
    <mu-divider></mu-divider>
    <div class="addCat">
      <div class="add">
        <i class="icon-spinner2" :class={active:show}></i>
        <p v-for="(add,index) in add" :key="index" :class={active:show}>
          {{add}}
        </p>
        <i class="icon-close" v-if="show" @click="deleteAdd"></i>
      </div>
      <div class="topic" v-for="(item,index) in topic" :key="index" @click="cat(index)">{{item}}</div>
      <div class="more">更多话题></div>
      <div class="issue" @click="clickSkip">发布</div>
    </div>
    <div class="wrap" v-if="toast">你没有输入文本</div>
    <div class="wrap" v-if="img">你还没有添加图片</div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        add: ['添加话题'],
        show: false,
        topic: ['食物造型', '冬日暖心汤', '玩儿转“土豆”', '我的拿手菜', '我的早餐', '一起“玩”豆腐', '我的烘焙日记'],
        text: 0,
        desc: '',
        imgArr: [],
        picFlag: true,
        toast: false,
        img: false
      }
    },
    computed: {
      ...mapState({
        settingGo: 'settingGo'
      })
    },
    methods: {
      cat(index) {
        let arr = ''
        arr = this.topic[index]
        this.show = true
        this.add = arr
      },
      deleteAdd() {
        this.add = '添加话题'
        this.show = false
      },
      clickSkip() {
        if (this.settingGo !== true) {
          this.$router.push('/login')
        } else {
          this.testStr()
        }
      },
      descInput() {
        let inp = this.desc.length
        this.text = inp
        if (inp === 50) {
          this.$alert('字数不能超过50个', '提示', {
            okLabel: '知道了'
          })
        }
      },
      testStr() {
        let inp = this.desc.length
        this.text = inp
        let vm = this
        if (inp === 0) {
          this.toast = true
          setTimeout(() => {
            this.toast = false
          }, 2000)
        } else if (vm.imgArr.length === 0) {
          this.img = true
          setTimeout(() => {
            this.img = false
          }, 2000)
        } else {
          console.log('上传成功')
        }
      },
      addPic() {
        let vm = this
        let input = $('.inp')
        input.unbind('change').on('change', function () {
          let files = input[0].files
          if (files.length === 4) {
            vm.picFlag = false
          }
          for (let i = 0; i < files.length; i++) {
            let reader = new FileReader()
            reader.readAsDataURL(files[i])
            reader.onload = function () {
              if (vm.imgArr.length < 4) {
                vm.imgArr.push({src: this.result})
              }
              if (vm.imgArr.length === 4) {
                vm.picFlag = false
              }
              if (vm.imgArr.length > 4) {
                this.$alert('上传的照片不能超过4张', '提示', {
                  okLabel: '知道了'
                })
                vm.picFlag = false
              }
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .account {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .top {
    margin: 10px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .cont {
    margin: 10px;
    width: 100%;
    overflow: hidden;
  }
  .cont .tex{
    margin: 10px;
    width: 90%;
    height: 70px;
    outline: none;
    border: none;
  }
  .cont .add{
    margin-bottom: 10px;
  }
  .add .img-item{
    width: 82px;
    height: 82px;
    float: left;
  }
  .img-item img {
    width: 100%;
    height: 100%;
  }
  .add-pic {
    position: relative;
    margin-left: 15px;
    margin-top: 5px;
    width: 80px;
    height: 80px;
    float: left;
    text-align: center;
    font-size: 40px;
    line-height: 80px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #ccc;
  }
  .cont .add .inp{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
  }
  .position, .addCat .add{
    padding: 10px;
    display: flex;
  }
  .position>.icon{
    flex: 0 0 30px;
  }
  .addCat{
    position: relative;
  }
  .addCat .add>.icon-spinner2{
    flex: 0 0 25px;
    line-height: 25px;
  }
  .addCat p{
    color: #a1a1a1;
  }
  .addCat p.active, .addCat .add>.icon-spinner2.active{
    color: #ffa439;
  }
  .addCat .add .icon-close{
    position: absolute;
    right: 20px;
    top: 15px;
  }
  .addCat .topic{
    margin: 10px;
    display: inline-block;
    padding: 2px 4px;
    background: #dcdcdc;
    color: #a1a1a1;
    border-radius: 4px;
  }
  .addCat .more{
    padding: 10px;
    text-align: center;
    color: #a1a1a1;
  }
  .issue{
    margin: 20px auto;
    width: 85%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    background: red;
    border-radius: 4px;
  }
  .wrap{
    position: fixed;
    left: 50%;
    top:50%;
    background: rgba(0,0,0,.35);
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    color:#fff;
  }
</style>
