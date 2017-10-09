import VueRouter from 'vue-router'

import Main from './components/main'
import Home from './components/home'
import Feed from './components/feed'
import NewFeed from './components/new-feed'

const routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/feeds/new',
        name: 'new-feed',
        component: NewFeed
      },
      {
        path: '/feeds/:feedId',
        name: 'feed',
        component: Feed
      }
    ]
  }
]

export default new VueRouter({ routes })