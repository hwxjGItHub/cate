<template>
  <div class="search">
    <div class="header">
      <i class="icon--1" id="btn" @click="set"></i>
      <input type="text" placeholder="收搜你想要的菜谱" id="inp" v-model="data">
      <span class="cancal" @click="goBack">取消</span>
    </div>
    <div class="menus" ref="menu">
      <div>
        <div class="content" v-if="hot">
          <div class="hot">热搜：</div>
          <div class="category" v-for="(item,index) in arry" :key="index" ref="categpry" @click="searckClick(index)">{{item}}</div>
        </div>
        <div class="menu" v-if="cook">
          <div class="cuisine" v-for="(data,index) in cookbook" :key="index" @click="goMeals(index)" ref="cuisine">
            <img :src="data.albums" class="icon">
            <div class="name">
              <div style="width:90%">{{data.title}}</div>
              <div class="dosing">{{data.burden}}</div>
              <div class="dish">{{data.tags}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapState, mapMutations} from 'vuex'
  import BScroll from 'better-scroll'
  import {CLASSIFY_GET} from '../../store/mutation-types'
  export default {
    props: {
      arr: String,
      txt: String,
      required: true
    },
    created() {
//        this.searckClick()
      this.classIfy()
      this.text()
    },
    mounted() {
      this.$nextTick(() => {
        if (this.menuScroll) {
          this.menuScroll.refresh()
        } else {
          this.menuScroll = new BScroll(this.$refs.menu, {
            click: true
          })
        }
      })
    },
    data() {
      return {
        search: true,
        data: '',
        cook: false,
        loading1: false
      }
    },
    computed: {
      ...mapState({
        arry: 'arry',
        hot: 'hot',
        cookbook: 'cookbook'
      })
    },
    methods: {
      ...mapMutations({
        calssType: CLASSIFY_GET
      }),
      goBack() {
        this.$router.go(-1)
      },
      set() {
        if (this.data === '') {
          this.$alert('你还没有输入你想要菜呢', '提示', {
            okLabel: 'OK'
          })
        } else {
          this.$store.dispatch('getData', this.data)
          this.cook = true
        }
      },
      goMeals(index) {
        let arr = this.cookbook[index]
        this.calssType(arr)
        this.$router.push({path: '/searchMeals'})
      },
      searckClick(index) {
        this.data = this.arry[index]
        this.$store.dispatch('getData', this.data)
        this.cook = true
      },
      classIfy() {
        this.data = this.arr
        this.cook = true
        this.$store.dispatch('getData', this.data)
      },
      text() {
        this.data = this.txt
        this.cook = true
        this.$store.dispatch('getData', this.data)
      }
    }
  }
</script>

<style scoped>
  .search {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 2;
  }

  .header {
    position: relative;
    display: flex;
    margin: 10px 15px;
    width: 100%;
    overflow: hidden;
  }

  .header .icon--1 {
    position: absolute;
    left: 4px;
    top: 8px;
    font-size: 16px;
  }

  .header input {
    flex: 1;
    height: 30px;
    border-radius: 30px;
    padding-left: 25px;
    outline: none;
    border: none;
    background: rgba(220, 220, 220, 0.83);
  }

  .header .cancal {
    flex: 0 0 50px;
    margin: 0 10px;
    width: 50px;
    line-height: 30px;
    color: red
  }

  .menus {
    position: absolute;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }

  .content {
    margin: 10px;
    font-size: 14px;
    color: rgba(105, 105, 105, 0.83);
  }

  .content .category {
    display: inline-block;
    margin: 10px 5px 0 5px;
    padding: 10px;
    border-radius: 4px;
    background: rgba(220, 220, 220, 0.83);
  }

  .menu {
    margin: 10px;
    overflow: hidden;
  }

  .menu .cuisine {
    display: flex;
    margin: 15px 10px;
    width: 100%;
  }

  .menu .cuisine .icon {
    flex: 0 0 160px;
    width: 160px;
    height: 120px;
    border-radius: 6px;
  }

  .menu .cuisine .name {
    flex: auto;
    margin-left: 10px;
    width: 80%;
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
  }

  .menu .cuisine .name .dosing {
    margin: 10px 0;
    width: 160px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: 200;
    color: #646464;
  }

  .menu .cuisine .dish {
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    width: 160px;
    font-size: 13px;
    font-weight: 200;
    color: #646464;
    overflow: hidden;
  }
</style>
