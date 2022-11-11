<script>
import Combobox from '~/components/Combobox.vue'
export default {
  components: {
    Combobox
  },
  data() {
    return {
      comboItems: []
    }
  },
  methods: {
    submit() {
      console.log('comboItems:', this.comboItems)
    }
  }
}
</script>

<template>
  <Combobox
    v-model="comboItems"
    placeholder="키워드를 입력하세요!" />
  <TheButton
    style="min-width: 120px; margin-top: 10px;"
    color="primary"
    @click="submit">
    제출!
  </TheButton>
</template>
