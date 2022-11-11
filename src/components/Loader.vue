<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div
    v-if="loading"
    class="loader"></div>
</template>

<style scoped>
.loader {
  width: 40px;
  height: 40px;
  border: 4px solid red;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
