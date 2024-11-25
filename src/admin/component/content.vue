<template>
  <div class="flex-1 p-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Image Section -->
      <div class="bg-gray-100 p-4 rounded-lg border">
        <div class="w-full h-60 bg-gray-300 flex justify-center items-center">
          <button class="bg-orange-500 text-white px-4 py-2 rounded-lg">
            Select Photo
          </button>
        </div>
      </div>

      <!-- Form Section -->
      <div class="bg-white p-4 rounded-lg border">
        <h2 class="text-lg font-bold mb-4">Create Product</h2>
        <form>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-600 mb-1">Product Name</label>
              <input
                type="text"
                class="w-full p-2 border rounded-lg"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label class="block text-gray-600 mb-1">Price ($)</label>
              <input
                type="number"
                class="w-full p-2 border rounded-lg"
                placeholder="200.00"
              />
            </div>
            <!-- Add more fields as necessary -->
          </div>
          <button
            type="submit"
            class="bg-orange-500 text-white px-4 py-2 mt-4 rounded-lg"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
