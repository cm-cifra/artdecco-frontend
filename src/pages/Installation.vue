<template>
  <div>
    <!-- Header Component -->
    <Header />

    <!-- About Section -->
    <section class="bg-white py-12">
      <div class="container mx-auto px-4">
        <!-- Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Left Section -->
          <div class="space-y-6 text-center md:text-left">
            <h2 class="text-2xl md:text-3xl font-semibold text-gray-800">
              {{ about.title }}
            </h2>
            <p class="text-gray-600 leading-relaxed">
              {{ about.description }}
            </p>
          </div>

          <!-- Image and Stats Section -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Dynamic Installations -->
            <div
              v-for="(installation, index) in 5"
              :key="index"
              class="border shadow-md p-6 rounded-lg text-center flex flex-col items-center justify-between"
            >
              <p class="text-gray-700 font-medium">
                Installation #{{ index + 1 }}
              </p>
              <h2 class="text-xl font-semibold text-gray-800">$3.00</h2>
              <button
                class="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-300"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ArtDecco Section -->
    <section class="bg-gray-50 py-12 px-6 text-center">
      <h2 class="text-2xl md:text-4xl font-bold mb-6">
        ArtDecco plumbing in your home after installation
      </h2>
      <p class="text-gray-700 max-w-4xl mx-auto mb-4 leading-relaxed">
        ArtDecco's own service department provides hundreds of installations per
        month. Trained craftsmen will professionally install plumbing equipment
        and help arrange an electronic guarantee for the work performed.
      </p>
      <p class="text-gray-600">Thank you for choosing us!</p>
    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Installation",
  data() {
    return {
      about: {
        title: "LIST OF INSTALLATION SERVICES",
        description:
          "Installation All installation services Installation of toilet, bidet, sink Bathroom furniture installation Installation of shower equipment Installation of an acrylic bathtub Installing a mixer List of additional services/works not included in the standard branded installation   ",
      },
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* Responsive image styling */
img {
  max-width: 100%;
  height: auto;
}

/* Add hover effects for buttons */
button:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* Ensure sections have enough padding */
section {
  padding: 2rem 1rem;
}

/* For smaller screens */
@media (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.9rem;
  }
  button {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
}

/* For larger screens */
@media (min-width: 1024px) {
  section {
    padding: 4rem 2rem;
  }
}
</style>
