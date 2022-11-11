<script>
export default {
  props: {
    modelValue: {
      type: Array,
      required: true
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      itemText: ''
    }
  },
  methods: {
    pushItem(event) {
      this.$emit('update:modelValue', [...this.modelValue, event.target.value])
      this.itemText = ''
    },
    removeItem(index) {
      this.$emit('update:modelValue', this.modelValue.filter((_, i) => i !== index))
    }
  }
}
</script>

<template>
  <div class="combobox">
    <div
      v-for="(item, index) in modelValue"
      :key="item"
      class="item"
      @click="removeItem(index)">
      {{ item }}
    </div>
    <input
      v-bind="$attrs"
      :value="itemText"
      @change="pushItem" />
  </div>
</template>

<style scoped lang="scss">
.combobox {
  max-width: 400px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  .item {
    height: 30px;
    padding: 0 10px;
    background-color: lightgray;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  input {
    flex: 1;
    min-width: 100px;
    height: 30px;
    box-sizing: border-box;
  }
}
</style>
