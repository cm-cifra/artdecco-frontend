<template>
  <Header />
  <section class="overflow-hidden relative h-[700px]" id="first_section">
    <!-- Swiper Section -->
    <video
      autoplay
      loop
      muted
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="../assets/1204.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="overflow-hidden">
      <div
        class="flex flex-col md:flex-row items-center md:items-start relative"
      >
        <!-- Left Section -->
        <Motion
          preset="slideVisibleBottom"
          :duration="1000"
          class="w-full md:w-auto"
        >
          <div class="justify-center mt-40 p-10">
            <h1 class="font-sans text-4xl md:text-6xl font-bold text-black">
              Discover Our Exclusive Collections
            </h1>
            <p
              class="font-sans mt-4 text-lg md:text-2xl text-black leading-relaxed md:p-2 w-full md:w-[500px]"
            >
              Premium products crafted for your ultimate satisfaction.
            </p>
            <button
              class="px-6 py-3 text-lg md:text-xl w-48 md:w-60 h-12 md:h-16 bg-yellow-600 text-white rounded shadow hover:bg-yellow-600 hover:text-white"
            >
              Explore Now →
            </button>
          </div>
        </Motion>

        <!-- Right Section -->
      </div>
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
import ProductCard from "../components/product.vue";
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
