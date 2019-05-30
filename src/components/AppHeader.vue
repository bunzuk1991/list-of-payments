<template>
  <div class="app-header">
    <v-toolbar>
      <v-toolbar-title>
        <span class="font-weight-regular subheading text-uppercase" >Реєстри прийнятих оплат </span>
        <span class="ml-1 subheading text-uppercase font-weight-black"> по ситемі EPS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="(item, i) in menuItems"
          :key="`menu-item-${i}`"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
let menuList = [
  { name: 'menu1', icon: 'person' },
  { name: 'menu2', icon: 'person' },
  { name: 'menu3', icon: 'person' }
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
