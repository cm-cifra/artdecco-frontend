<template>
  <div>
    <!-- Header Component -->
    <Header />

    <!-- About Section -->
    <section class="bg-white py-12">
      <div class="container mx-auto px-4">
        <!-- Title -->
        <div class="text-center mb-8">
          <h1
            class="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide"
          >
            ABOUT ARTDECCO
          </h1>
        </div>

        <!-- Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Left Section -->
          <div class="space-y-6 text-center md:text-left">
            <h2 class="text-xl md:text-2xl font-semibold text-gray-800">
              {{ about.title }}
            </h2>
            <p class="text-gray-600 leading-relaxed">
              {{ about.description }}
            </p>
            <button
              class="bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700 transition"
            >
              {{ about.buttonText }}
            </button>
          </div>

          <!-- Image and Stats Section -->
          <div class="flex flex-col items-center md:items-start space-y-6">
            <img
              src="../assets/image3.jpg"
              alt="Office image"
              class="rounded-lg shadow-md w-full md:w-full"
            />
            <div class="grid grid-cols-2 gap-4 w-full">
              <div class="bg-yellow-100 p-6 rounded-lg shadow-sm text-center">
                <h2 class="text-3xl font-bold text-yellow-600">80</h2>
                <p class="text-gray-700">Service Centers</p>
              </div>
              <div class="bg-yellow-100 p-6 rounded-lg shadow-sm text-center">
                <h2 class="text-3xl font-bold text-yellow-600">1M+</h2>
                <p class="text-gray-700">Clients worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Carousel Section -->
    <section
      class="relative bg-cover bg-center bg-no-repeat h-[50vh] md:h-[30vh] flex items-center justify-center"
      style="background-image: url('../../assets/Carousel.jpg')"
    >
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"
      ></div>

      <!-- Text Content -->
      <div class="relative text-center text-white space-y-4">
        <div>
          <h1 class="text-3xl md:text-5xl font-bold text-yellow-600">100+</h1>
          <p class="text-lg md:text-xl">Design awards for 13 years</p>
        </div>
        <div>
          <h1 class="text-3xl md:text-5xl font-bold text-yellow-600">20+</h1>
          <p class="text-lg md:text-xl">Countries where you can buy ArtDecco</p>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <!-- Title Section -->
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Benefits
        </h2>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="flex flex-col items-center text-center space-y-4"
          >
            <!-- Icon -->
            <div
              class="w-20 h-20 flex items-center justify-center bg-yellow-600 rounded-full text-white mb-6"
            >
              <img :src="benefit.icon" alt="Icon" class="w-10 h-10" />
            </div>
            <!-- Title -->
            <h3 class="text-xl font-semibold">{{ benefit.title }}</h3>
            <!-- Description -->
            <p class="text-gray-600 leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "About",
  data() {
    return {
      about: {
        title: "Without Unnecessary Modesty",
        description:
          "Perfection, style, uniqueness – the characteristic signature of ARTDECCO products. Founded in 2010 in Germany, ARTDECCO has become the most dynamic brand in the industry, reflected in dozens of prestigious international design awards and millions of satisfied customers. Combining the best technology with emotional design, ARTDECCO creates inspiring products that everyone can afford.",
        buttonText: "CONTACT WITH US",
      },
      benefits: [
        {
          icon: "../assets/delivery2.jpg",
          title: "Free Shipping",
          description:
            "Free delivery for orders over 7,000 rubles in Moscow and St. Petersburg.",
        },
        {
          icon: "../assets/delivery2.jpg",
          title: "Faster Delivery",
          description: "Items delivered are in faster pace.",
        },
        {
          icon: "../assets/delivery2.jpg",
          title: "Cumulative Discount",
          description:
            "Take advantage of a substantial regular customer discount, depending on the amount of previous purchases.",
        },
        {
          icon: "../assets/delivery.png",
          title: "Discount for Prepayment",
          description:
            "The price is even more favorable with prepayment of 2 or more items.",
        },
        {
          icon: "../assets/delivery.png",
          title: "100 Days of Return",
          description:
            "Changed your mind? You have 100 days to exchange or return the item as long as it is in good condition.",
        },
        {
          icon: "../assets/delivery.png",
          title: "Found it Cheaper?",
          description:
            "Found a product cheaper on another site? Send us a link, and we will consider reducing our price.",
        },
      ],
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
}

/* Ensure sections have enough padding */
section {
  padding: 2rem 1rem;
}
</style>
