import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home.vue'
import counter from '../components/counter.vue'
import todo from '../components/todo.vue'
Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/counter',
        name: 'counter',
        component: counter
      },
      {
          path: '/todo',
          name: 'todo',
          component: todo
      }
  ]
})
