import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router configuration
import { createRouter, createWebHistory } from "vue-router";
import "swiper/css"; // Swiper styles
import "swiper/css/pagination"; // Additional swiper styles
import "animate.css"; // Import Animate.css for animations
import "./assets/main.css"; // Global styles
import { Carousel, Slide } from "vue-carousel";
import { MotionPlugin } from "@vueuse/motion";
import "@fortawesome/fontawesome-free/css/all.css";
import AnimateOnScroll from "primevue/animateonscroll";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
const app = createApp(App);
app.use(router);
app.component("Carousel", Carousel);
app.component("Swiper", Swiper);
app.component("SwiperSlide", SwiperSlide);
app.component("Pagination", Pagination);
app.component("Slide", Slide);
app.use(MotionPlugin);
app.use("animateonscroll", AnimateOnScroll);
app.mount("#app");
