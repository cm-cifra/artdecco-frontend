<template>
  <Header />
  <section class="flex items-center justify-center my-12 p-10">
    <div class="w-full container shadow-gray-400 shadow-md p-10">
      <div class="flex align-middle justify-center">
        <!-- Image Gallery -->
        <div class="w-full container">
          <div class=" ">
            <!-- Image Gallery -->
            <div class="w-full grid m-10 align-middle justify-center">
              <div class="mb-4 flex items-center justify-center">
                <!-- Selected Image with Fixed Dimensions -->
                <div
                  class="w-[600px] h-[600px] overflow-hidden rounded bg-gray-200 border shadow-sm shadow-black"
                >
                  <img
                    :src="selectedImage"
                    alt="Product"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>

              <!-- Thumbnails -->
              <div class="flex gap-2 justify-center">
                <img
                  v-for="image in product.images"
                  :key="image"
                  :src="image"
                  alt="Thumbnail"
                  class="w-16 h-16 object-cover rounded cursor-pointer border-2"
                  :class="
                    selectedImage === image
                      ? 'border-yellow-600'
                      : 'border-gray-300'
                  "
                  @click="selectedImage = image"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="w-full lg:w-2/3 border-2 p-5">
          <div class="justify-between flex">
            <h1 class="text-2xl font-bold text-gray-800">
              {{ product.name }}
            </h1>
            <button class="border-gray-300 rounded">
              <i class="fas fa-heart"></i>
            </button>
          </div>

          <p class="text-sm text-gray-500">{{ product.article_num }}</p>
          <p class="text-sm text-gray-600 mt-2">
            collection: {{ product.collection }}
          </p>

          <div class="mt-4">
            <span class="text-xl font-bold text-gray-900"
              >${{ product.price }}</span
            >
            <span
              v-if="product.freeInstallation"
              class="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded"
            >
              Free Installation
            </span>
          </div>

          <!-- Options -->
          <div class="mt-4">
            <div class="flex items-center gap-4">
              <label class="text-sm font-medium text-gray-700">Set Size:</label>
              <select v-model="selectedSize" class="border rounded px-2 py-1">
                <option v-for="size in product.sizes" :key="size" :value="size">
                  {{ size }}
                </option>
              </select>
            </div>
            <div class="mt-4 flex items-center gap-4">
              <label class="text-sm font-medium text-gray-700">Color:</label>
              <div class="flex gap-2">
                <div
                  v-for="color in product.colors"
                  :key="color.name"
                  class="w-6 h-6 rounded-full cursor-pointer border"
                  :class="[
                    selectedColor === color.name
                      ? 'border-yellow-600'
                      : 'border-gray-300',
                  ]"
                  :style="{ backgroundColor: color.code }"
                  @click="selectedColor = color.name"
                ></div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-6 flex items-center gap-4 justify-center">
            <button
              class="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 w-full h-14"
            >
              Add to Cart
            </button>
          </div>

          <!-- Tabs -->
          <div class="mt-8 border-t">
            <div class="flex gap-4">
              <button
                v-for="tab in tabs"
                :key="tab"
                @click="selectedTab = tab"
                class="px-4 py-2 text-sm rounded"
                :class="[
                  selectedTab === tab
                    ? 'bg-yellow-600 text-white'
                    : 'text-gray-600',
                ]"
              >
                {{ tab }}
              </button>
            </div>
            <div class="mt-4 text-gray-700">
              <p>{{ selectedTabContent }}</p>
            </div>
          </div>
          <div class="p-2">
            <h1 class="p-5 justify-center text-center">Configuration</h1>
            <div class="border-b-2 border-black rounded-md">
              <button
                @click="toggleCollapse"
                class="text-black font-semibold py-2 px-4 rounded-sm transition w-[500px] text-left"
              >
                Pedestal
              </button>
              <div
                v-if="!isCollapsed"
                class="p-4 border-t border-gray-300 bg-gray-50 flex"
              >
                <img
                  src="../assets/2.jpg"
                  alt="Pedestal Product Detail"
                  class="w-52 h-auto rounded-md mb-4"
                />
                <div class="p-5">
                  <p class="text-gray-700">Article Number: 12345</p>
                  <p class="text-gray-500 mt-2">Dimensions: 15x15x40 cm</p>
                  <p class="text-gray-500 mt-1">Material: High-grade steel</p>
                </div>
              </div>
            </div>
            <div class="border-b-2 border-black rounded-md">
              <button
                @click="toggleCollapse2"
                class="text-black font-semibold py-2 px-4 rounded-sm transition w-[500px] text-left"
              >
                Sink
              </button>
              <div
                v-if="!isCollapsed2"
                class="p-4 border-t border-gray-300 bg-gray-50 flex"
              >
                <img
                  src="../assets/2.jpg"
                  alt="Pedestal Product Detail"
                  class="w-52 h-auto rounded-md mb-4"
                />
                <div class="p-5">
                  <p class="text-gray-700">Article Number: 12345</p>
                  <p class="text-gray-500 mt-2">Dimensions: 15x15x40 cm</p>
                  <p class="text-gray-500 mt-1">Material: High-grade steel</p>
                </div>
              </div>
            </div>
            <div class="border-b-2 border-black rounded-md">
              <button
                @click="toggleCollapse3"
                class="text-black font-semibold py-2 px-4 rounded-sm transition w-[500px] text-left"
              >
                Mirror
              </button>
              <div
                v-if="!isCollapsed3"
                class="p-4 border-t border-gray-300 bg-gray-50 flex"
              >
                <img
                  src="../assets/2.jpg"
                  alt="Pedestal Product Detail"
                  class="w-52 h-auto rounded-md mb-4"
                />
                <div class="p-5">
                  <p class="text-gray-700">Article Number: 12345</p>
                  <p class="text-gray-500 mt-2">Dimensions: 15x15x40 cm</p>
                  <p class="text-gray-500 mt-1">Material: High-grade steel</p>
                </div>
              </div>
            </div>
            <div class="border-b-2 border-black rounded-md">
              <button
                @click="toggleCollapse4"
                class="text-black font-semibold py-2 px-4 transition w-[500px] text-left"
              >
                Mixer
              </button>
              <div
                v-if="!isCollapsed4"
                class="p-4 border-t border-gray-300 bg-gray-50 flex"
              >
                <img
                  src="../assets/2.jpg"
                  alt="Pedestal Product Detail"
                  class="w-52 h-auto rounded-md mb-4"
                />
                <div class="p-5">
                  <p class="text-gray-700">Article Number: 12345</p>
                  <p class="text-gray-500 mt-2">Dimensions: 15x15x40 cm</p>
                  <p class="text-gray-500 mt-1">Material: High-grade steel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide">
      <div
        v-if="showDrawer"
        class="fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg p-4 overflow-auto z-50"
      >
        <button
          @click="toggleDrawer"
          class="text-gray-600 font-bold text-xl absolute top-4 right-4"
        >
          ×
        </button>
        <h2 class="text-lg font-semibold mb-4">Product Configuration</h2>

        <div
          v-for="(detail, index) in configurationDetails"
          :key="index"
          class="mb-6"
        >
          <h3 class="text-md font-bold">{{ detail.name }}</h3>
          <div class="flex mt-2 gap-4">
            <img
              :src="detail.image"
              alt="Product Detail"
              class="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p class="text-sm text-gray-700">
                Article Number: {{ detail.articleNum }}
              </p>
              <p class="text-sm text-gray-500 mt-1">
                Dimensions: {{ detail.dimensions }}
              </p>
              <p class="text-sm text-gray-500 mt-1">
                Material: {{ detail.material }}
              </p>
              <button
                @click="toggleDrawer"
                class="text-white bg-blue-600 font-semibold py-2 px-4 rounded-md transition w-full text-left"
              >
                Open Configuration
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
  <ProductCard />
  <Footer />
</template>

<script>
import ProductCard from "../components/productCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Section from "../components/LandingpageSection.vue";
import Carousel from "../components/Carousel.vue";

export default {
  components: {
    ProductCard,
    Header,
    Section,
    Footer,
    Carousel,
  },

  name: "Product.vue",
  data() {
    return {
      product: {
        name: "Product Name",
        article_num: "Article Number",
        collection: "collection",
        brand: "LIKE",
        code: "2214",
        price: "1,345.00",
        freeInstallation: true,
        images: [
          "../assets/kits/el2.JPG",
          "../assets/kits/el3.JPG",
          "../assets/kits/el5.JPG",
          "../assets/kits/el6.JPG",
          "../assets/kits/el7.JPG",
          "../assets/kits/elezabeth.JPG",
        ],
        sizes: ["80 cm", "100 cm"],
        colors: [
          { name: "White", code: "#FFFFFF" },
          { name: "Beige", code: "#F5F5DC" },
        ],
      },
      selectedImage: "../assets/kits/elezabeth.JPG",
      selectedSize: "80 cm",
      selectedColor: "White",

      selectedTab: "Kit Composition",
      isCollapsed: true,
      isCollapsed2: true,
      isCollapsed3: true,
      isCollapsed4: true,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
    toggleCollapse2() {
      this.isCollapsed2 = !this.isCollapsed2;
    },
    toggleCollapse3() {
      this.isCollapsed3 = !this.isCollapsed3;
    },
    toggleCollapse4() {
      this.isCollapsed4 = !this.isCollapsed4;
    },
    // drawer
    toggleDrawer() {
      this.showDrawer = !this.showDrawer;
    },
  },
};
</script>

<style>
/* Selected Image Container */
.w-96 {
  width: 24rem; /* 384px */
}

.h-96 {
  height: 24rem; /* 384px */
}

.object-cover {
  object-fit: cover; /* Ensures image fits within container without distortion */
}

/* Placeholder background for non-loaded images */
.bg-gray-200 {
  background-color: #e5e7eb; /* Tailwind's gray-200 for fallback */
}

/* Thumbnail Styling */
.w-16 {
  width: 4rem; /* 64px */
}

.h-16 {
  height: 4rem; /* 64px */
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
