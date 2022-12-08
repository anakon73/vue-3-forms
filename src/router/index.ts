import { createRouter, createWebHashHistory } from 'vue-router'
import SimpleForm from '@/view/SimpleForm.vue'

const routes = [
  {
    path: '/',
    name: 'SimpleForm',
    component: SimpleForm,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
