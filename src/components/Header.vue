<template>
  <div>
    <!-- Fixed Header -->
    <header class="bg-black text-white py-4 fixed top-0 left-0 w-full z-50">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex space-x-4 items-center justify-center">
          <router-link
            to="/"
            class="flex items-center justify-center font-mono"
          >
            <img src="../assets/logo.jpg" alt="ArtDecco Logo" class="h-8" />
            <img
              src="../assets/artdecco.jpg"
              alt="ArtDecco Logo"
              class="h-10 mx-2"
            />
          </router-link>
        </div>
        <div class="flex space-x-4 items-center">
          <div class="flex items-center space-x-4">
            <button
              class="p-0 hover:scale-110 transform transition duration-300 ease-in-out"
            >
              <i class="fas fa-shopping-cart w-6 h-6 text-white"></i>
            </button>
            <button
              class="p-0 hover:scale-110 transform transition duration-300 ease-in-out"
            >
              <i class="fas fa-heart w-6 h-6 text-white"></i>
            </button>
            <button
              class="text-sm hover:underline hover:text-gray-300 transition duration-300 hidden md:inline-block"
            >
              Sign In
            </button>
            <!-- Hamburger Icon for Mobile -->
            <button
              @click="toggleMobileMenu"
              class="block md:hidden focus:outline-none"
            >
              <i
                :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"
                class="text-white text-2xl"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Secondary Header Section -->
    <header class="text-black bg-white mt-20 fixed -top-5 left-0 w-full z-40">
      <div class="container mx-auto flex justify-center items-center">
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8 text-xs uppercase tracking-wide">
          <router-link
            to="/installation"
            class="p-3 border-gray-500 border-opacity-40 border-2 m-5 rounded-3xl transition duration-300 ease-in-out px-12"
            active-class="bg-yellow-600 text-white"
            exact-active-class="bg-yellow-600 text-white"
          >
            Corporate Installation
          </router-link>
          <router-link
            to="/collection"
            class="p-3 border-gray-500 border-opacity-40 border-2 m-5 rounded-3xl transition duration-300 ease-in-out px-12"
            active-class="bg-yellow-600 text-white"
            exact-active-class="bg-yellow-600 text-white"
          >
            Collection
          </router-link>
          <router-link
            to="/catalog"
            class="p-3 border-gray-500 border-opacity-40 border-2 m-5 rounded-3xl transition duration-300 ease-in-out px-12"
            active-class="bg-yellow-600 text-white"
            exact-active-class="bg-yellow-600 text-white"
          >
            Catalogs
          </router-link>
          <router-link
            to="/stock"
            class="p-3 border-gray-500 border-opacity-40 border-2 m-5 rounded-3xl transition duration-300 ease-in-out px-12"
            active-class="bg-yellow-600 text-white"
            exact-active-class="bg-yellow-600 text-white"
          >
            Stocks
          </router-link>
          <router-link
            to="/about"
            class="p-3 border-gray-500 border-opacity-40 border-2 m-5 rounded-3xl transition duration-300 ease-in-out px-12"
            active-class="bg-yellow-600 text-white"
            exact-active-class="bg-yellow-600 text-white"
          >
            About Us
          </router-link>
        </nav>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="bg-black md:hidden flex flex-col items-center space-y-4 py-4"
      >
        <router-link
          to="/collection"
          class="text-white hover:text-gray-300 transition duration-300"
          active-class="text-yellow-600"
        >
          Collection
        </router-link>
        <router-link
          to="/carousel"
          class="text-white hover:text-gray-300 transition duration-300"
          active-class="text-yellow-600"
        >
          Carousel
        </router-link>
        <router-link
          to="/about"
          class="text-white hover:text-gray-300 transition duration-300"
          active-class="text-yellow-600"
        >
          About Us
        </router-link>
        <router-link
          to="/stock"
          class="text-white hover:text-gray-300 transition duration-300"
          active-class="text-yellow-600"
        >
          Stocks
        </router-link>
      </div>
    </header>

    <!-- Content Placeholder -->
    <main class="pt-48">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Fixed header padding adjustment */
main {
  padding-top: 4rem;
}

@media (max-width: 768px) {
  main {
    padding-top: 6rem;
  }
}

/* Ensure the mobile menu transitions smoothly */
@media (max-width: 768px) {
  .mobile-menu {
    transition: height 0.3s ease-in-out;
  }
}
</style>
