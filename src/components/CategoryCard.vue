<template>
  <section class="justify-center text-center overflow-hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="absolute -top-10 z-0"
    >
      <path
        fill="#ffffe6"
        fill-opacity="1"
        d="M0,256L60,261.3C120,267,240,277,360,266.7C480,256,600,224,720,218.7C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        class="z-100 border-2 border-black shadow-sm shadow-black"
      ></path>
    </svg>
    <Motion preset="slideVisibleRight" :duration="1200">
      <h1
        class="text-3xl md:text-5xl font-extrabold bg-clip-text text-black mt-20"
      >
        Our Collection
      </h1>
      <p class="text-base md:text-lg">
        BROWSE THE LATEST ARTDECCO PRODUCT COLLECTIONS
      </p>
    </Motion>
  </section>

  <section class="flex align-middle mt-20">
    <!-- Category Details -->
    <div class="m-t">
      <!-- Thumbnails Carousel -->
      <div ref=" " class=" ">
        <div
          v-for="(image, index) in category.images"
          :key="index"
          @click="selectedImage = image.image"
          @mouseover="selectedImage = image.image"
          class=""
        >
          <!-- Text Overlay -->
          <div class="text-black text-xl p-1 z-20">
            <h1
              class="hover:text-2xl hover:bg-yellow-300 bg-yellow-400 rounded-e-md border-yellow-600 border-2 w-[500px] h-14 justify-center p-2"
            >
              {{ image.title }}
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- Image Gallery -->
    <div class="h-[1000px] container pb-20 -mt-20 pl-64 overflow-hidden">
      <div class="overflow-hidden">
        <img
          :src="selectedImage"
          alt="Selected Category"
          class="w-full h-[900px] object-cover absolute"
          id="Category-image"
        />
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
  methods: {},
};
</script>
<style>
#Category-image {
  border-radius: 100% 0 0 100%;
  width: 1000px;
  height: 900px;
  right: 0;

  top: 10%;
  z-index: -10 !important;
}
</style>
