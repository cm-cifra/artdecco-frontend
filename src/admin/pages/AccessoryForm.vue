can you update this that can store data to backend using sheet or csv
<template>
  <div class="container mx-auto py-8 px-4 max-w-3xl bg-white shadow-md rounded">
    <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">
      {{ isEditing ? "Edit Accessory" : "Add Accessory" }}
    </h1>
    <form @submit.prevent="saveAccessory" class="space-y-6">
      <div class="col-span-2 flex justify-between gap-2">
        <div>
          <!-- 1st cols-->
          <div>
            <!-- Photo -->

            <div>
              <label
                for="photo"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Photo (URL or Upload)
              </label>
              <input
                v-model="accessory.photo"
                id="photo"
                type="text"
                placeholder="Enter photo URL or upload image"
                class="input-field"
              />
              <!-- Image Upload -->
              <input
                type="file"
                accept="image/*"
                @change="handleImageUpload"
                class="mt-2"
              />
            </div>
            <!-- Item -->
            <div>
              <label
                for="item"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Item
              </label>
              <input
                v-model="accessory.item"
                id="item"
                type="text"
                placeholder="Enter item"
                class="input-field"
              />
            </div>
            <!-- Name -->
            <div>
              <label
                for="name"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                v-model="accessory.name"
                id="name"
                type="text"
                placeholder="Enter name"
                class="input-field"
              />
            </div>
            <!-- Product Equipment -->
            <div>
              <label
                for="productEquipment"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Product (Equipment)
              </label>
              <input
                v-model="accessory.productEquipment"
                id="productEquipment"
                type="text"
                placeholder="Enter product equipment"
                class="input-field"
              />
            </div>
            <div class="col-span-2 flex justify-between gap-2">
              <!-- Style -->
              <div>
                <label
                  for="style"
                  class="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Style
                </label>
                <input
                  v-model="accessory.style"
                  id="style"
                  type="text"
                  placeholder="Enter style"
                  class="input-field"
                />
              </div>
              <!-- Color -->
              <div>
                <label
                  for="color"
                  class="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Color
                </label>
                <input
                  v-model="accessory.color"
                  id="color"
                  type="text"
                  placeholder="Enter color"
                  class="input-field"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <!-- 2nd cols-->
          <div class="col-span-2 flex justify-between gap-2">
            <!-- Dimensions -->
            <div>
              <label
                for="dimensions"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Dimensions (W * D * H)
              </label>
              <input
                v-model="accessory.dimensions"
                id="dimensions"
                type="text"
                placeholder="Enter dimensions"
                class="input-field"
              />
            </div>
            <!-- Surface -->
            <div>
              <label
                for="surface"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Surface
              </label>
              <input
                v-model="accessory.surface"
                id="surface"
                type="text"
                placeholder="Enter surface"
                class="input-field"
              />
            </div>
          </div>
          <div class="col-span-2 flex justify-between gap-2">
            <!-- Material -->
            <div>
              <label
                for="material"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Material
              </label>
              <input
                v-model="accessory.material"
                id="material"
                type="text"
                placeholder="Enter material"
                class="input-field"
              />
            </div>
            <!-- Article Number -->
            <div>
              <label
                for="articleNumber"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Article Number
              </label>
              <input
                v-model="accessory.articleNumber"
                id="articleNumber"
                type="text"
                placeholder="Enter article number"
                class="input-field"
              />
            </div>
          </div>
          <div class="col-span-2 flex justify-between gap-2">
            <!-- Collection -->
            <div>
              <label
                for="collection"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Collection
              </label>
              <input
                v-model="accessory.collection"
                id="collection"
                type="text"
                placeholder="Enter collection"
                class="input-field"
              />
            </div>

            <!-- Product Weight -->
            <div>
              <label
                for="productWeightKg"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Product Weight (Kg)
              </label>
              <input
                v-model="accessory.productWeightKg"
                id="productWeightKg"
                type="text"
                placeholder="Enter product weight"
                class="input-field"
              />
            </div>
          </div>
          <div class="col-span-2 flex justify-between gap-2">
            <!-- Package Weight -->
            <div>
              <label
                for="packageWeightKg"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Package Weight (Kg)
              </label>
              <input
                v-model="accessory.packageWeightKg"
                id="packageWeightKg"
                type="text"
                placeholder="Enter package weight"
                class="input-field"
              />
            </div>
            <!-- Guarantee -->
            <div>
              <label
                for="guarantee"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Guarantee
              </label>
              <input
                v-model="accessory.guarantee"
                id="guarantee"
                type="text"
                placeholder="Enter guarantee"
                class="input-field"
              />
            </div>
          </div>
          <div>
            <!-- Buttons -->
            <div class="space-x-4 align-middle justify-center flex my-5">
              <button
                type="button"
                v-if="isEditing"
                @click="$emit('cancel')"
                class="bg-gray-200 text-gray-700 px-4 py-2 w-56 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="bg-yellow-600 text-white px-4 py-2 w-56 rounded hover:bg-yellow-700"
              >
                {{ isEditing ? "Update" : "Save" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  <!-- Bulk Upload Section -->

  <div class="container mx-auto py-8 px-4 max-w-3xl bg-white shadow-md rounded">
    <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">
      {{ isEditing ? "Edit Accessory" : "Add Accessory" }}
    </h1>
    <form @submit.prevent="saveAccessory" class="space-y-6">
      <div class="col-span-2 flex justify-between gap-2">
        <div>
          <!-- 1st cols-->
          <div>
            <!-- Photo -->
            <div>
              <label
                for="photo"
                class="block text-sm font-semibold text-gray-700 mb-1"
              >
                Photo (URL or Upload)
              </label>
              <input
                v-model="accessory.photo"
                id="photo"
                type="text"
                placeholder="Enter photo URL or upload image"
                class="input-field"
              />
              <!-- Image Upload -->
              <input
                type="file"
                accept="image/*"
                @change="handleImageUpload"
                class="mt-2"
              />
            </div>
            <!-- Other fields (Item, Name, etc.) -->
            <!-- Similar fields as before, such as item, name, collection, etc. -->
          </div>
        </div>
      </div>
      <div class="space-x-4 align-middle justify-center flex my-5">
        <button
          type="button"
          v-if="isEditing"
          @click="$emit('cancel')"
          class="bg-gray-200 text-gray-700 px-4 py-2 w-56 rounded hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="bg-yellow-600 text-white px-4 py-2 w-56 rounded hover:bg-yellow-700"
        >
          {{ isEditing ? "Update" : "Save" }}
        </button>
      </div>
    </form>
  </div>

  <!-- Bulk Upload Section -->
</template>

<script>
import axios from "axios";
import Papa from "papaparse";

export default {
  props: ["id"],
  data() {
    return {
      isEditing: false,
      accessory: {
        item: "",
        articleNumber: "",
        collection: "",
        name: "",
        productEquipment: "",
        style: "",
        color: "",
        dimensions: "",
        surface: "",
        material: "",
        productWeightKg: "",
        packageWeightKg: "",
        guarantee: "",
        photo: "",
      },
      file: null,
      uploadProgress: null,
      uploadError: null,
    };
  },
  methods: {
    // Fetch an existing accessory when editing
    async fetchAccessory() {
      if (this.id) {
        this.isEditing = true;
        try {
          const response = await axios.get(
            `http://localhost:3000/accessories/${this.id}`
          );
          this.accessory = response.data;
        } catch (error) {
          console.error("Error fetching accessory:", error);
        }
      }
    },

    // Handle image upload (store image in backend and retrieve filename)
    async handleImageUpload(event) {
      const formData = new FormData();
      formData.append("file", event.target.files[0]);

      try {
        const response = await axios.post(
          "http://localhost:3000/accessories/upload-photo",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // Set the photo field to the filename or path returned by the server
        this.accessory.photo = response.data.filePath;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    },

    // Save a new or existing accessory
    async saveAccessory() {
      try {
        if (this.isEditing) {
          await axios.put(
            `http://localhost:3000/accessories/${this.id}`,
            this.accessory
          );
        } else {
          await axios.post("http://localhost:3000/accessories", this.accessory);
        }
        this.$emit("saved");
      } catch (error) {
        console.error("Error saving accessory:", error);
      }
    },

    // Handle file selection for bulk upload
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },

    // Upload CSV file to the server
    async uploadFile() {
      if (!this.file) {
        this.uploadError = "Please select a file to upload.";
        return;
      }

      this.uploadProgress = "Parsing file...";
      this.uploadError = null;

      // Parse CSV file using PapaParse
      Papa.parse(this.file, {
        header: true,
        skipEmptyLines: true,
        complete: async (results) => {
          const data = results.data.filter((row) =>
            Object.values(row).some((value) => value !== null && value !== "")
          );

          if (data.length === 0) {
            this.uploadError = "The file contains no valid data.";
            this.uploadProgress = null;
            return;
          }

          try {
            this.uploadProgress = "Uploading data to the server...";
            await axios.post("http://localhost:3000/accessories/bulk", data);
            this.uploadProgress = "Upload successful!";
            this.file = null; // Reset file input
          } catch (error) {
            this.uploadError = "Error uploading data. Please try again.";
            console.error("Upload error:", error);
          } finally {
            this.uploadProgress = null;
          }
        },
        error: (error) => {
          this.uploadError = "Error parsing the file. Please check the format.";
          console.error("Parsing error:", error);
        },
      });
    },
  },
  mounted() {
    this.fetchAccessory();
  },
};
</script>

<style>
.input-field {
  @apply border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500;
}
</style>

<style>
.input-field {
  @apply border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500;
}
</style>
