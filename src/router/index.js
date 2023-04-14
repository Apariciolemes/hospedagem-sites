import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/cadastrar-usuario",
      name: "Cadastrar Usuário",
      component: () => import("@/views/Register.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login.vue"),
    },
  ],
});

export default router;
