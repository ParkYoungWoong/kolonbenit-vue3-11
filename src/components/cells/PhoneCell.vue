<script>
export default {
  props: {
    data: {
      type: String,
      required: true
    }
  },
  computed: {
    phone() {
      return this.data.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
    }
  }
}
</script>

<template>
  <div class="cell">
    {{ phone }}
  </div>
</template>

<style scoped>
.cell {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
