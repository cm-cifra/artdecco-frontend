<template>
  <!-- Carousel -->
  <div class="w-full">
    <div class="relative overflow-hidden shadow-lg">
      <!-- Carousel Container -->
      <div
        class="flex transition-transform duration-500 ease-in-out h-60"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="relative flex-shrink-0 w-full h-[500px] bg-cover bg-center"
          :style="{ backgroundImage: `url(${slide.image})` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //carousel data
  name: "carousel",
  data() {
    return {
      activeIndex: 0,
      slides: [
        {
          image: "@/../assets/Carousel.jpg",
        },
        {
          image: "@/../assets/Carousel.jpg",
        },
        {
          image: "@/../assets/hero3.jpg",
        },
      ],
    };
  },
  methods: {
    //carousel scripts
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.activeIndex =
        (this.activeIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.activeIndex = index;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.nextSlide, 5000); // Change slide every 5 seconds
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
};
</script>
