<template>
  <Header />
  <section class="flex items-center justify-center my-12 p-10">
    <div class="w-full container">
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

            <!-- Product Details -->
            <div class="w-full lg:w-2/3">
              <!-- (Product Details code remains unchanged) -->
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="w-full lg:w-2/3">
          <h1 class="text-2xl font-bold text-gray-800">{{ product.name }}</h1>
          <p class="text-sm text-gray-500">{{ product.brand }}</p>
          <p class="text-sm text-gray-600 mt-2">
            Product Code: {{ product.code }}
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
          <div class="mt-6 flex items-center gap-4">
            <button
              class="bg-yellow-600 text-white px-6 py-2 rounded w-56 hover:bg-yellow-700"
            >
              Buy
            </button>

            <button class="border-gray-300 rounded">
              <i class="fas fa-shopping-cart"></i></button
            ><button class="border-gray-300 rounded">
              <i class="fas fa-heart"></i>
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
        </div>
      </div>
    </div>
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
        name: "Acrylic bathtub with stainless faucet",
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
    };
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
</style>
