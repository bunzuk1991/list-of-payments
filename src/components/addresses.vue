<template>
  <div class="address">
    <h1 class="headline font-weight-bold ml-4 mt-4">Платежі</h1>
    <v-container fluid class="my-2">
      <v-card flat class="pa-3 mb-2" color="grey lighten-5">
        <v-layout align-center row wrap>
          <v-flex xs12 sm12 md4>
            <div>
              <h3 :mt-3='$vuetify.breakpoint.smAndDown' class="healing text-uppercase mb-5:$vuetify.b">Мої адреси: </h3>
            </div>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs12 sm12 md8 grow>
            <v-layout align-center justify-end row wrap>
              <v-flex xs12 sm12 md8 class="mr-3">
                <v-select
                  :items='itemsList'
                  prepend-icon="person"
                  item-text="address"
                  class="address-select"
                  label="Поточна адреса"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm12 md3 shrink="1">
                <v-btn block color="grey darken-1 white--text">
                  Додати адресу
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
    </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'addresses',
  data () {
    return {
      itemsList: [
        { address: 'м. Тернопіль, вул. Бандери 96 кв. 1', value: '260000000001' },
        { address: 'м. Тернопіль, вул. Бандери 10 кв. 1', value: '260000000002' },
        { address: 'м. Тернопіль, вул. Бандери 88 кв. 1', value: '260000000003' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
