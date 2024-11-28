<template>
  <section class="py-16" v-motion-slide-visible-once-top>
    <!-- Grid Layout -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4"
    >
      <!-- Grid Item -->
      <div
        v-for="(item, index) in catalogItems"
        :key="index"
        class="relative group overflow-hidden rounded-lg shadow-lg"
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
  </section>
</template>

<script>
export default {
  name: "category",

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
        {
          image: "../assets/sink/f1.JPG",
          title: "Sink",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add hover effect */
.group:hover img {
  transform: scale(1.1);
}

.group:hover .opacity-0 {
  opacity: 1;
}

.transition-transform {
  transition: transform 0.3s ease-in-out;
}

.transition-opacity {
  transition: opacity 0.3s ease-in-out;
}

/* Make the grid items taller */
@media (min-width: 640px) {
  .grid > div {
    height: 300px; /* Adjust this height as necessary */
  }
}

@media (min-width: 1024px) {
  .grid > div {
    height: 350px; /* Taller height for larger screens */
  }
}
</style>
