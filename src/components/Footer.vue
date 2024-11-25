<template>
  <footer class="bg-black text-white p-8">
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0"
    >
      <!-- Left Section: Logo and Copyright -->
      <div
        class="flex flex-col items-center md:items-start text-center md:text-left space-y-2"
      >
        <img src="../assets/logo.jpg" alt="Logo" class="w-32 md:w-40" />
        <p class="text-sm opacity-70">
          &copy; 2024 Reserve. All Rights Reserved.
        </p>
      </div>

      <!-- Right Section: Contact Information -->
      <div class="space-y-4 text-center md:text-right">
        <h1 class="text-xl font-semibold hover:text-yellow-600 cursor-pointer">
          Contact
        </h1>
        <p class="hover:text-yellow-600 cursor-pointer">
          <strong>Phone:</strong> +7(499) 229-55-55
        </p>
        <p class="text-sm opacity-80 hover:text-yellow-600 cursor-pointer">
          <strong>Working Hours:</strong> Daily from 10:00 to 20:00 (Moscow
          Time)
        </p>
        <p class="text-sm opacity-80 hover:text-yellow-600 cursor-pointer">
          <strong>WhatsApp MSC:</strong> 79140032403
        </p>
        <p class="text-sm opacity-80 hover:text-yellow-600 cursor-pointer">
          <strong>WhatsApp SP9:</strong> 7943092032
        </p>

        <p
          class="flex items-center justify-center md:justify-end space-x-2 hover:text-yellow-600 cursor-pointer"
        >
          <i class="fas fa-envelope"></i>
          <span>mail@artdecco.com</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Styling for the footer */
footer {
  background-color: #1a1a1a;
}

footer h1,
footer p {
  transition: color 0.3s ease;
}

footer .hover\:text-yellow-600:hover {
  color: #fbbf24; /* Yellow color */
}

footer .text-sm {
  font-size: 0.875rem; /* Smaller font size for secondary info */
}

footer .opacity-70 {
  opacity: 0.7;
}

footer .opacity-80 {
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  footer .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  footer .space-y-8 {
    margin-top: 1rem;
  }
}
</style>
