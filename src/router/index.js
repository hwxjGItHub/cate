import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/Home.vue'
import Myview from '../components/my/Myview.vue'
import Account from '../components/account/Account.vue'
import Details from '../components/details/Details.vue'
import Search from '../components/search/Search.vue'
import Meals from '../components/meals/Meals.vue'
import LogIn from '../components/login/LogIn.vue'
import MealsDetails from '../components/meals/MealsDetails.vue'
import Classify from '../components/classify/Classify.vue'
import SearchMeals from '../components/meals/SearchMeals.vue'
import Personage from '../components/my/Personage.vue'
import Essay from '../components/theMenu/Essay.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/home', name: 'home', component: home},
    {path: '/myview', name: 'myview', component: Myview},
    {path: '/account', name: 'account', component: Account},
    {path: '/details/:id', component: Details, props: true},
    {path: '/search', name: 'search', component: Search, props: true},
    {path: '/meals', name: 'meals', component: Meals},
    {path: '/login', name: 'login', component: LogIn},
    {path: '/mealsDetails', name: 'mealsDetails', component: MealsDetails},
    {path: '/classify', name: 'classify', component: Classify},
    {path: '/searchMeals', name: 'searchMeals', component: SearchMeals, props: true},
    {path: '/personage', name: 'personage', component: Personage},
    {path: '/essay', name: 'essay', component: Essay}
  ]
})

export default router
