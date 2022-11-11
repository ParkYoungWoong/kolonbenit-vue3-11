<script>
export default {
  props: {
    data: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isShowModal: false
    }
  },
  computed: {
    address() {
      return this.data.match(/(?<=\B)[가-힣]+(?=시)/)[0]?.slice(0, 2)
    }
  },
  methods: {
    onModal() {
      this.isShowModal = true
    }
  }
}
</script>

<template>
  <TheModal v-model="isShowModal">
    <template #activator>
      <div
        class="cell"
        @dblclick="onModal">
        {{ address }}
      </div>
    </template>
    <template #default>
      <h1>{{ data }}</h1>
    </template>
  </TheModal>
</template>
