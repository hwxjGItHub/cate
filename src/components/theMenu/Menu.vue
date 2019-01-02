<template>
  <div class="menu">
    <div class="top">
      <div class="exit" @click="theMenu(false)">关闭</div>
      <div class="center">传菜谱</div>
      <div class="draft">存草稿</div>
    </div>
    <div class="banner" ref="banner">
      <div>
        <div class="photograph">
          <mu-icon value="local_see" color="#ccc" class="icon"></mu-icon>
          <div class="txt">添加菜谱效果图（必填）</div>
        </div>
        <div class="center">
          <div class="name">菜谱名 <span style="color:#ccc">（必填）</span></div>
          <input type="text" class="inp">
          <div class="name">心得</div>
          <input type="text" class="inp">
          <div class="name">菜谱名 <span style="color:#ccc">（至少一项）</span></div>
          <div class="main">
            <table>
              <tr>
                <th>主料名称</th>
                <th>用量</th>
              </tr>
              <tr v-for="(item,index) in stu" :key="index">
                <td><input type="text" placeholder="如：土豆"></td>
                <td><input type="text" placeholder="如：1个"></td>
              </tr>
            </table>
          </div>
          <div class="add">
            <p class="addCat" @click="addCount"><span>+</span> 添加主料</p>
          </div>
          <div class="main">
            <div class="name">辅料</div>
            <table>
              <tr>
                <th>主料名称</th>
                <th>用量</th>
              </tr>
              <tr v-for="(item,index) in std" :key="index">
                <td><input type="text" placeholder="如：盐"></td>
                <td><input type="text" placeholder="如：10克"></td>
              </tr>
            </table>
          </div>
          <div class="add">
            <p class="addCat" @click="addTed"><span>+</span> 添加辅料</p>
          </div>
        </div>
        <div class="modus">
          <div class="step">
            <div class="setp_set">步骤做法 <span style="color:#ccc">（至少3步）</span></div>
            <div class="addCount">批量添加步骤图</div>
          </div>
          <div class="modus_one" v-for="(data,index) in step" :key="index">
            <div class="put">{{index+1}} <input type="text" placeholder="不需要填写步骤序号1、2、3..."></div>
            <div class="one">
              <div class="img">
                <mu-icon value="local_see" color="#ccc" class="icon"></mu-icon>
                <div class="txt">添加步骤图</div>
              </div>
            </div>
          </div>
          <div class="set">
            <div @click="setpAdd" class="box">添加步骤</div>
            <div class="box" @click="addStep_If(true)">调整步骤</div>
          </div>
          <div class="post">烹饪小技巧</div>
          <div class="min"><input type="text"></div>
          <div class="eact">其他</div>
        </div>
        <div style="margin:0 10px">
          <span>准备时间:</span>
          <mu-select v-model="form.select">
            <mu-option v-for="(option,index) in options" :key="index" :label="option" :value="option" popover="13"></mu-option>
          </mu-select>
        </div>
        <div style="margin:0 10px">
          <span>烹饪时间:</span>
          <mu-select v-model="form.item">
            <mu-option v-for="(item,index) in option" :key="index" :label="item" :value="item"></mu-option>
          </mu-select>
        </div>
        <div>
          <span style="margin:0 10px">口味:</span>
          <mu-select v-model="form.taset">
            <mu-option v-for="(item,index) in taset" :key="index" :label="item" :value="item"></mu-option>
          </mu-select>
        </div>
        <div>
          <span style="margin:0 10px">难度:</span>
          <mu-select v-model="form.difficulty">
            <mu-option v-for="(item,index) in difficulty" :key="index" :label="item" :value="item"></mu-option>
          </mu-select>
        </div>
        <div style="margin:0 10px">
          <span>独家上传:</span>
          <mu-select v-model="form.sole">
            <mu-option v-for="(item,index) in sole" :key="index" :label="item" :value="item"></mu-option>
          </mu-select>
        </div>
        <div class="notice">
          <div>注：独家上传表示此菜谱只在哈友上传，审核未优质菜谱后课额外获得积分，如有不实直接封号</div>
          <div class="consent">
            <input type="checkbox" checked="true">
            <span>同意原创发布协议></span>
          </div>
          <div class="issue">立即发布</div>
        </div>
        <div class="delete">
          <div>删除这个草稿</div>
          <div class="draft">草稿箱（0）</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState, mapMutations} from 'vuex'
  import {THE_MENU, ADDSTEP_IF, ADDSTEP_ONE} from '../../store/mutation-types'
  export default {
    data() {
      return {
        options: [
          '15分钟以内', '15~30分钟', '30~60分钟', '1小时~1天',
          '一天以上'
        ],
        option: [
          '15分钟以内', '15~30分钟', '30~60分钟', '1小时~1天',
          '一天以上'
        ],
        taset: [
          '咸县', '酸甜', '鱼香', '家常',
          '五香', '酸辣', '香辣', '孜然'
        ],
        difficulty: ['简单', '普通', '高级'],
        sole: ['是', '否'],
        form: {
          select: '',
          item: '',
          taset: '',
          difficulty: '',
          sole: ''
        },
        stu: 1,
        std: 1
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.bannerScroll = new BScroll(this.$refs.banner, {
          click: true
        })
      })
    },
    computed: ({
      ...mapState({step: 'step'})
    }),
    methods: {
      ...mapMutations({
        theMenu: THE_MENU,
        addStep_If: ADDSTEP_IF,
        stepAdd: ADDSTEP_ONE
      }),
      addCount() {
        this.stu += 1
      },
      addTed() {
        this.std += 1
      },
      setpAdd() {
        this.stepAdd()
      }
    }
  }
</script>

<style scoped>
  .menu {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: white;
    width: 100%;
    overflow: hidden;
  }
  .top {
    margin: 10px 15px;
    display: flex;
    height: 30px;
    line-height: 30px;
  }
  .top .exit{
    flex: 0 0 30px;
  }
  .top .center{
    flex: 1;
    text-align: center;
  }
  .top .draft{
    flex: 0 0 50px;
  }
  .banner{
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }
  .photograph{
    margin: 30px 10px;
    padding: 30px 0;
    text-align: center;
  }
  .photograph .icon{
    padding: 10px;
    font-size: 50px;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
  .photograph .txt{
    font-size: 12px;
    color: #afafaf;
  }
  .center{}
  .center .name{
    padding-left: 15px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: rgb(220, 242, 227);
  }
  .center .inp{
    padding: 5px 5px 5px 15px;
    outline: none;
    border: none;
  }
  .center .main{}
  .center .main table{
    width: 100%;
    height: 30px;
    line-height: 30px;
  }
  .center .main table th{
    width: 50%;
    text-align: center;
    border: 1px solid #c2c2c2;
  }
  .center .main table td{
    width: 50%;
    border: 1px solid #c2c2c2;
  }
  .center .main table td>input{
    text-align: center;
    width: 100%;
    outline: none;
    border: none;
    color: #a5a5a5;
  }
  .center .add{
    height: 40px;
    line-height: 40px;
    background: rgb(220, 242, 227);
  }
  .center .add .addCat{
    padding-left: 15px;
    color: red;
  }
  .center .add .addCat>span{
    padding: 0 3px;
    border: 1px solid red;
    border-radius: 50%;
  }
  .modus{
    padding: 10px 0;
    background: rgb(220, 242, 227);
  }
  .modus .step{
    display: flex;
    margin-left: 15px;
    background: rgb(220, 242, 227);
  }
  .modus .step .setp_set{
    flex: 1;
  }
  .modus .step .addCount{
    flex: 0 0 110px;
    margin-right: 10px;
    padding: 3px;
    width: 110px;
    background: red;
    color: white;
    border-radius: 4px;
  }
  .modus .modus_one{
    margin: 10px 0;
    width: 100%;
    background: rgb(220, 242, 227);
  }
  .modus .modus_one .put{
    margin: 0;
    padding: 5px 10px;
    width: 100%;
    border-top: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
    background: white;
  }
  .modus .modus_one .put>input{
    width: 90%;
    outline: none;
    border: none;
  }
  .modus .modus_one .one{
    padding: 10px;
    background: rgb(220, 242, 227);
  }
  .modus .modus_one .one .img{
    background: white;
    width: 50%;
    text-align: center;
    font-size: 14px;
    color: #a5a5a5;
  }
  .modus .modus_one .one .img .icon{
    margin-top: 15px;
    font-size: 45px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
  .modus .set{
    display: flex;
    padding: 20px 0;
    text-align: center;
    background: rgb(220, 242, 227);
    overflow: hidden;
  }
  .modus .set .box{
    flex: auto;
    padding: 4px 0;
    margin: 0 20px;
    background: #ccc;
    border-radius: 4px;
  }
  .modus .post{
    padding: 10px;
    background: rgb(220, 242, 227);
  }
  .modus .min{
    width: 100%;
  }
  .modus .min>input{
    padding-left: 15px;
    width: 100%;
    height: 35px;
    border: none;
    outline: none;
  }
  .modus .eact{
    padding: 10px 15px;
    width: 100%;
    background: rgb(220, 242, 227);
  }
  .mu-input{
    width: 82%;
    font-size: 14px;
    padding-bottom: 0;
  }
  .mu-option{
    display: inline-block;
  }
  .mu-select-input{
    padding-left: 200px;
  }
  .notice{
    margin: 10px 10px;
    font-size: 14px;
    color: #929292;
  }
  .notice .consent{
    margin-top: 15px;
  }
  .notice .issue{
    margin: 15px 10px;
    padding: 5px;
    color: white;
    background: red;
    border-radius: 4px;
    text-align: center;
  }
  .delete{
    padding: 10px;
    text-align: center;
    color: #929292;
  }
  .delete .draft{
    margin: 10px;
    color: red;
  }
</style>
