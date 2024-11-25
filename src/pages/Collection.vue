<template>
  <div class="font-sans bg-gray-100">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section
      class="relative bg-cover bg-center bg-no-repeat h-[30vh] flex items-center"
      style="background-image: url('../assets/Carousel.jpg')"
      v-motion-fade-visible
    >
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"
      ></div>

      <!-- Text Content -->
      <div class="relative p-8 text-white justify-start">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 fade-in">COLLECTIONS</h1>
        <p class="text-lg md:text-xl mb-6 fade-in">
          The world’s first collectible bathroom brand
        </p>
        <button
          class="px-12 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-transform transform hover:scale-105 duration-300 ease-in-out fade-in"
        >
          Explore Now
        </button>
      </div>
    </section>
    <section class="relative bg-white">
      <div class="flex items-center justify-center">
        <div class="text-center">
          <nav
            class="flex flex-wrap justify-center space-x-8 text-xs text-slate-600 uppercase tracking-wide"
          >
            <a
              href="#"
              class="hover:underline hover:decoration-2 bg-yellow-600 hover:decoration-orange-400 hover:text-black text-white hover:border-black p-3 border-black-500 border-opacity-40 border-2 m-5 rounded-xl transition duration-300 ease-in-out px-12"
              >Sensation</a
            ><a
              href="#"
              class="hover:underline hover:decoration-2 bg-white hover:decoration-orange-400 hover:text-black text-black hover:border-black p-3 border-black-500 border-opacity-40 border-2 m-5 rounded-xl transition duration-300 ease-in-out px-12"
              >Spirit 2.0</a
            ><a
              href="#"
              class="hover:underline hover:decoration-2 bg-white hover:decoration-orange-400 hover:text-black text-black hover:border-black p-3 border-black-500 border-opacity-40 border-2 m-5 rounded-xl transition duration-300 ease-in-out px-12"
              >Spirit 2.0</a
            ><a
              href="#"
              class="hover:underline hover:decoration-2 bg-white hover:decoration-orange-400 hover:text-black text-black hover:border-black p-3 border-black-500 border-opacity-40 border-2 m-5 rounded-xl transition duration-300 ease-in-out px-12"
              >Func</a
            ><a
              href="#"
              class="hover:underline hover:decoration-2 bg-white hover:decoration-orange-400 hover:text-black text-black hover:border-black p-3 border-black-500 border-opacity-40 border-2 m-5 rounded-xl transition duration-300 ease-in-out px-12"
              >Like</a
            >
            <a
              href="#"
              class="hover:underline hover:decoration-2 bg-white hover:decoration-orange-400 hover:text-black text-black hover:border-black p-3 border-black-500 border-opacity-40 border-2 m-5 rounded-xl transition duration-300 ease-in-out px-12"
              >Gem</a
            >
          </nav>
        </div>
      </div>
    </section>
    <section
      class="relative bg-cover bg-center bg-no-repeat h-[10vh] flex items-center justify-center m-20"
    >
      <div class="text-center p-6 rounded-lg max-w-lg text-yellow-600">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">SENSATION</h1>
        <p class="text-lg md:text-xl mb-6 text-black">
          Masterpieces that delight
        </p>
      </div>
    </section>
    <ProductCard />
  </div>
  <Footer />
</template>

<script>
import ProductCard from "../components/productCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Section from "../components/LandingpageSection.vue";
export default {
  components: {
    ProductCard,
    Header,
    Section,
    Footer, // Register the component
  },

  name: "Collection",
};
</script>

<style>
@import "animate.css";
</style>
