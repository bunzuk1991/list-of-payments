import Vue from 'vue'
import Router from 'vue-router'
import DownloadHistory from './views/DownloadHistory'
import UserList from './views/UserList'
import AppOrgList from './views/organisations/AppOrgList'

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
    }
  ]
})
