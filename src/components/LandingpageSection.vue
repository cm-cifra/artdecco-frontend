<template>
  <section class="bg-orange-50">
    <div
      class="mx-auto grid md:flex-row items-center text-center justify-center p-10"
      id="cover"
    >
      <Motion preset="slideVisibleTop" :duration="1200">
        <div class="p-5">
          <h1
            class="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-tex text-BLACK"
          >
            Our Collection
          </h1>
          <p>BROWSE THE LATEST ARTDECCO PRODUCT COLLECTIONS</p>
        </div></Motion
      >
      <MotionGroup preset="slideVisibleLeft" :duration="3000">
        <div class="flex gap-2 flex-wrap justify-center">
          <div
            v-for="(item, index) in catalogItems"
            :key="index"
            class="relative group overflow-hidden max-sm:w-46 max-sm:gap-2 max-2xl:w-48 rounded-sm w-[400px] transform translate-y-10 opacity-0 scroll-fade shadow-md hover:shadow-gray-500 transition-shadow duration-300 shadow-gray-400 border border-gray-600"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"
            ></div>
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p
                class="text-white text-lg font-semibold bg-black bg-opacity-60 px-3 py-1 rounded-lg"
              >
                {{ item.title }}
              </p>
            </div>
          </div>
        </div>
      </MotionGroup>
    </div>
  </section>

  <!-- Background Section -->
  <section
    class="relative bg-full w-full bg-center bg-no-repeat h-[70vh] flex items-center justify-center bg-opacity-60 scroll-fade"
    id="background"
  >
    <Motion preset="slideVisibleTop" :duration="600">
      <div
        class="text-center p-10 m-8 text-white bg-black bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm"
      >
        <h1
          class="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-tex text-white"
        >
          We have the most amazing collections
        </h1>
        <p class="text-lg md:text-xl mb-6 text-gray-200">
          Choose from our curated selection of high-quality products that match
          your standards.
        </p>
      </div>
    </Motion>
  </section>
</template>

<script>
import Carousel from "primevue/carousel";
export default {
  name: "Section",
  data() {
    return {
      catalogItems: [
        {
          image: "../assets/kits/elezabeth.JPG",
          title: "Bathroom Sets",
        },
        {
          image: "../assets/faucets/cover1.JPG",
          title: "Faucets",
        },
        {
          image: "../assets/kits/do1.JPG",
          title: "Kits",
        },
        {
          image: "../assets/Mirrors/me1.JPG",
          title: "Mirrors and Cabinets",
        },
        {
          image: "../assets/sink/f1.JPG",
          title: "Kitchen Sink",
        },
        {
          image: "../assets/image6.jpg",
          title: "Bathtubs",
        },
        {
          image: "../assets/faucets/vo3.JPG",
          title: "Faucets and Shower",
        },
        {
          image: "../assets/accessories/l1.JPG",
          title: "Accessories",
        },
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
