import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListingPage from '@/views/ListingPage.vue'
import AddListing from '@/views/AddListing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/listing/:id',
      name: 'listing',
      component: ListingPage,
    },
    {
      path: '/addlisting',
      name: 'addlisting',
      component: AddListing,
    },
  ],
})

export default router
