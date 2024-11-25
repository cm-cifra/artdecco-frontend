<template>
  <div>
    <!-- Header Component -->
    <Header />

    <!-- Catalog Section -->
    <Category />

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Category from "@/components/category.vue";

export default {
  name: "Catalog",
  components: {
    Header,
    Footer,
    Category,
  },
};
</script>

<style scoped>
/* Add hover effect */
.group:hover img {
  transform: scale(1.1);
}

.group:hover .opacity-0 {
  opacity: 1;
}

.transition-transform {
  transition: transform 0.3s ease-in-out;
}

.transition-opacity {
  transition: opacity 0.3s ease-in-out;
}

/* Make the grid items taller */
@media (min-width: 640px) {
  .grid > div {
    height: 300px; /* Adjust this height as necessary */
  }
}

@media (min-width: 1024px) {
  .grid > div {
    height: 350px; /* Taller height for larger screens */
  }
}
</style>
