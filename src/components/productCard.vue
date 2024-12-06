<template>
  <section class="bg-white" v-motion-slide-visible-bottom>
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <Motion preset="slideVisibleTop" :duration="1500">
        <h1 class="text-6xl font-bold text-center mb-8">Trending Products</h1>
      </Motion>
      <!-- Swiper Carousel -->
      <Motion preset="slideVisibleBottom" :duration="1300">
        <swiper
          :slides-per-view="1"
          :space-between="20"
          :breakpoints="{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }"
          :pagination="{ clickable: true }"
          class="mySwiper"
        >
          <!-- Product Card -->
          <swiper-slide
            v-for="i in 6"
            :key="i"
            class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <!-- Image Section -->
            <div class="relative">
              <img
                src="../assets/image5.jpg"
                alt="Product Image"
                class="w-full h-48 object-cover"
              />
              <!-- Heart Icon -->
              <div
                class="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-200 cursor-pointer transition"
              >
                <i
                  class="fas fa-heart text-gray-400 hover:text-red-500 text-xl"
                ></i>
              </div>
            </div>

            <!-- Product Details -->
            <div class="p-6">
              <!-- Title & Code -->
              <div class="flex justify-between items-center mb-2">
                <h3 class="text-sm text-yellow-600 uppercase font-semibold">
                  Sensation
                </h3>
                <p class="text-sm text-gray-500">Code: 1234</p>
              </div>
              <h4 class="text-lg font-medium text-gray-800">
                Bathroom Set with Accessories
              </h4>
              <p class="text-lg font-bold text-gray-900 mt-2">$1,200.00</p>

              <!-- Action Buttons -->
              <div class="flex justify-between items-center mt-4">
                <button
                  class="flex-1 bg-white border hover:bg-yellow-500 text-black border-black font-medium py-2 rounded-lg shadow-lg transition"
                >
                  Buy Now
                </button>
                <button
                  class="ml-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 shadow transition"
                >
                  <i
                    class="fas fa-shopping-cart text-gray-600 hover:text-yellow-600"
                  ></i>
                </button>
              </div>
            </div>
          </swiper-slide> </swiper
      ></Motion>
    </div>
  </section>
</template>

<script>
import { Pagination } from "swiper/modules";

export default {
  name: "ProductCard",
  components: {},
  data() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style scoped>
/* Adjust section padding */
section {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

/* Improve hover scale */
.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

/* Smooth transitions for buttons */
button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

/* Adjust image fit */
img {
  object-fit: cover;
  object-position: center;
}

/* Heart icon hover */
i.fa-heart:hover {
  color: #dc2626; /* Tailwind red-600 */
}

/* Responsive Swiper styles */
.swiper {
  width: 100%;
  height: 100%;
}
</style>
