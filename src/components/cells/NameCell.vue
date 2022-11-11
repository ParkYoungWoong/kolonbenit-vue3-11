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
      editMode: false,
      name: ''
    }
  },
  methods: {
    async onEditMode() {
      this.editMode = true
      this.name = this.data
      await this.$nextTick()
      this.$refs.input.focus()
    },
    offEditMode() {
      this.editMode = false
    },
    submit() {
      this.offEditMode()
      console.log(`${this.name}을 서버로 전송!`)
    }
  }
}
</script>

<template>
  <div
    class="cell"
    @dblclick="onEditMode">
    <template v-if="!editMode">
      {{ data }}
    </template>
    <template v-else>
      <input
        ref="input"
        v-model="name"
        @blur="submit"
        @keydown.enter="submit" />
    </template>
  </div>
</template>

<style scoped>
.cell {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-weight: 700;
  color: green;
}
input {
  padding: 0 10px;
  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
