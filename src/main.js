import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Navigation from '@components/Navigation'
// import { Button } from 'ant-design-vue'
// Vue.component(Button.name, Button)
import {
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col
} from 'element-ui'

Vue.component(Input.name, Input)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
