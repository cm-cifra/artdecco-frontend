<template>
  <div class="h-screen bg-gray-100 flex flex-col w-64 p-4 border-r">
    <img src="../../assets/artdecco2.jpg" alt="" />
    <nav class="mt-8">
      <ul>
        <li class="mb-4 justify-start flex align-middle">
          <a
            href="#"
            class="flex items-center space-x-3 text-gray-700 hover:text-orange-600"
            ><i class="fas fa-table-columns"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li class="mb-4 justify-start flex align-middle">
          <a
            href="#"
            class="flex items-center space-x-3 text-gray-700 hover:text-orange-600"
            ><i class="fas fa-list"></i>
            <span>View Product</span>
          </a>
        </li>
        <li class="mb-4">
          <div
            @click="toggleAddProductSubmenu"
            class="flex items-center justify-between cursor-pointer text-gray-700 hover:text-orange-600"
          >
            <div class="flex items-center space-x-3">
              <i class="fas fa-list"></i>
              <span>Add Product</span>
            </div>
            <i
              :class="{
                'fas fa-chevron-down': !isAddProductSubmenuVisible,
                'fas fa-chevron-up': isAddProductSubmenuVisible,
              }"
            ></i>
          </div>
          <ul
            v-if="isAddProductSubmenuVisible"
            class="mt-2 pl-6 text-sm space-y-2 text-gray-600"
          >
            <li>
              <a href="#" class="hover:text-orange-600">Add New Accessories</a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-600">Add New kits</a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-600">Add New Cabinets</a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-600"
                >Add New countertop sink</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-orange-600"
                >Add New Mirrors and mirror cabinets</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-orange-600"
                >Faucets and Shower Systems</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-orange-600">Kitchen sink</a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-600"
                >Baths for the disabled</a
              >
            </li>

            <li>
              <a href="#" class="hover:text-orange-600">Bulk Upload</a>
            </li>
          </ul>
        </li>
        <li class="mb-4 justify-start flex align-middle">
          <a
            href="#"
            class="flex items-center space-x-3 text-gray-700 hover:text-orange-600"
            ><i class="fas fa-layer-group"></i>
            <span>Collection</span>
          </a>
        </li>
        <li class="mb-4 justify-start flex align-middle">
          <a
            href="#"
            class="flex items-center space-x-3 text-gray-700 hover:text-orange-600"
            ><i class="fas fa-boxes-stacked"></i>
            <span>Inventory</span>
          </a>
        </li>
        <li class="mb-4 justify-start flex align-middle">
          <a
            href="#"
            class="flex items-center space-x-3 text-gray-700 hover:text-orange-600"
            ><i class="fas fa-cart-shopping"></i>
            <span>Orders</span>
          </a>
        </li>
        <li class="mb-4 justify-start flex align-middle">
          <a
            href="#"
            class="flex items-center space-x-3 text-gray-700 hover:text-orange-600"
            ><i class="fas fa-chart-simple"></i>
            <span>Analytics</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isAddProductSubmenuVisible: false,
    };
  },
  methods: {
    toggleAddProductSubmenu() {
      this.isAddProductSubmenuVisible = !this.isAddProductSubmenuVisible;
    },
  },
};
</script>
