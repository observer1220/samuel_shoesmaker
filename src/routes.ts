import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Service from "./views/Service.vue";
import Customized from "./views/Customized.vue";
import Process from "./views/Process.vue";
import Articles from "./views/Articles.vue";
import Backstage from "./views/Backstage.vue";
import NotFoundComponent from "./views/NotFoundComponent.vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import ElementUI from "element-ui";

// Vue.use(ElementUI);
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);
// Vue.use(VueRouter);

const routes = [
  // {
  //   path: "*",
  //   component: NotFoundComponent,
  // },
  {
    path: "/",
    component: Home,
    meta: {
      title: "Samuel鞋匠工坊",
    },
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "關於我們",
    },
  },
  {
    path: "/service",
    component: Service,
    meta: {
      title: "服務項目",
    },
  },
  {
    path: "/customized",
    component: Customized,
    meta: {
      title: "客製化服務",
    },
  },
  {
    path: "/process",
    component: Process,
    meta: {
      title: "維修流程",
    },
  },
  {
    path: "/articles",
    component: Articles,
    meta: {
      title: "主題文章",
    },
  },
  // {
  //   path: '/users',
  //   component: User,
  //   meta: {
  //     title: '員工專區'
  //   }
  // },
  {
    path: "/backstage",
    component: Backstage,
    meta: {
      title: "員工專區",
      requiresAuth: true,
    },
    // children: [
    //   {
    //     path: "/emp",
    //     component: Emp,
    //     meta: {
    //       title: "員工列表",
    //     },
    //   },
    // ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// router.beforeEach((to) => {
//   // 如果名稱不是login，且沒有jwtToken，就導到login
//   if (to.name !== "login") {
//     return { name: "login" };
//   }
//   // 如果名稱是login，且有jwtToken，就導到home
//   // if (to.name === "login" && getJwtToken()) {
//   //   return { name: "home" };
//   // }
// });

export { router };
