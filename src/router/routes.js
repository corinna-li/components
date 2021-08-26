const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "ajax-bar", component: () => import("pages/QAjaxBarPage.vue") },
      { path: "avatar", component: () => import("pages/QAvatarPage.vue") },
      { path: "btnGroup", component: () => import("pages/QBtnGroupPage.vue") },
      { path: "btnGroup", component: () => import("pages/QBtnGroupPage.vue") },
      {
        path: "/btnGroup/sub-route",
        component: () => import("pages/QBtnGroupPage.vue"),
      },
      { path: "chip", component: () => import("pages/QChipPage.vue") },
      { path: "circular", component: () => import("pages/QCircularPage.vue") },
      { path: "color", component: () => import("pages/QcolorPage.vue") },
      { path: "test-select", component: () => import("pages/test-select.vue") },
      { path: "testxls", component: () => import("pages/testxls.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
