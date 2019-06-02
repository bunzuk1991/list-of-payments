<template>
  <div id="root">
      <v-app id="app-root" class="grey lighten-2">
        <app-header primary dark></app-header>
        <v-content>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-content>
      </v-app>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  computed: {
  },
  data () {
    return {
      name: '1'
    }
  },
  methods: {
  },
  components: {
    AppHeader
  }
}
</script>
