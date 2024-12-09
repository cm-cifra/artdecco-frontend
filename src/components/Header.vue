<template>
  <div>
    <!-- Fixed Header -->
    <header
      class="bg-black text-white py-4 fixed top-0 left-0 w-full z-50 h-16"
    >
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
    <header
      class="text-black bg-white mt-16 fixed left-0 w-full z-40 shadow p-7 h-20"
    >
      <div class="container mx-auto flex justify-center items-center">
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8 text-xs uppercase tracking-wide">
          <div v-for="(link, index) in links" :key="index" class="relative">
            <router-link
              :to="link.to"
              class="p-3 border-gray-500 border-opacity-40 border-2 m-5 rounded-3xl transition duration-300 ease-in-out px-12 hover:bg-yellow-300 hover:text-white hover:border-white"
              active-class="bg-yellow-600 text-white"
              exact-active-class="bg-yellow-600 text-white"
              @mouseover="showForm = index"
              @mouseleave="showForm = null"
            >
              {{ link.label }}
            </router-link>

            <!-- Form Card -->
            <div
              v-if="showForm === index"
              class="absolute top-full left-0 mt-2 w-64 p-4 bg-white shadow-lg rounded-md border border-gray-300 z-10"
            ></div>
          </div>
        </nav>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="bg-black md:hidden flex flex-col items-center space-y-4 py-4 m-16"
      >
        <div v-for="(link, index) in links" :key="index">
          <router-link
            :to="link.to"
            class="text-white hover:text-gray-300 transition duration-300"
            active-class="text-yellow-600  "
          >
            {{ link.label }}
          </router-link>
        </div>
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
      showForm: null, // Tracks the index of the link that is hovered over
      links: [
        { to: "/installation", label: "Corporate Installation" },
        { to: "/collection", label: "Collection" },
        { to: "/catalog", label: "Catalogs" },
        { to: "/stock", label: "Stocks" },
        { to: "/about", label: "About Us" },
      ],
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

/* Ensure the form card is hidden initially and smoothly appears */
.form-card {
  display: none;
  transition: opacity 0.3s ease-in-out;
}
</style>
