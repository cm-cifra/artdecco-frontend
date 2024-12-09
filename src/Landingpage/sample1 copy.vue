<template>
  <div>
    <!-- Hero Section -->
    <header class="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div class="container mx-auto px-6 py-12 text-center">
        <h1 class="text-4xl font-bold md:text-6xl">
          Discover the Best Products at Amazing Prices!
        </h1>
        <p class="mt-4 text-lg">
          Quality items delivered right to your doorstep.
        </p>
        <button
          class="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100"
        >
          Shop Now
        </button>
      </div>
    </header>

    <!-- Featured Products Section -->
    <section class="container mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="product in featuredProducts"
          :key="product.id"
          class="border rounded-lg shadow-lg overflow-hidden"
        >
          <img
            :src="product.image"
            alt="product image"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold">{{ product.name }}</h3>
            <p class="text-gray-500">{{ product.description }}</p>
            <p class="mt-2 font-bold">${{ product.price }}</p>
            <button
              class="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div class="flex flex-wrap justify-center gap-6">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="bg-white rounded-lg p-6 shadow-lg"
          >
            <p class="italic">"{{ testimonial.text }}"</p>
            <h4 class="mt-4 font-bold">- {{ testimonial.name }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-6 text-center">
        <p>&copy; 2024 Your eCommerce. All Rights Reserved.</p>
        <p>
          <a href="#" class="text-blue-400 hover:underline">Privacy Policy</a> |
          <a href="#" class="text-blue-400 hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredProducts: [
        {
          id: 1,
          name: "Smartphone",
          description: "A high-end smartphone with amazing features.",
          price: 699,
          image: "https://via.placeholder.com/400x300",
        },
        {
          id: 2,
          name: "Wireless Headphones",
          description: "Noise-cancelling over-ear headphones.",
          price: 199,
          image: "https://via.placeholder.com/400x300",
        },
        {
          id: 3,
          name: "Smartwatch",
          description: "A sleek smartwatch with health tracking.",
          price: 149,
          image: "https://via.placeholder.com/400x300",
        },
      ],
      testimonials: [
        { id: 1, text: "Amazing quality and fast delivery!", name: "John D." },
        {
          id: 2,
          text: "The best online shopping experience.",
          name: "Jane S.",
        },
        { id: 3, text: "I love their customer service.", name: "Sam R." },
      ],
    };
  },
};
</script>

<style>
/* Add any custom styles here if needed */
</style>
