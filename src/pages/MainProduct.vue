<template>
  <Header />
  <section>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <div class="w-64 bg-white text-black flex-shrink-0">
        <h2 class="text-xl font-bold p-4 border-b border-yellow-700">
          Categories
        </h2>
        <ul>
          <li
            v-for="category in categories"
            :key="category.id"
            @click="filterByCategory(category.id)"
            class="p-4 hover:bg-yellow-700 cursor-pointer"
          >
            {{ category.description }}
          </li>
        </ul>
      </div>
      api
      <!-- Main Content -->
      <div class="flex-1 p-6 overflow-auto text-black">
        <h1 class="text-2xl font-bold mb-6">Products</h1>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black"
        >
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-lg shadow-lg p-4 relative border border-gray-300 hover:shadow-xl transition-all"
          >
            <!-- Free Installation Badge -->
            <span
              v-if="product.free_installation"
              class="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded"
            >
              Free installation
            </span>

            <!-- Product Image -->
            <img
              :src="product.product_img"
              alt="Product Image"
              class="w-full h-800 object-cover rounded-lg mb-4"
            />
            <div
              @click="toggleLike(product)"
              class="absolute top-5 right-5 p-2 pb-1 bg-white rounded-full shadow hover:bg-gray-200 cursor-pointer transition"
            >
              <i
                class="fas fa-heart text-gray-400 hover:text-red-500 text-xl"
                :class="product.isLiked ? 'text-red-500' : 'text-gray-500'"
              ></i>
            </div>

            <!-- Product Name -->
            <h2 class="text-lg font-semibold mb-2">{{ product.name }}</h2>

            <!-- Product Code -->
            <p class="text-gray-500 text-sm mb-2">
              Code: {{ product.article_num }}
            </p>

            <!-- Price and Discount -->

            <!-- Cashback and Split Payment Info -->
            <div class="text-gray-600 text-sm mb-4 flex flex-col gap-1">
              <p v-if="product.cashback" class="cashback-text">
                {{ product.cashback }} Plus points cashback
              </p>
              <p v-if="product.split_payment" class="split-payment-text">
                {{ product.split_payment }} ₽ x 4 payments
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="mt-4">
              <button
                v-if="product.in_stock"
                class="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 w-full transition-all"
              >
                Add to cart
              </button>
              <button
                v-else
                class="bg-white text-black py-2 px-4 rounded-md w-full border shadow-md"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      products: [],
      categories: [],
      filteredProducts: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const productsResponse = await axios.get(
          `http://localhost:3000/products/get`
        );
        const categoriesResponse = await axios.get(
          "http://localhost:3000/categories/get_all"
        );

        this.products = Array.isArray(productsResponse.data)
          ? productsResponse.data
          : productsResponse.data.products;

        this.categories = Array.isArray(categoriesResponse.data)
          ? categoriesResponse.data
          : categoriesResponse.data.categories;

        // Filter products by category_id = 1
        this.filteredProducts = this.products.filter(
          (product) => product.category_id === 1
        );

        // Initialize isLiked flag
        this.filteredProducts = this.filteredProducts.map((product) => ({
          ...product,
          isLiked: false,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    toggleLike(product) {
      product.isLiked = !product.isLiked;
    },
  },

  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
/* Heart icon button styling */
button {
  position: relative;
}

button:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
</style>
