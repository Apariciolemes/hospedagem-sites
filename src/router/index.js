import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { requiresAuth: true },
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/cadastrar-usuario/:id",
      name: "Cadastrar Usuário",
      component: () => import("@/views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/planos-de-hospedagem",
      name: "Planos de Hospedagem",
      component: () => import("@/views/HostingPlans/HostingPlansView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = localStorage.getItem("token");
    if (!token) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }, // Armazena a rota que o usuário tentou acessar
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
