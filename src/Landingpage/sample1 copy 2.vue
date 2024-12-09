<template>
  <div class="font-sans bg-gray-50">
    <!-- Navbar -->
    <nav class="bg-white py-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center px-6">
        <a href="#" class="text-2xl font-bold text-gray-800">Kaffee</a>
        <ul class="flex space-x-6 text-gray-700">
          <li><a href="#" class="hover:text-gray-900">About us</a></li>
          <li><a href="#" class="hover:text-gray-900">Menu</a></li>
          <li><a href="#" class="hover:text-gray-900">Locations</a></li>
        </ul>
        <button
          class="px-4 py-2 bg-brown-500 text-white bg-red-500 font-semibold rounded-md hover:bg-brown-600"
        >
          Order Now
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <header
      class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12"
    >
      <!-- Text Content -->
      <div class="md:w-1/2 text-center md:text-left">
        <p class="flex items-center space-x-2 text-gray-700 text-sm mb-4">
          <span class="flex -space-x-2">
            <img
              src="https://via.placeholder.com/32"
              alt="avatar"
              class="w-8 h-8 rounded-full border border-white"
              v-for="n in 5"
              :key="n"
            />
          </span>
          <span class="font-semibold">5.0</span>
          <span>800+ happy customers</span>
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome! We serve a delightful variety of coffee!
        </h1>
        <p class="text-gray-600 mb-6">
          Experience the enticing aroma and savor the rich flavors of our
          carefully crafted artisanal coffees, meticulously sourced and expertly
          roasted.
        </p>
        <div class="space-x-4">
          <button
            class="px-6 py-3 bg-brown-500 text-white font-semibold rounded-md hover:bg-brown-600"
          >
            Order Now
          </button>
          <button
            class="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300"
          >
            Visit
          </button>
        </div>
      </div>

      <!-- Image Content -->
      <div class="md:w-1/2 flex justify-center">
        <div class="relative">
          <img
            src="https://via.placeholder.com/400x300"
            alt="coffee"
            class="rounded-lg shadow-lg"
          />
          <div
            class="absolute bottom-0 right-0 flex space-x-2 transform translate-y-2"
          >
            <img
              src="https://via.placeholder.com/80x80"
              alt="thumbnail"
              class="w-16 h-16 rounded-md border border-gray-300"
              v-for="n in 4"
              :key="n"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- Footer Section -->
    <footer class="bg-brown-500 text-white py-4">
      <div class="container mx-auto text-center">
        <p class="text-sm">Best coffee in town</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
/* Custom Tailwind Colors */
</style>
