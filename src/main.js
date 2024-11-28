import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router configuration
import { createRouter, createWebHistory } from "vue-router";
import "swiper/css"; // Swiper styles
import "swiper/css/pagination"; // Additional swiper styles
import "animate.css"; // Import Animate.css for animations
import "./assets/main.css"; // Global styles
import VueCarousel from "vue-carousel";
import { MotionPlugin } from "@vueuse/motion";
import "@fortawesome/fontawesome-free/css/all.css";
import AnimateOnScroll from "primevue/animateonscroll";

const app = createApp(App);
app.use(router);
app.use(VueCarousel);
app.use(MotionPlugin);
app.use("animateonscroll", AnimateOnScroll);
app.mount("#app");
