<template>
  <div class="classify">
    <div class="header">
      <i class="icon-arrow_lift" @click="togo"></i>
      <span>菜谱分类</span>
    </div>
    <div class="inp">
      <div class="import" @click="goBack">
        <i class="icon-uniE906"></i>
        <span class="text">收菜谱 如：糖醋排骨 或 鸡蛋</span>
      </div>
    </div>
    <div class="banner">
      <div class="left">
        <mu-tabs :value.sync="active" indicator-color="#ccc" class="left_set">
          <mu-tab :class="{set: active === 0}">热门</mu-tab>
          <mu-tab :class="{set: active === 1}">肉类</mu-tab>
          <mu-tab :class="{set: active === 2}">蛋类</mu-tab>
          <mu-tab :class="{set: active === 3}">水产</mu-tab>
          <mu-tab :class="{set: active === 4}">鱼类</mu-tab>
          <mu-tab :class="{set: active === 5}">蔬菜</mu-tab>
          <mu-tab :class="{set: active === 6}">豆类</mu-tab>
          <mu-tab :class="{set: active === 7}">五谷杂粮</mu-tab>
          <mu-tab :class="{set: active === 8}">药食</mu-tab>
        </mu-tabs>
      </div>
      <div class="right" ref="right">
        <div>
          <div class="right_cat">
            <div class="demo-text" v-if="active === 0">
              <div class="hot" v-for="(item, index) in sort.hot" :key="index" @click="searchClick(index)">{{item}}</div>
            </div>
            <div class="demo-text" v-if="active === 1">
              <div class="demo_ent"><span></span> 猪肉 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.meat.pork" :key="index" @click="searchMeat(index)">{{item}}</div>
              <div class="demo_ent"><span></span> 牛肉 <span></span></div>
              <div class="hot" v-for="(item1, index) in sort.meat.beef" :key="index+14" @click="searchBeef(index)">{{item1}}</div>
              <div class="demo_ent"><span></span> 鸡肉 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.meat.chicken" :key="index+23" @click="searchChicken(index)">{{item}}</div>
              <div class="demo_ent"><span></span> 鸭肉 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.meat.duck" :key="index+33" @click="searchDuck(index)">{{item}}</div>
              <div class="demo_ent"><span></span> 其他 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.meat.rest" :key="index+43" @click="searchRest(index)">{{item}}</div>
            </div>
            <div class="demo-text" v-if="active === 2">
              <div class="hot" v-for="(item, index) in sort.egg" :key="index" @click="searchEgg(index)">{{item}}</div>
            </div>
            <div class="demo-text" v-if="active === 3">
              <div class="demo_ent"><span></span> 虾 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.product.prawn" :key="index" @click="searchPrawn(index)">{{item}}</div>
              <div class="demo_ent"><span></span> 蟹 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.product.crad" :key="index+11" @click="searchCrad(index)">{{item}}</div>
              <div class="demo_ent"><span></span> 贝 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.product.cowry" :key="index+16" @click="searchCowry(index)">{{item}}</div>
              <div class="demo_ent"><span></span> 其他 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.product.rest" :key="index+30" @click="productRest(index)">{{item}}</div>
            </div>
            <div class="demo-text" v-if="active === 4">
              <div class="hot" v-for="(item, index) in sort.fish" :key="index" @click="fish(index)">{{item}}</div>
            </div>
            <div class="demo-text" v-if="active === 5">
              <div class="demo_ent"><span></span> 茎叶花类 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.vegetables.stem" :key="index" @click="stem(index)">{{item}}</div>
              <div class="demo_ent"><span></span> 根叶类 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.vegetables.rhizome" :key="index+20" @click="rhizome(index)">{{item}}</div>
              <div class="demo_ent"><span></span> 瓜果类 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.vegetables.melon" :key="index+40" @click="melon(index)">{{item}}</div>
              <div class="demo_ent"><span></span> 其他 <span></span></div>
              <div class="hot" v-for="(item, index) in sort.vegetables.set" :key="index+60" @click="set(index)">{{item}}</div>
            </div>
            <div class="demo-text" v-if="active === 6">
              <div class="hot" v-for="(item, index) in sort.bans" :key="index" @click="bans(index)">{{item}}</div>
            </div>
            <div class="demo-text" v-if="active === 7">
              <div class="hot" v-for="(item, index) in sort.grains" :key="index" @click="grains(index)">{{item}}</div>
            </div>
            <div class="demo-text" v-if="active === 8">
              <div class="hot" v-for="(item, index) in sort.drug" :key="index" @click="drug(index)">{{item}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState, mapMutations} from 'vuex'
  import {CLASSIFY_SHOW} from '../../store/mutation-types'
  export default {
    created() {
      this.$nextTick(() => {
        this.rightScroll = new BScroll(this.$refs.right, {
          click: true
        })
      })
    },
    data() {
      return {
        active: 0
      }
    },
    computed: {
      ...mapState({
        sort: state => state.sort
      })
    },
    methods: {
      ...mapMutations({classify: CLASSIFY_SHOW}),
      goBack() {
        this.$router.push({path: `/search`})
      },
      togo() {
        this.classify(false)
      },
      searchClick(index) {
        let arr = ''
        arr = this.sort.hot[index]
        this.$router.push({name: 'search', params: {arr: arr}})
      },
      searchMeat(index) {
        let arr = ''
        arr = this.sort.meat.pork[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      searchBeef(index) {
        let arr = ''
        arr = this.sort.meat.beef[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      searchChicken(index) {
        let arr = ''
        arr = this.sort.meat.chicken[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      searchDuck(index) {
        let arr = ''
        arr = this.sort.meat.duck[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      searchRest(index) {
        let arr = ''
        arr = this.sort.meat.rest[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      searchEgg(index) {
        let arr = ''
        arr = this.sort.egg[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      searchPrawn(index) {
        let arr = ''
        arr = this.sort.product.prawn[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      searchCrad(index) {
        let arr = ''
        arr = this.sort.product.crad[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      searchCowry(index) {
        let arr = ''
        arr = this.sort.product.cowry[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      productRest(index) {
        let arr = ''
        arr = this.sort.product.rest[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      fish(index) {
        let arr = ''
        arr = this.sort.fish[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      stem(index) {
        let arr = ''
        arr = this.sort.vegetables.stem[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      rhizome(index) {
        let arr = ''
        arr = this.sort.vegetables.rhizome[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      melon(index) {
        let arr = ''
        arr = this.sort.vegetables.melon[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      set(index) {
        let arr = ''
        arr = this.sort.vegetables.set[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      bans(index) {
        let arr = ''
        arr = this.sort.bans[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      grains(index) {
        let arr = ''
        arr = this.sort.grains[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      },
      drug(index) {
        let arr = ''
        arr = this.sort.drug[index]
        this.$router.push({name: `search`, params: {arr: arr}})
      }
    }
  }
</script>

<style scoped>
  .classify{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 2;
  }
  .header{
    margin: 15px;
    text-align: center;
  }
  .header .icon-arrow_lift{
    float: left;
  }
  .header>span{
    font-size: 16px;
  }
  .inp{
    width: 100%;
    padding: 5px 0;
    background: #e3e3e3;
  }
  .inp .import{
    padding: 5px;
    margin: 10px;
    height: 25px;
    background: white;
    border-radius: 25px;
    color: #aaaaaa;
  }
  .inp .import .icon-uniE906{
    padding-left: 70px;
    font-size: 20px;
  }
  .inp .import .text{
    vertical-align: top;
  }
  .banner{
    display: flex;
    width: 100%;
  }
  .left{
    flex: 0 0 100px;
    width: 100px;
    height: 100%;
  }
  .left .left_set{
    display: block;
    background: #dfdfdf;
    color: #000;
  }
  .left .left_set .set{
    background: white;
    border-left: 1px solid red;
    color: red;
  }
  .right{
    position: absolute;
    left: 100px;
    top: 110px;
    bottom: 0;
    flex: 1;
    margin: 10px;
    overflow: hidden;
  }
  .right .demo-text{
  }
  .right .demo-text .demo_ent{
    margin: 10px 10px;
    text-align: center;
    color: #ad0000;
  }
  .right .demo-text .demo_ent>span{
    display: inline-block;
    width: 65px;
    vertical-align: middle;
    border-bottom: 1px solid #ad0000;
  }
  .right .demo-text .hot{
    display: inline-block;
    padding: 4px 6px;
    margin: 10px 10px 5px 10px;
    text-align: center;
    width: 60px;
    color: #828282;
    border: 1px solid #c2c2c2;
    border-radius: 20px;
  }
</style>
