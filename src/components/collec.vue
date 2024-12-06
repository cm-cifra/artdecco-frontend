<template>
  <!-- Background Section -->
  <section
    class="relative bg-full w-full bg-center bg-no-repeat h-[70vh] flex items-center justify-center bg-opacity-60 scroll-fade m-10"
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
        <button
          class="px-14 py-3 text-white font-semibold rounded-xl transition-transform duration-300 transform hover:scale-105"
        >
          <U>Explore Now</U>
        </button>
      </div>
    </Motion>
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
