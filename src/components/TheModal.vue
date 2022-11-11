<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  methods: {
    offModal() {
      this.$emit('update:modelValue', false)
    }
  }
}
</script>

<template>
  <slot name="activator"></slot>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="modal">
      <div
        class="bg"
        @click="offModal"></div>
      <div class="contents">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
  }
  .contents {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
  }
}
</style>
