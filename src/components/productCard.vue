<template>
  <section class="bg-white py-10" v-motion-slide-visible-bottom>
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center gap-8">
        <!-- Card Template -->

        <div
          v-for="i in 6"
          :key="i"
          class="relative w-full sm:w-64 md:w-72 lg:w-80 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
        >
          <!-- Image Section -->
          <div class="relative">
            <img
              src="../assets/image5.jpg"
              alt="Bathroom Set"
              class="w-full h-48 object-cover p-2 rounded-lg"
            />
            <!-- Heart Icon -->
            <div
              class="absolute top-2 right-2 p-2 w-10 h-10 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer transition duration-300"
            >
              <i
                class="fas fa-heart text-white hover:text-red-600 mx-1 w-16 h-16"
              ></i>
            </div>
          </div>

          <div class="p-6 text-center">
            <div class="flex align-middle text-center justify-between">
              <h3
                class="text-sm text-yellow-600 uppercase font-semibold tracking-wide"
              >
                Sensation
              </h3>
              <p class="text-sm text-gray-500">Code: 1234</p>
            </div>

            <div class="justify-start align-middle text-left">
              <h4 class="text-base font-semibold mt-1">
                Bathroom Set with Accessories
              </h4>

              <p class="text-base font-bold mt-3">$1,200.00</p>
            </div>

            <!-- Updated Button -->
            <div class="flex justify-between align-middle text-center my-4">
              <button
                class="w-56 h-10 bg-white border-black border hover:bg-yellow-600 text-black text-lg font-semibold rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-yellow-600 transition duration-300"
              >
                Buy Now
              </button>

              <button
                class="p-2 rounded-full bg-gray-100 shadow-md hover:bg-yellow-200 transition duration-300 border"
              >
                <i
                  class="fas fa-shopping-cart text-gray-600 hover:text-yellow-600"
                ></i>
              </button>
            </div>
          </div>

          <!-- Action Buttons -->
          <div
            class="absolute bottom-4 left-4 right-4 flex justify-between items-center px-4"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>

<style scoped>
/* Improve overall section spacing */
section {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

/* Ensure the card's hover effect is smooth */
.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

/* Specific adjustments to buttons for consistency */

/* Ensure images cover properly within the cards */
img {
  object-fit: cover;
}

/* Heart icon hover interaction */
i.fa-heart:hover {
  color: #dc2626; /* Red color */
}

/* Use gap for consistent card spacing */
.container {
  display: grid;
  gap: 2rem;
}

/* Mobile Responsiveness */
@media (max-width: 640px) {
  .container {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
}
</style>
