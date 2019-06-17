<template>
  <div class="user-list">
    <h1 class="headline font-weight-bold ml-4 mt-4">Перелік організацій</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <ul>
            <li v-for="org in organisations" :key="org.id">
              {{ org.id }}
              {{ org.name }}
              {{ org.active }}
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AppOrgList',
  computed: {
    organisations () {
      return this.$store.getters.organisations
    }
  },
  created () {
    this.$store.dispatch('getAllOrganisations')
  }
}
</script>

<style scoped>

</style>
