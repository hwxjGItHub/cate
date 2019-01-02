<template>
  <div id="app">
    <router-view/>
    <div class="tabber">
      <!-- 底部栏-->
      <tab-bottom></tab-bottom>
      <!-- 菜谱分类-->
      <Classify v-if="classifyIf"></Classify>
      <!-- 设置页面-->
      <Setting v-if="SettingIf"></Setting>
      <!-- 发菜谱的页面-->
      <Menu v-if="menuIf"></Menu>
      <!-- 发菜谱的调整步骤页面-->
      <AddStep v-if="addStep"></AddStep>
      <!--消息页面-->
      <Message v-if="message"></Message>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TabBottom from './components/tabBottom/TabBottom'
import Classify from './components/classify/Classify'
import Setting from './components/setting/Setting'
import Menu from './components/theMenu/Menu.vue'
import AddStep from './components/theMenu/AddStep.vue'
import Message from './components/message/Message.vue'

export default {
  name: 'App',
  computed: mapState({
    searchIf: 'search',
    classifyIf: 'classify',
    SettingIf: 'setting',
    menuIf: 'menu',
    addStep: 'addStep',
    message: 'message'
  }),
  components: {
    TabBottom,
    Classify,
    Setting,
    Menu,
    AddStep,
    Message
//    SearchMeals
  }
}
</script>

<style>
  .tabber{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
