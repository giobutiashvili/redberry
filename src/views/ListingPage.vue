<template>
  <div class="card">
    <img :src="imageSrc" alt="Product Image" class="card-image" />
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-description">{{ description }}</p>
      <p class="card-price">{{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListingPage",
  data() {
    return {
      imageSrc: "path/to/image.jpg",
      title: "Product Title",
      description: "This is a brief description of the product.",
      price: "$99.99",
    };
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  margin: 20px;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 1.5em;
  margin-bottom: 8px;
}

.card-description {
  font-size: 1em;
  margin-bottom: 16px;
}

.card-price {
  font-size: 1.2em;
  color: #e91e63;
}
</style>
