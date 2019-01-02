<template>
  <transition name="move">
    <div class="add">
      <div class="top" @click="cancel">
        <span @click="addStep_If(false)">保存</span>
        <div class="txt">调整步骤</div>
      </div>
      <div class="content" ref="content">
        <div>
          <div class="method ">
            <div class="text">步骤做法 <span>（至少三步）</span></div>
          </div>
          <div class="detail" v-for="(item,index) in step" :key="index">
            <p  @click="cancel">{{index+1}}</p>
            <div class="one" @click="onRight(index)"> - </div>
            <div class="set">
              <div class="img" @click="cancel">
                <mu-icon value="local_see" color="#ccc" class="icon"></mu-icon>
                <div class="txt">添加步骤图</div>
              </div>
            </div>
            <div class="delete" :class="{remove:index === removeId}" @click="deleteStep(index)">删除</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState, mapMutations} from 'vuex'
  import {ADDSTEP_IF, ADDSTEP_ONE, DECSTEP_TWO} from '../../store/mutation-types'
  export default {
    mounted() {
      this.$nextTick(() => {
        this.contentScroll = new BScroll(this.$refs.content, {
          click: true
        })
      })
    },
    data() {
      return {
        removeId: null
      }
    },
    computed: ({
      ...mapState({step: 'step'})
    }),
    methods: {
      ...mapMutations({
        addStep_If: ADDSTEP_IF,
        stepAdd: ADDSTEP_ONE,
        dec: DECSTEP_TWO
      }),
      onRight(index) {
        this.removeId = index
      },
      cancel() {
        this.removeId = null
      },
      deleteStep(index) {
        if (this.removeId === index) {
          this.dec()
        }
      }
    }
  }
</script>

<style scoped>
  .add {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: white;
    width: 100%;
    overflow: hidden;
  }
  .add.move-enter-active{
    transition: all 0.5s
  }
  .add.move-enter{
    transform: translateX(100%)
  }
  .add.move-leave-active{
    transition: all 0.5s
  }
  .add.move-leave-to{
    transform: translateX(100%)
  }
  .top{
    display: flex;
    margin: 10px;
    height: 30px;
    line-height: 30px;
  }
  .top span{
    flex: 0 0 40px;
    color: red;
  }
  .top .txt{
    flex: 1;
    padding-right: 10px;
    text-align: center;
  }
  .content{
    position: absolute;
    left: 0;
    top: 50px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    padding: 10px;
    background: rgba(228, 244, 231, 0.79);
  }
  .content .method .text>span{
    font-size: 14px;
    color: #ccc;
  }
  .content .detail{
    position: relative;
    margin: 20px;
  }
  .content .detail .one{
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    line-height: 15px;
    background: red;
    text-align: center;
    color: white;
    font-size: 35px;
    border-radius: 50%;
  }
  .content .detail .set{
    display: inline-block;
    margin-left: 50px;
    width: 90%;
  }
  .content .detail .set .img{
    background: white;
    width: 50%;
    text-align: center;
    font-size: 14px;
    color: #a5a5a5;
  }
  .content .detail .set .img .icon{
    margin-top: 15px;
    font-size: 45px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
  .content .delete{
    position: absolute;
    top: 0;
    right: -90px;
    width: 60px;
    height: 134px;
    line-height: 134px;
    background: red;
    text-align: center;
    color: #fff;
    transition: all 0.5s linear;
    transform: translateX(0);
  }
  .content .delete.remove {
    transition: all 0.5s linear;
    transform: translateX(-60px);
  }
</style>
