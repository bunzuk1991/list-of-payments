<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card>
        <v-card-title primary-title>
          <span class="title font-weight-bold">Історія завантажень рестрів оплат та показів</span>
        </v-card-title>
        <v-divider inset class="ml-3"></v-divider>
        <v-layout row>
            <v-flex>
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                lazy
                transition="scale-transition"
                offset-y
                max-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Початок"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                    class="ma-3"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                lazy
                transition="scale-transition"
                offset-y
                max-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Закінчення"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                    class="ma-3"
                    width="150px"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-flex>
        </v-layout>

        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-action>
              <v-icon v-if="item.icon" color="pink">star</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  })
}
</script>

<style scoped>

</style>
