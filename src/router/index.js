import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LiveView from "@/views/LiveView";
import LookUpView from "@/views/LookUpView";
import DetailsView from "@/views/DetailsView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/live-view',
    name: 'live-view',
    component: LiveView
  },
  {
    path: '/lookup-view',
    name: 'lookup-view',
    component: LookUpView
  },
  {
    path: '/details-view',
    name: 'details-view',
    component: DetailsView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
