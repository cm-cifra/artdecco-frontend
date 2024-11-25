<template>
  <div class="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden">
    <img :src="image" alt="" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="text-lg font-bold">{{ title }}</h4>
      <p class="text-sm text-gray-600">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    image: String,
  },
};
</script>
