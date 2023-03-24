import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/contacts/",
    name: "contact.create",
    component: () => import("@/views/ContactCreate.vue"),
  },
  {
    path: "/users/login",
    name: "contact.login",
    component: () => import("@/views/ContactLogin.vue"),
  },
  {
    path: "/users/register",
    name: "contact.register",
    component: () => import("@/views/UserCreate.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
