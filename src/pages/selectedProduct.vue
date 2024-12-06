<template>
  <Header />
  <section class="flex items-center justify-center my-12 p-10">
    <div class="w-full container shadow-gray-400 shadow-md p-10">
      <div class="flex align-middle justify-center">
        <!-- Image Gallery -->
        <div class="w-full container">
          <div class=" ">
            <!-- Image Gallery -->
            <div class="w-full align-middle justify-center">
              <div
                class="mb-4 flex items-center justify-center w-[800px] h-[600px]"
              >
                <!-- Selected Image with Fixed Dimensions -->
                <div
                  class="w-[800px] h-[600px] overflow-hidden rounded bg-gray-200 border shadow-sm shadow-black"
                >
                  <img
                    :src="selectedImage"
                    alt="Product"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>

              <!-- Thumbnails -->
              <div class="-ml-12">
                <swiper
                  :slidesPerView="5"
                  :spaceBetween="1"
                  :pagination="{ clickable: true }"
                  :modules="modules"
                  class="mySwiper w-[800px] flex"
                >
                  <swiper-slide v-for="image in product.images" :key="image">
                    <img
                      :src="image"
                      alt="Thumbnail"
                      class="w-36 h-36 object-cover rounded cursor-pointer border-2"
                      :class="
                        selectedImage === image
                          ? 'border-yellow-600'
                          : 'border-gray-300'
                      "
                      @click="selectedImage = image"
                    />
                  </swiper-slide>
                </swiper>
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
            <div class="border-b-2 border-gray rounded-md">
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
            <div class="border-b-2 border-gray rounded-md">
              <button
                @click="toggleCollapse2"
                class="text-black font-semibold py-2 px-4 rounded-sm transition w-[500px] text-left"
              >
                Sink
              </button>
              <div
                v-if="!isCollapsed2"
                class="p-4 border-t border-gray bg-gray-50 flex"
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
            <div class="border-b-2 border-gray rounded-md">
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
            <div class="border-b-2 border-gray rounded-md">
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
                  <button @click="toggleDrawer" class=" ">Open Drawer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide">
      <div v-if="showDrawer" class="h-[1000px] w-{500px} p-4 transition">
        <div class="flex justify-between">
          <h2 class="text-lg font-semibold mb-4">Product Configuration</h2>
          <button @click="toggleDrawer" class=" ">x</button>
        </div>

        <div class="grid gap-4">
          <div>
            <swiper
              :slidesPerView="4"
              :spaceBetween="1"
              direction="vertical"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="mySwiper w-[300px] h-[900px] flex"
            >
              <swiper-slide
                v-for="image in product.images"
                :key="image"
                direction="vertical"
                class="mySwiper"
              >
                <img
                  :src="image"
                  alt="Thumbnail"
                  class="w-56 h-56 object-cover rounded cursor-pointer border-2"
                  :class="
                    selectedImage === image
                      ? 'border-yellow-600'
                      : 'border-gray-300'
                  "
                  @click="selectedImage = image"
                />
              </swiper-slide>
            </swiper>
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
import { Pagination } from "swiper/modules";
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
      modules: [Pagination],
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
        configurationItems: [
          {
            name: "Pedestal",
            image: "../assets/kits/pedestal.jpg",
            details: "High-grade steel, 15x15x40 cm.",
          },
          {
            name: "Sink",
            image: "../assets/kits/sink.jpg",
            details: "Porcelain, 60x40x20 cm.",
          },
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
      showDrawer: false,
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

<style></style>
