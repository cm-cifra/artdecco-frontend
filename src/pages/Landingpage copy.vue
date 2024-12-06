<template>
  <div class="font-sans bg-black relative">
    <!-- Header -->
    <Header />

    <div class="h-[800px] bg-black my-10">
      <div class="w-full">
        <!-- Hero Section -->
        <div class="overflow-hidden shadow-lg">
          <section
            class="relative h-[600px] text-white flex items-center justify-center"
          >
            <!-- Background Video -->
            <video
              autoplay
              muted
              loop
              playsinline
              class="absolute inset-0 w-full h-full object-cover"
            >
              <source src="../assets/1204.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-black bg-opacity-50"
              data-aos="fade-in"
              data-aos-duration="1500"
            ></div>

            <!-- Content -->
            <Motion preset="slideVisibleBottom" :duration="1500">
              <div class="relative text-center z-10" v-motion-fade-visible>
                <h1
                  class="text-6xl font-bold mb-4 tracking-wide"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  v-motion-fade-visible
                  :style="{ transform: `translateY(${parallaxY1}px)` }"
                >
                  Indulge in Luxury
                </h1>
                <p
                  class="text-lg font-light"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  v-motion-fade-visible
                  :style="{ transform: `translateY(${parallaxY1}px)` }"
                >
                  Premium products crafted for your ultimate satisfaction.
                </p>
                <button
                  class="text-white font-semibold my-5 rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out fade-in hover:text-yellow-600"
                >
                  Explore Now
                  <i class="fa fa-arrow-right"></i>
                </button></div
            ></Motion>
          </section>
          <section
            id="firstsec"
            class="relative bg-cover bg-center bg-no-repeat h-[40vh] flex items-center bg-white"
            v-motion-fade-visible
          >
            <!-- Floating Images -->
            <img
              src="../assets/c1.png"
              alt=""
              class="absolute right-10 transform -translate-y-1/2 w-80 sm:w-3/6 md:w-3/6 lg:w-2/6 xl:w-2/6 top-72 sm:top-5/4 md:top-[50%] xl:top[30%] lg:top-[50%] max-sm:-right-24 2xl:top-[30%] animate-float transition-all duration-500 ease-in-out z-50"
              v-motion-roll-visible-left
              :style="{ transform: `translateY(${parallaxY1}px)` }"
            />

            <img
              src="../assets/c2.png"
              alt=""
              class="absolute left-4 sm:left-10 md:-left-20 lg:-left-36 -top-48 transform -translate-y-1/2 w-36 sm:w-48 md:w-56 lg:w-64 xl:w-2/6 animate-float transition-all duration-500 ease-in-out"
              v-motion-roll-visible-left
              :style="{ transform: `translateY(${parallaxY1}px)` }"
            />

            <!-- Text Content -->
            <Motion preset="slideVisibleBottom" :duration="700">
              <div
                class="relative p-10 m-8 text-black justify-start bg-black bg-opacity-5 shadow-black rounded-lg backdrop-filter backdrop-blur-md"
                :style="{ transform: `translateY(${parallaxY1}px)` }"
              >
                <h1 class="text-4xl md:text-6xl font-bold mb-4 fade-in">
                  Discover Our Exclusive Collections
                </h1>
                <p class="text-lg md:text-xl mb-6 fade-in">
                  Choose from a range of carefully curated products that meet
                  your expectations and elevate your standards.
                </p>
              </div>
            </Motion>
          </section>
        </div>

        <!-- Additional Components -->
        <div class="bg-white py-10">
          <Card /> <Section />
          <ProductCard />
        </div>
      </div>

      <!-- Footer -->
      <Footer />
    </div>

    <!-- Scroll to Top Button -->
    <button
      v-show="showScrollToTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-white shadow-slate-500 text-white p-2 rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300 z-50"
      aria-label="Scroll to Top"
    >
      <i class="fas fa-arrow-up w-5 h-5 text-black hover:text-white"></i>
    </button>
  </div>
</template>

<script>
import ProductCard from "../components/productCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Section from "../components/LandingpageSection.vue";
import Category from "@/components/category.vue";
import Card from "@/components/card.vue";
export default {
  components: {
    ProductCard,
    Header,
    Section,
    Footer,
    Category,
    Card,
  },
  data() {
    return {
      showScrollToTop: false, // Controls visibility of the Scroll to Top button
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.showScrollToTop = window.scrollY > 200;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      scrollY: 0,
    };
  },
  computed: {
    parallaxY1() {
      return this.scrollY * 0.2; // Adjust speed for Image 1
    },
    parallaxY2() {
      return this.scrollY * 0.5; // Adjust speed for Image 2
    },
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
#firstsec {
}
/* Fade-in Animation */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fade-in 1s ease-in-out;
}

/* Floating animation */
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 3s infinite;
}
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.2s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
