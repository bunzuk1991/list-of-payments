<template>
  <div class="app-header">
    <v-toolbar>
      <v-toolbar-title>
        <span class="font-weight-regular subheading text-uppercase" >Реєстри прийнятих оплат </span>
        <span class="ml-1 subheading text-uppercase font-weight-black red--text text--darken-2"> по ситемі EPS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="(item, i) in menuItems"
          :key="`menu-item-${i}`"
          router
          :to="item.route"
        >
          <v-icon left color="red darken-2">{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
let menuList = [
  { name: 'Історія завантежень', icon: 'history', route: '/history' },
  { name: 'Профіль', icon: 'person', route: '/profile' },
  { name: 'Вийти', icon: 'sentiment_very_dissatisfied', route: '/logout' },
  { name: 'Увійти', icon: 'sentiment_very_satisfied', route: '/login' }
]
export default {
  name: 'AppHeader',
  computed: {
    menuItems () {
      return menuList
    }
  }
}
</script>

<style scoped>

</style>
