<script>
import TextField from '~/components/TextField.vue'

export default {
  components: {
    TextField
  },
  data() {
    return {
      id: '',
      pw: '',
      message: ''
    }
  },
  methods: {
    submit() {
      console.log(this.id, this.pw, this.message)
    }
  }
}
</script>


<template>
  <div class="container">
    <TextField
      v-model="id"
      label="아이디"
      placeholder="아이디를 입력하세요!" />
    <TextField
      v-model="pw"
      type="password"
      label="비밀번호"
      placeholder="비밀번호를 입력하세요!" />
    <TextField
      v-model="message"
      label="메시지" />
    <div class="actions">
      <TheButton
        color="primary"
        block
        @click="submit">
        제출!
      </TheButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 400px;
  padding: 20px;
  border: 4px solid;
  box-sizing: border-box;
  .actions {
    margin: 20px 0 10px;
  }
}
</style>
