<template>
  <section
    class="flex flex-col md:flex-row items-center justify-between p-4 md:p-20 bg-gray-100"
  >
    <!-- Image Gallery -->
    <div class="w-full md:w-1/2 container">
      <!-- Main Image Display -->
      <div class="grid align-middle justify-center mb-4">
        <div class="flex items-center justify-center">
          <!-- Selected Image with Fixed Dimensions, now responsive -->
          <div
            class="w-full md:w-[500px] h-[300px] md:h-[500px] overflow-hidden rounded bg-gray-200 shadow-sm shadow-black"
          >
            <img
              :src="selectedImage"
              alt="Selected Category"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Category Details -->
    <div class="m-4 md:m-10 w-full md:w-1/2">
      <Motion preset="slideVisibleRight" :duration="1200">
        <h1
          class="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-black"
        >
          Our Collection
        </h1>
        <p class="text-base md:text-lg">
          BROWSE THE LATEST ARTDECCO PRODUCT COLLECTIONS
        </p>
      </Motion>

      <!-- Thumbnails Carousel -->
      <div
        ref="carousel"
        class="relative w-full overflow-hidden flex gap-2 p-2 rounded"
      >
        <div
          v-for="(image, index) in category.images"
          :key="index"
          class="relative w-24 md:w-48 h-24 md:h-48 shrink-0 rounded cursor-pointer overflow-hidden"
          :class="{
            'border-yellow-600': selectedImage === image.image,
            'border-gray-300': selectedImage !== image.image,
          }"
          @click="selectedImage = image.image"
          @mouseover="selectedImage = image.image"
        >
          <img
            :src="image.image"
            alt="Thumbnail"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <!-- Text Overlay -->
          <div
            class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-1 text-sm"
          >
            {{ image.title }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      category: {
        title: "Category Name",
        button: "Visit Now",
        images: [
          { image: "../assets/kits/elezabeth.JPG", title: "Bathroom Sets" },
          { image: "../assets/faucets/cover1.JPG", title: "Faucets" },
          { image: "../assets/kits/do1.JPG", title: "Kits" },
          { image: "../assets/Mirrors/me1.JPG", title: "Mirrors and Cabinets" },
          { image: "../assets/sink/f1.JPG", title: "Kitchen Sink" },
          { image: "../assets/image6.jpg", title: "Bathtubs" },
          { image: "../assets/faucets/vo3.JPG", title: "Faucets and Shower" },
          { image: "../assets/accessories/l1.JPG", title: "Accessories" },
        ],
      },
      selectedImage: "../assets/kits/elezabeth.JPG", // Default selected image
      intervalId: null, // Store the timer ID
      scrollPosition: 0, // Track the current scroll position
    };
  },
  methods: {
    startCarousel() {
      const carousel = this.$refs.carousel;
      this.intervalId = setInterval(() => {
        // Update scroll position
        if (
          this.scrollPosition >=
          carousel.scrollWidth - carousel.offsetWidth
        ) {
          this.scrollPosition = 0; // Reset to start
        } else {
          this.scrollPosition += 150; // Scroll by 150px
        }
        carousel.scrollTo({
          left: this.scrollPosition,
          behavior: "smooth",
        });
      }, 2000); // Adjust delay (in ms) for the speed of sliding
    },
    stopCarousel() {
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    this.stopCarousel(); // Ensure carousel stops when the component is destroyed
  },
};
</script>

<style scoped>
/* Carousel Styling */
.overflow-hidden {
  overflow: hidden;
}

/* Thumbnail Hover Effect */
.cursor-pointer:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Overlay Styling */
.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Responsive Design Enhancements */
@media (max-width: 768px) {
  section {
    padding: 1rem;
  }

  .w-full {
    width: 100%;
  }

  .text-3xl {
    font-size: 2rem;
  }

  .md\:text-5xl {
    font-size: 3rem;
  }

  .md\:m-10 {
    margin: 2rem;
  }

  .w-24 {
    width: 80px;
  }

  .md\:w-48 {
    width: 100px;
  }

  .h-24 {
    height: 80px;
  }

  .md\:h-48 {
    height: 100px;
  }
}
</style>
