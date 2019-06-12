<template>
    <div class="user-list">
      <h1 class="headline font-weight-bold ml-4 mt-4">Перелік користувачів</h1>
      <v-container>
      </v-container>
    </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      userList: [
        { id: 1, name: 'admin', password: '221008', admin: true, organisations: [{ id: 1, name: 'ОСББ №1' }, { id: 1, name: 'ОСББ №4' }] },
        { id: 2, name: 'test1', password: '123456', admin: false, organisations: [{ id: 1, name: 'ОСББ №3' }, { id: 1, name: 'ОСББ №5' }] },
        { id: 3, name: 'test2', password: '123456', admin: false, organisations: [{ id: 1, name: 'ОСББ №5' }, { id: 1, name: 'ОСББ №6' }] },
        { id: 4, name: 'test3', password: '123456', admin: false, organisations: [{ id: 1, name: 'ОСББ №7' }, { id: 1, name: 'ОСББ №8' }] },
        { id: 5, name: 'test4', password: '123456', admin: false, organisations: [{ id: 1, name: 'ОСББ №9' }, { id: 1, name: 'ОСББ №10' }] },
        { id: 6, name: 'test1', password: '123456', admin: false, organisations: [{ id: 1, name: 'ОСББ №11' }, { id: 1, name: 'ОСББ №12' }] },
        { id: 7, name: 'test1', password: '123456', admin: false, organisations: [{ id: 1, name: 'ОСББ №11' }, { id: 1, name: 'ОСББ №12' }] }
      ]
    }
  }
}
</script>

<style scoped>

</style>
