<template>
  <Header />
  <section class="overflow-hidden relative">
    <div
      class="mx-auto grid md:flex-row flex-col items-center text-center md:text-left justify-center overflow-hidden md:p-36 bg-yellow-50"
      id="cover"
    >
      <!-- Swiper Section -->
      <swiper
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 2000 }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide class="overflow-hidden">
          <div
            class="flex flex-col md:flex-row items-center md:items-start relative"
          >
            <!-- Left Section -->
            <Motion
              preset="slideVisibleBottom"
              :duration="1000"
              class="z-20 w-full md:w-auto"
            >
              <div class="md:ml-20 z-10 mt-10 md:mt-20">
                <h1
                  class="text-4xl md:text-8xl font-serif font-bold text-black"
                >
                  Discover Our Exclusive Collections
                </h1>
                <p
                  class="mt-4 text-lg md:text-2xl text-black leading-relaxed md:p-2 w-full md:w-[500px]"
                >
                  Premium products crafted for your ultimate satisfaction.
                </p>
                <button
                  class="mt-6 px-6 py-3 text-lg md:text-xl w-48 md:w-60 h-12 md:h-16 bg-yellow-50 text-black rounded shadow hover:bg-yellow-600 hover:text-white"
                >
                  Explore Now →
                </button>
              </div>
            </Motion>

            <!-- Right Section -->
            <div class="w-[900px] h-[800px] mt-10 md:mt-0 absolute right-0">
              <video
                autoplay
                muted
                loop
                playsinline
                class="rounded-lg shadow-lg w-[900px] h-[800px]"
              >
                <source src="../assets/1204.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="overflow-hidden">
          <div
            class="flex flex-col md:flex-row items-center md:items-start relative"
          >
            <!-- Left Section -->
            <Motion
              preset="slideVisibleBottom"
              :duration="1000"
              class="z-20 w-full md:w-auto"
            >
              <div class="md:ml-20 z-10 mt-10 md:mt-20">
                <h1
                  class="text-4xl md:text-8xl font-serif font-bold text-black"
                >
                  Indulge in Luxury
                </h1>
                <p
                  class="mt-4 text-lg md:text-2xl text-black leading-relaxed md:p-2 w-full md:w-[500px]"
                >
                  Choose from a range of carefully curated products that meet
                  your expectations and elevate your standards.
                </p>
                <button
                  class="mt-6 px-6 py-3 text-lg md:text-xl w-48 md:w-60 h-12 md:h-16 bg-yellow-50 text-black rounded shadow hover:bg-yellow-600 hover:text-white"
                >
                  Explore Now →
                </button>
              </div>
            </Motion>

            <!-- Right Section -->
            <div
              class="w-[900px] h-[800px] mt-10 md:mt-0 absolute right-0 max-md:p-0"
            >
              <video
                autoplay
                muted
                loop
                playsinline
                class="rounded-lg shadow-lg w-[900px] h-[800px]"
              >
                <source src="../assets/1204.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- Wave Design -->
  </section>

  <div class="bg-yte py-10">
    <Featured />

    <Section />
    <ProductCard />
  </div>
  <Footer />
</template>

<script>
// Import Swiper and required modules
import ProductCard from "../components/productCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Section from "../components/LandingpageSection.vue";
import Category from "@/components/category.vue";
import Card from "@/components/card.vue";
import Featured from "@/components/FeatureProduct.vue";
import { Pagination } from "swiper/modules";
export default {
  name: "LandingPage",
  modules: [Pagination],
  components: {
    ProductCard,
    Header,
    Section,
    Footer,
    Category,
    Card,
    Featured,
  },
};
</script>

<style scoped>
/* Make sure Swiper takes the full height of its container */
.swiper {
  width: 100%;
  height: 100%;
}
</style>
