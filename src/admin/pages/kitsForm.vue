<template>
  <div class="container mx-auto py-6">
    <h1 class="text-3xl font-bold text-center mb-6">Kits List</h1>

    <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="border border-gray-300 px-4 py-2">ID</th>
            <th class="border border-gray-300 px-4 py-2">Item</th>
            <th class="border border-gray-300 px-4 py-2">Brand</th>
            <th class="border border-gray-300 px-4 py-2">Article Number</th>
            <th class="border border-gray-300 px-4 py-2">Configuration</th>
            <th class="border border-gray-300 px-4 py-2">Type</th>
            <th class="border border-gray-300 px-4 py-2">Name</th>
            <th class="border border-gray-300 px-4 py-2">Collection</th>
            <th class="border border-gray-300 px-4 py-2">Price</th>
            <th class="border border-gray-300 px-4 py-2">Qty</th>
            <th class="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="kit in kits" :key="kit.id">
            <td class="border border-gray-300 px-4 py-2">{{ kit.id }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ kit.item }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ kit.brand }}</td>
            <td class="border border-gray-300 px-4 py-2">
              {{ kit.articleNumber }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ kit.configuration }}
            </td>
            <td class="border border-gray-300 px-4 py-2">{{ kit.type }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ kit.name }}</td>
            <td class="border border-gray-300 px-4 py-2">
              {{ kit.collection }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ kit.price | currency }}
            </td>
            <td class="border border-gray-300 px-4 py-2">{{ kit.qty }}</td>
            <td class="border border-gray-300 px-4 py-2">
              <button
                @click="editKit(kit.id)"
                class="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                @click="deleteKit(kit.id)"
                class="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      kits: [],
    };
  },
  methods: {
    async fetchKits() {
      try {
        const response = await axios.get("http://localhost:3000/kits");
        this.kits = response.data;
      } catch (error) {
        console.error("Error fetching kits:", error);
      }
    },
    editKit(id) {
      this.$emit("edit", id);
    },
    async deleteKit(id) {
      try {
        await axios.delete(`http://localhost:3000/kits/${id}`);
        this.fetchKits(); // Refresh the list
      } catch (error) {
        console.error("Error deleting kit:", error);
      }
    },
  },
  mounted() {
    this.fetchKits();
  },
  filters: {
    currency(value) {
      if (!value) return "";
      return `$${parseFloat(value).toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
