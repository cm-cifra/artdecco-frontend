import { createRouter, createWebHistory } from "vue-router";

import Collection from "../pages/Collection.vue";
import Landingpage from "../pages/Landingpage.vue";
import About from "../pages/about.vue";
import Catalog from "../pages/catalog.vue";
import Stocks from "../pages/stocks.vue";
import Product from "../pages/selectedProduct.vue";
import Installation from "../pages/Installation.vue";
import Accessories from "../pages/selectedProductAccessories.vue";

//admin import
import Dashboard from "../admin/pages/dashboard.vue";
import accessoriesView from "../admin/pages/AccessoriesList.vue";
import accessoriesAdd from "../admin/pages/AccessoryForm.vue";
import kitsAdd from "../admin/pages/kitsForm.vue";
import kitsView from "../admin/pages/kitsList.vue";
import bulk from "../admin/pages/MirrorsBulk.vue";

import parallex from "../pages/productpage.vue";
// Define routes
const routes = [
  {
    path: "/collection",
    name: "Collection",
    component: Collection,
  },
  {
    path: "/installation",
    name: "Installation",
    component: Installation,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/stock",
    name: "Stocks",
    component: Stocks,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/",
    name: "Landingpage",
    component: Landingpage,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/accessories",
    name: "Accessories",
    component: Accessories,
  },
  //admin routes

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/accessoriesView",
    name: "accessoriesView",
    component: accessoriesView,
  },
  {
    path: "/accessoriesAdd",
    name: "accessoriesAdd",
    component: accessoriesAdd,
  },

  {
    path: "/kitsView",
    name: "kitsView",
    component: kitsView,
  },
  {
    path: "/kitsAdd",
    name: "kitsAdd",
    component: kitsAdd,
  },
  {
    path: "/bulk",
    name: "bulk",
    component: bulk,
  },
  {
    path: "/parallex",
    name: "parallex",
    component: parallex,
  },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
