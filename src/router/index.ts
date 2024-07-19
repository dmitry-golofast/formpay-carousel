import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

export enum RouteName {
  PayForm = 'PayForm',
  Carousel = 'Carousel',
}

const routes: Array<RouteRecordRaw> = [
  {
    name: RouteName.PayForm,
    path: '/',
    component: () => import('../views/PayForm'),
  },
  {
    name: RouteName.Carousel,
    path: '/carousel',
    component: () => import('../views/Carousel'),
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
