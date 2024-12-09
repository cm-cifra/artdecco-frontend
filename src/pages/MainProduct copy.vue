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

            <!-- Heart Icon -->
            <button
              class="absolute top-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
              @click="toggleLike(product)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                :class="product.isLiked ? 'text-red-500' : 'text-gray-500'"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41.81 4.5 2.09C11.09 5.81 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>

            <!-- Product Image -->
            <img
              :src="product.product_img"
              alt="Product Image"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />

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
