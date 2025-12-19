import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
import CreateTask from "./components/tasks/CreateTask.vue";
import NewTasks from "./components/tasks/NewTasks.vue";
import ProgressTask from "./components/tasks/ProgressTask.vue";
import CompletedTasks from "./components/tasks/CompletedTasks.vue";
import CanceledTasks from "./components/tasks/CanceledTasks.vue";
import EditTask from "./components/tasks/EditTask.vue";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login"
  },
  {
    path: "/register",
    component: RegistrationPage,
    name: "register"
  },
  {
    path: "/dashboard",
    component: DashboardPage,
    name: "dashboard",
    children: [
      {
        path: "/create",
        component: CreateTask,
        name: "create"
      },
      {
        path: "/newtask",
        component: NewTasks,
        name: "newtask"
      },
      {
        path: "/in-progress",
        component: ProgressTask,
        name: "inprogress"
      },
      {
        path: "/completed",
        component: CompletedTasks,
        name: "completed"
      },
      {
        path: "/canceled",
        component: CanceledTasks,
        name: "canceled"
      },
      {
        path: "tasks/:id/edit",
        component: EditTask,
        name: "EditTask"
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
