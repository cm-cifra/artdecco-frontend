<template>
  <div class="container mx-auto py-4">
    <h1 class="text-2xl font-bold mb-4">Accessories List</h1>
    <a href="/add" class="bg-blue-500 text-white px-4 py-2 rounded mb-4">
      Add Accessory
    </a>
    <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="border border-gray-300 px-4 py-2">ID</th>
            <th class="border border-gray-300 px-4 py-2">Item</th>
            <th class="border border-gray-300 px-4 py-2">Article number</th>
            <th class="border border-gray-300 px-4 py-2">Collection</th>
            <th class="border border-gray-300 px-4 py-2">Name</th>
            <th class="border border-gray-300 px-4 py-2">Equipment</th>
            <th class="border border-gray-300 px-4 py-2">Style</th>
            <th class="border border-gray-300 px-4 py-2">Color</th>
            <th class="border border-gray-300 px-4 py-2">Dimensions</th>
            <th class="border border-gray-300 px-4 py-2">Surface</th>
            <th class="border border-gray-300 px-4 py-2">Material</th>
            <th class="border border-gray-300 px-4 py-2">
              Product Weight (kg)
            </th>
            <th class="border border-gray-300 px-4 py-2">
              Package Weight (kg)
            </th>
            <th class="border border-gray-300 px-4 py-2">Guarantee</th>
            <th class="border border-gray-300 px-4 py-2">Photo</th>
            <th class="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="accessory in accessories" :key="accessory.id">
            <td class="border border-gray-300 px-4 py-2">{{ accessory.id }}</td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.item }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.articleNumber }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.collection }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.name }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.productEquipment }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.style }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.color }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.dimensions }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.surface }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.material }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.productWeightKg }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.packageWeightKg }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.guarantee }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              {{ accessory.photo }}
            </td>
            <td class="border border-gray-300 px-4 py-2">
              <button
                @click="editAccessory(accessory.id)"
                class="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                @click="deleteAccessory(accessory.id)"
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
      accessories: [],
    };
  },
  methods: {
    async fetchAccessories() {
      try {
        const response = await axios.get("http://localhost:3000/accessories");
        this.accessories = response.data;
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    },
    createAccessory() {
      this.$emit("create");
    },
    editAccessory(id) {
      this.$emit("edit", id);
    },
    async deleteAccessory(id) {
      try {
        await axios.delete(`http://localhost:3000/accessories/${id}`);
        this.fetchAccessories(); // Refresh the list
      } catch (error) {
        console.error("Error deleting accessory:", error);
      }
    },
  },
  mounted() {
    this.fetchAccessories();
  },
};
</script>
