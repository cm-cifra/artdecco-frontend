<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section
      class="relative h-screen bg-cover bg-center text-white flex items-center justify-center"
      :style="{
        backgroundImage: 'url(../assets/1204.mp4)',
      }"
    >
      <div
        class="absolute inset-0 bg-black bg-opacity-50"
        data-aos="fade-in"
        data-aos-duration="1500"
      ></div>
      <div class="relative text-center z-10">
        <h1
          class="text-6xl font-bold mb-4 tracking-wide"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Indulge in Luxury
        </h1>
        <p class="text-lg font-light" data-aos="fade-up" data-aos-delay="500">
          Premium products crafted for your ultimate satisfaction.
        </p>
      </div>
    </section>

    <!-- Product Showcase with Zoom Effect -->
    <section class="py-16">
      <div class="container mx-auto">
        <!-- Product 1 -->
        <div
          class="relative zoom-section h-screen flex items-center justify-center text-center overflow-hidden"
        >
          <img
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 zoom-image"
            :src="currentImage1"
            alt="Product 1"
          />
          <div
            class="relative z-10 bg-black bg-opacity-50 text-white rounded-lg p-8 shadow-lg"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <h2 class="text-4xl font-bold mb-4">The Perfect Glow</h2>
            <p class="text-lg">
              Enhance your natural radiance with our specially formulated
              skincare products.
            </p>
          </div>
        </div>

        <!-- Product 2 -->
        <div
          class="relative zoom-section h-screen flex items-center justify-center text-center overflow-hidden"
        >
          <img
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 zoom-image"
            :src="currentImage2"
            alt="Product 2"
          />
          <div
            class="relative z-10 bg-black bg-opacity-50 text-white rounded-lg p-8 shadow-lg"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <h2 class="text-4xl font-bold mb-4">Timeless Elegance</h2>
            <p class="text-lg">
              Our products are designed to give you a touch of luxury every day.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section
      class="relative h-screen bg-cover bg-center text-white"
      :style="{
        backgroundImage:
          'url(https://m.media-amazon.com/images/I/71KtkYLXTjL.jpg)',
      }"
    >
      <div
        class="absolute inset-0 bg-black bg-opacity-50"
        data-aos="fade-in"
        data-aos-duration="1500"
      ></div>
      <div class="relative z-10 flex items-center justify-center h-full">
        <div class="text-center max-w-2xl px-4">
          <h2
            class="text-4xl font-semibold mb-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            About Us
          </h2>
          <p
            class="text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            At Vanity Co., we believe beauty is about more than looks. Our
            mission is to inspire confidence and self-love through premium
            products crafted with care.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage1: "https://m.media-amazon.com/images/I/71KtkYLXTjL.jpg",
      currentImage2: "https://m.media-amazon.com/images/I/71KtkYLXTjL.jpg",
      images1: [
        "https://m.media-amazon.com/images/I/71KtkYLXTjL.jpg",
        "https://m.media-amazon.com/images/I/91Lguk0+zJL._AC_SL1500_.jpg",
      ],
      images2: [
        "https://m.media-amazon.com/images/I/91Lguk0+zJL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81F8x-BPWeL._AC_SL1500_.jpg",
      ],
      scrollTimeout: null,
    };
  },
  mounted() {
    import("aos").then((AOS) => {
      AOS.init({
        once: true, // Trigger animations only once
      });
    });

    // Add scroll listener
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Remove scroll listener
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const sections = document.querySelectorAll(".zoom-section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const image = section.querySelector(".zoom-image");
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Apply zoom effect
          const zoomFactor = 1 + Math.min(0.5, Math.abs(rect.top) / 500);
          image.style.transform = `scale(${zoomFactor})`;

          // Change the image when fully in view
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            this.changeImage(index);
          }
        }
      });
    },
    changeImage(index) {
      if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        if (index === 0) {
          const nextImage =
            this.currentImage1 === this.images1[0]
              ? this.images1[1]
              : this.images1[0];
          this.currentImage1 = nextImage;
        } else if (index === 1) {
          const nextImage =
            this.currentImage2 === this.images2[0]
              ? this.images2[1]
              : this.images2[0];
          this.currentImage2 = nextImage;
        }
      }, 300); // Change after a short delay
    },
  },
};
</script>

<style>
/* General Styles */
body {
  scroll-behavior: smooth;
}

/* Zoom Effect */
.zoom-section {
  position: relative;
  overflow: hidden;
  background-color: #000;
}

.zoom-image {
  transition: transform 1s ease-in-out;
}
</style>
