<script>
import { users } from '~/data'
import SimpleTable from '~/components/SimpleTable.vue'
import NameCell from '~/components/cells/NameCell.vue'
import AddressCell from '~/components/cells/AddressCell.vue'
import PhoneCell from '~/components/cells/PhoneCell.vue'

export default {
  components: {
    SimpleTable
  },
  data() {
    return {
      data: users,
      columns: [
        { field: 'name', title: '이름', width: 100, component: NameCell },
        { field: 'age', title: '나이', width: 40 },
        { field: 'email', title: '이메일' },
        { field: 'address', title: '주소', component: AddressCell },
        { field: 'phone', title: '전화번호', component: PhoneCell }
      ]
    }
  },
  methods: {
    // 이름으로 정렬
    byName() {
      this.data.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    },
    // 나이로 정렬
    byAge() {
      this.data.sort((a, b) => a.age - b.age)
    }
  }
}
</script>

<template>
  <div class="btn-group">
    <TheButton
      color="warning"
      @click="byName">
      이름순 정렬
    </TheButton>
    <TheButton
      color="primary"
      @click="byAge">
      나이순 정렬
    </TheButton>
  </div>
  <SimpleTable
    :columns="columns"
    :data="data" />
</template>

<style scoped>
.btn-group {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
</style>
