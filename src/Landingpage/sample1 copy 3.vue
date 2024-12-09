<template>
  <div class="font-sans bg-gray-50">
    <!-- Navbar -->
    <nav class="bg-white py-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center px-6">
        <a href="#" class="text-2xl font-bold text-gray-800 tracking-wide"
          >EUPO</a
        >
        <ul class="flex space-x-6 text-gray-700">
          <li><a href="#" class="hover:text-gray-900">Home</a></li>
          <li><a href="#" class="hover:text-gray-900">Shop</a></li>
          <li><a href="#" class="hover:text-gray-900">Collections</a></li>
          <li><a href="#" class="hover:text-gray-900">About</a></li>
          <li><a href="#" class="hover:text-gray-900">Contact Us</a></li>
        </ul>
        <div class="flex items-center space-x-4">
          <a href="#" class="text-gray-700 hover:text-gray-900">
            <i class="fas fa-shopping-cart"></i>
          </a>
          <a href="#" class="text-gray-700 hover:text-gray-900">
            <i class="fas fa-user-circle"></i>
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative bg-gray-100">
      <div
        class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center"
      >
        <!-- Text Section -->
        <div class="md:w-2/3 text-center md:text-left">
          <h1 class="text-6xl font-bold text-gray-900 leading-tight mb-6">
            Furniture For <br />
            <span class="text-gray-700">Now or Forever</span>
          </h1>
        </div>
        <!-- Image Section -->
        <div class="md:w-1/3 flex justify-center">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Furniture"
            class="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </header>

    <!-- Filter Section -->
    <section class="bg-white shadow-md">
      <div class="container mx-auto px-6 py-6">
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <!-- Made By Dropdown -->
          <div class="w-full md:w-auto">
            <label class="block text-gray-600 mb-2 text-sm font-semibold"
              >Made By</label
            >
            <select
              class="w-full md:w-48 border-gray-300 rounded-lg shadow-sm p-2"
            >
              <option value="wood">Wood</option>
              <option value="metal">Metal</option>
              <option value="plastic">Plastic</option>
            </select>
          </div>

          <!-- Select Type Dropdown -->
          <div class="w-full md:w-auto">
            <label class="block text-gray-600 mb-2 text-sm font-semibold"
              >Select Type</label
            >
            <select
              class="w-full md:w-48 border-gray-300 rounded-lg shadow-sm p-2"
            >
              <option value="sofa">Sofa</option>
              <option value="table">Table</option>
              <option value="chair">Chair</option>
            </select>
          </div>

          <!-- Price Dropdown -->
          <div class="w-full md:w-auto">
            <label class="block text-gray-600 mb-2 text-sm font-semibold"
              >Price</label
            >
            <select
              class="w-full md:w-48 border-gray-300 rounded-lg shadow-sm p-2"
            >
              <option value="range1">$129 - $259</option>
              <option value="range2">$260 - $359</option>
              <option value="range3">$360+</option>
            </select>
          </div>

          <!-- Search Button -->
          <div class="w-full md:w-auto">
            <button
              class="w-full md:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Add any additional global styles here */
</style>
