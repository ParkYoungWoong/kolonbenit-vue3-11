<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div 
    :class="{ 
      [color]: true,
      block
    }"
    class="btn">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.btn {
  width: max-content;
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  background-color: lightgray;
  word-break: keep-all;
  &.block {
    width: auto;
  }
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &.primary {
    background-color: royalblue;
    color: white;
    &:hover {
      background-color: darken(royalblue, 10%);
    }
  }
  &.warning {
    background-color: orange;
    color: white;
    &:hover {
      background-color: darken(orange, 10%);
    }
  }
  &.error {
    background-color: tomato;
    color: white;
    &:hover {
      background-color: darken(tomato, 10%);
    }
  }
  &.success {
    background-color: yellowgreen;
    color: white;
    &:hover {
      background-color: darken(yellowgreen, 10%);
    }
  }
}
</style>
