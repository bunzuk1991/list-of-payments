import Vue from 'vue'
import Router from 'vue-router'
import DownloadHistory from './views/DownloadHistory'
import AppOrgList from './views/organisations/AppOrgList'
import Addresses from './components/addresses'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'history',
      path: '/history',
      component: DownloadHistory
    },
    {
      name: 'organisations',
      path: '/organisations',
      component: AppOrgList
    },
    {
      name: 'home',
      path: '/',
      component: Addresses
    }
  ]
})
