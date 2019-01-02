/**
 * Created by 戴小俊 on 2018/11/20.
 */
import * as types from './mutation-types'
import axios from 'axios'

export default {
  async homeData({commit}, axios) { // 请求recommend数据
    let result = await axios.get('/api/result')
    result = result.data.data
    commit(types.RECEVIVE_DATA, result)
    // console.log(result)
  },
  async getData({commit}, tag) {
    if (tag === undefined) {
      return
    }
    let result = await axios.get(`/api&menu=${tag}`)
    result = result.data.result.data
    commit(types.RECEVIVE_MENU, result)
  }

}
