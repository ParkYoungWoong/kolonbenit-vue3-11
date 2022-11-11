<script>
import { nanoid } from 'nanoid'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      inputId: nanoid(4)
    }
  }
}
</script>

<template>
  <div class="text-field">
    <label :for="inputId">
      {{ label }}
    </label>
    <input
      :id="inputId"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<style scoped lang="scss">
.text-field {
  display: block;
  padding: 6px 0;
  label {
    margin-bottom: 4px;
    font-size: 12px;
    color: #666;
  }
  input {
    width: 100%;
    height: 34px;
    padding: 0 10px;
    box-sizing: border-box;
  }
}
</style>
