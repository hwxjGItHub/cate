/**
 * Created by 戴小俊 on 2018/11/20.
 */
import * as types from './mutation-types'

export default {
  [types.RECEVIVE_DATA](state, result) { // 请求加数据
    state.result = result
  },
  [types.RECEVIVE_MENU](state, val) { // 请求加数据
    state.cookbook = val
  },
  [types.CLASSIFY_GET](state, val) { // 菜谱详情页面
    state.calssIfy = val
  },
  [types.CLASSIFY_SHOW](state, val) { // 显示隐藏菜谱分类页面
    state.classify = val
  },
  [types.DETAILS_MELAS](state, val) { // 三餐详情页面
    state.melas = val
  },
  [types.SETTING_IF](state, val) { // 设置页面
    state.setting = val
  },
  [types.SETTING_GO](state, val) { // 登录后的头像显示
    state.settingGo = val
  },
  [types.SEARCH_HOT](state, val) { // 热搜
    state.hot = val
  },
  [types.THE_MENU](state, menu) { // 发菜谱页面
    state.menu = menu
  },
  [types.ADDSTEP_IF](state, step) { // 发菜谱调整步骤页面
    state.addStep = step
  },
  [types.ADDSTEP_ONE](state) { // 添加步骤
    state.step++
  },
  [types.DECSTEP_TWO](state) { // 删除步骤
    state.step--
  },
  [types.SHOW_SHARE](state, show) { // 个人信息的分享页面
    state.show = show
  },
  [types.MESSAGE_SHOW](state, show) { // 消息页面
    state.message = show
  }
}
