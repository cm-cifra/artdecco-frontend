<template>
  <section
    class="text-center container mx-auto h-[500px] p-5 m-20 mb-20 -mt-10"
  >
    <div class="mb-10 flex justify-between">
      <Motion preset="slideVisibleLeft" :duration="1000">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          OUR FEATURED PRODUCTS
        </h1></Motion
      >
      <Motion preset="slideVisibleRight" :duration="1000">
        <p
          class="text-gray-600 text-lg font-medium cursor-pointer hover:text-gray-900"
        >
          SHOP NOW →
        </p></Motion
      >
    </div>
    <Motion preset="slideVisibleBottom" :duration="1000">
      <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :centeredSlides="false"
        :pagination="{ clickable: true }"
        :modules="modules"
        class="mySwiper"
        :breakpoints="{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 2, spaceBetween: 1 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }"
      >
        <swiper-slide
          v-for="(product, index) in products"
          :key="index"
          class="flex flex-col items-center z-10"
        >
          <div class="w-full px-4">
            <img
              :src="product.image"
              alt="Product Image"
              class="w-full h-[300px] object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
            />
            <h2
              class="mt-4 text-lg font-serif text-gray-800 uppercase tracking-wider"
            >
              {{ product.name }}
            </h2>
            <p class="text-gray-500 text-base mt-1">${{ product.price }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </Motion>
  </section>
  <section>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="-mt-96"
    >
      <path
        fill="#ffffe6"
        fill-opacity="1"
        d="M0,256L60,261.3C120,267,240,277,360,266.7C480,256,600,224,720,218.7C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </section>
</template>

<script>
import { Pagination } from "swiper/modules";
export default {
  name: "featured",
  components: {},
  data() {
    return {
      products: [
        {
          name: "Accessories",
          price: "$200",
          image: new URL("../assets/accessories/a1.jpg", import.meta.url).href,
        },
        {
          name: "Accessories",
          price: "$200",
          image: new URL("../assets/accessories/a2.jpg", import.meta.url).href,
        },
        {
          name: "Accessories",
          price: "$200",
          image: new URL("../assets/accessories/a3.jpg", import.meta.url).href,
        },
        {
          name: "Mirrors",
          price: "$200",
          image: new URL("../assets/Mirrors/m1.jpg", import.meta.url).href,
        },
        {
          name: "Mirrors",
          price: "$200",
          image: new URL("../assets/Mirrors/m2.jpg", import.meta.url).href,
        },
        {
          name: "Mirrors",
          price: "$200",
          image: new URL("../assets/Mirrors/m3.jpg", import.meta.url).href,
        },
        {
          name: "Mirrors",
          price: "$200",
          image: new URL("../assets/Mirrors/m4.jpg", import.meta.url).href,
        },
        {
          name: "Mirrors",
          price: "$200",
          image: new URL("../assets/Mirrors/me9.jpg", import.meta.url).href,
        },
        {
          name: "KITS",
          price: "$200",
          image: new URL("../assets/kits/do3.jpg", import.meta.url).href,
        },
        {
          name: "KITS",
          price: "$200",
          image: new URL("../assets/kits/do1.jpg", import.meta.url).href,
        },
        {
          name: "KITS",
          price: "$200",
          image: new URL("../assets/kits/elezabeth.jpg", import.meta.url).href,
        },
      ],
      modules: [Pagination],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
</style>
