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
      <v-card>
        <v-card-text>
          <v-layout align-center justify-space-between row wrap>
            <v-flex xs12 md8>
              <div>
                <h3>Тернопільска обл, Кремеенецький р-н, м.Кременець, вул. Березина 41 кв. 1</h3>
              </div>
            </v-flex>
            <v-flex shrink>
                <v-btn>Додати послугу</v-btn>
                <v-btn class="btn-image-only">
                  <v-icon dark>add</v-icon>
                </v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <h3 class="font-weight-regular text-uppercase">Комунальні платежі "Єдина квитанція"</h3>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="px-5">
          <v-layout align-center justify-space-around row>
            <v-flex md8 offset-md-2>
              <v-layout row wrap offset-md-1 class="pa-3 text-md-center grey">
                <v-flex md1>Іконка</v-flex>
                <v-flex md3>Послуга</v-flex>
                <v-flex md3>Особовий рахунок</v-flex>
                <v-flex md2>Місяць</v-flex>
                <v-flex md3>Сума</v-flex>
              </v-layout>
              <v-layout row wrap offset-md-1 class="pa-3 text-md-center grey lighten-2">
                <v-flex md1><div>Icob</div></v-flex>
                <v-flex md3><div>Водопостачанн</div></v-flex>
                <v-flex md3><div>544545</div></v-flex>
                <v-flex md2><div>Травень 2019</div></v-flex>
                <v-flex md3><div>0.00</div></v-flex>
              </v-layout>
              <v-layout row wrap offset-md-1 class="pa-3 text-md-center grey lighten-2">
                <v-flex md1><div>Icob</div></v-flex>
                <v-flex md3><div>Водопостачанн</div></v-flex>
                <v-flex md3><div>544545</div></v-flex>
                <v-flex md2><div>Травень 2019</div></v-flex>
                <v-flex md3><div>0.00</div></v-flex>
              </v-layout>
              <v-layout row wrap offset-md-1 class="pa-3 text-md-center grey lighten-2">
                <v-flex md1><div>Icob</div></v-flex>
                <v-flex md3><div>Водопостачанн</div></v-flex>
                <v-flex md3><div>544545</div></v-flex>
                <v-flex md2><div>Травень 2019</div></v-flex>
                <v-flex md3><div>0.00</div></v-flex>
              </v-layout>
              <v-layout row wrap offset-md-1 class="pa-3 text-md-center grey lighten-2">
                <v-flex md1><div>Icob</div></v-flex>
                <v-flex md3><div>Водопостачанн</div></v-flex>
                <v-flex md3><div>544545</div></v-flex>
                <v-flex md2><div>Травень 2019</div></v-flex>
                <v-flex md3><div>0.00</div></v-flex>
              </v-layout>
              <v-layout row wrap offset-md-1 class="pa-3 text-md-center grey lighten-2">
                <v-flex md1><div>Icob</div></v-flex>
                <v-flex md3><div>Водопостачанн Водопостачанн Водопостачанн Водопостачанн Водопостачанн</div></v-flex>
                <v-flex md3><div>544545</div></v-flex>
                <v-flex md2><div>Травень 2019</div></v-flex>
                <v-flex md3><div>0.00</div></v-flex>
              </v-layout>

            </v-flex>
          </v-layout>
        </v-card-text>
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
  .btn-image-only {
    /*width: 80px;*/
    min-width: 54px;
  }
</style>
