<template>
  <Header />
  <Carousel />
  <section></section>
  <section>
    <div class="bg-gray-50 p-4">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Sidebar -->
        <div class="w-full md:w-1/4 bg-white shadow rounded p-4">
          <h2 class="font-bold text-lg mb-4">All promotional items</h2>
          <ul class="space-y-2">
            <li class="font-semibold text-gray-700">Stock Hits</li>
            <li class="font-semibold text-gray-700">Discounted Goods</li>
          </ul>
          <h3 class="font-bold text-lg mt-6 mb-4">Category</h3>
          <ul class="space-y-2">
            <li class="text-gray-600">Bathroom Furniture</li>
            <li class="text-gray-600">Tiles</li>
            <li class="text-gray-600">Shower Accessories</li>
            <!-- Add more categories -->
          </ul>
        </div>
        <div class="w-full">
          <!-- Product Card -->
          <ProductCard />
        </div>
      </div>
    </div>
  </section>
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

  data() {
    return {
      products: [
        {
          name: "Bathroom Set with Accessories",
          code: "1234",
          price: "1,300.00",
          image: "path/to/image.jpg",
          isNew: true,
          isPreOrder: true,
        },
        {
          name: "Modern Automatic Shower Set",
          code: "6324",
          price: "300.00",
          image: "path/to/image2.jpg",
          isNew: true,
          isPreOrder: false,
        },
        // Add more products
      ],
    };
  },
};
</script>
