<template>
  <section class="bg-white">
    <!-- Hero Section -->
    <div
      class="mx-auto flex flex-col-reverse md:flex-row items-center text-center justify-center -m-5"
      id="cover"
    >
      <!-- Hero Text -->
      <div
        class="md:w-1/2 space-y-6 text-center md:text-left opacity-0 transform translate-y-10 scroll-fade"
      >
        <Motion preset="slideVisibleLeft" :duration="1200">
          <h1 class="text-4xl md:text-4xl font-bold leading-tight">
            Provides you with the best quality products
          </h1>

          <p class="text-gray-600 text-lg leading-relaxed">
            With our products, your bathroom is ensured to have the best quality
            that you can enjoy.
          </p>
          <button
            class="px-8 py-3 my-10 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out"
          >
            Explore
          </button>
        </Motion>
      </div>

      <!-- Image Cards -->
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <!-- Grid Item -->
        <div
          v-for="(item, index) in catalogItems"
          :key="index"
          class="relative group overflow-hidden max-sm:w-46 max-sm:gap-2 max-2xl:w-48 rounded-md w-64 opacity-0 transform translate-y-10 scroll-fade shadow-xl hover:shadow-gray-500 transition-shadow duration-300 shadow-gray-400"
        >
          <!-- Image -->
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-white text-lg font-semibold">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Background Section -->
  <section
    class="relative bg-full w-full bg-center bg-no-repeat h-[70vh] flex items-center justify-center bg-opacity-60 scroll-fade m-10"
    id="background"
  >
    <Motion preset="slideVisibleTop" :duration="1200">
      <div
        class="text-center p-10 m-8 text-white justify-start bg-black bg-opacity-15 shadow-white rounded-lg backdrop-filter backdrop-blur-md border border-white/20"
      >
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          We have the most greatest collections
        </h1>
        <p class="text-lg md:text-xl mb-6">
          Have no trouble for choosing our products because we have collections
          that will suit your standards
        </p>
        <button
          class="px-14 py-3 bg-yellow-600 bg-opacity-75 text-white font-semibold rounded-xl hover:bg-slate-900 transition duration-300 ease-in-out"
        >
          Explore
        </button>
      </div></Motion
    >
  </section>

  <!-- Footer Section -->
  <section class="h-[10vh] flex items-center justify-center m-20 scroll-fade">
    <div
      class="text-center p-6 rounded-lg max-w-lg text-yellow-600 opacity-0 transform translate-y-10"
    >
      <h1 class="text-4xl md:text-5xl font-bold mb-4">SENSATION</h1>
      <p class="text-lg md:text-xl mb-6 text-black">
        Masterpieces that delight
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section",
  data() {
    return {
      catalogItems: [
        { image: "../assets/bathroom/cover.JPG", title: "Bathroom Sets" },
        { image: "../assets/faucets/cover1.JPG", title: "Faucets" },
        { image: "../assets/image3.jpg", title: "Kits" },
        { image: "../assets/Mirrors/cover.JPG", title: "Mirrors & Cabinets" },
        { image: "../assets/image5.jpg", title: "Kitchen Sink" },
        { image: "../assets/image6.jpg", title: "Bathtubs" },
        { image: "../assets/image7.jpg", title: "Faucets & Shower" },
        { image: "../assets/accessories/cover1.JPG", title: "Accessories" },
        { image: "../assets/sink/cover.JPG", title: "Sink" },
      ],
    };
  },
  mounted() {
    this.setupScrollAnimations();
  },
  methods: {
    setupScrollAnimations() {
      const elements = document.querySelectorAll(".scroll-fade");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in-visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => observer.observe(el));
    },
  },
};
</script>

<style scoped>
#background {
  background-image: url("../assets/2.jpg");
}

/* Initial state for animations */
.scroll-fade {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Triggered when in view */
.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
