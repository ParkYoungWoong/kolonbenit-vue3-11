<template>
  <LogIn />
  <br />
  <Forms />
  <br />
  <Tables />
  <RouterView />
</template>

<script>
import LogIn from '~/groups/LogIn.vue'
import Forms from '~/groups/Forms.vue'
import Tables from '~/groups/Tables.vue'

export default {
  components: {
    LogIn,
    Forms,
    Tables
  }
}
</script>
