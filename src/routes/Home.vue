<script>
export default {
  async mounted() {
    this.$store.commit('count/increment')
    const res = this.$store.dispatch('count/hello')
    console.log(res)
    console.log(this.$store.state.count.count)
    console.log(this.$store.getters['count/double'])
  }
}
</script>

<template>
  <h1>Home!</h1>
</template>
