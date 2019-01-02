/**
 * Created by 戴小俊 on 2018/11/16.
 */
import 'muse-ui/lib/styles/base.less'
import {AppBar, Avatar, Button, BottomNav, Carousel, Divider, Form, Icon, TextField, Select, Snackbar, Popover, Dialog, List, Tabs} from 'muse-ui'

const components = [AppBar, Avatar, Button, BottomNav, Carousel, Divider, Form, Icon, TextField, Select, Snackbar, Popover, Dialog, List, Tabs]

export default {
  install(Vue) {
    components.forEach(c => Vue.use(c))
  }
}
