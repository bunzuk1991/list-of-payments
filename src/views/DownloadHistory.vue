<template>
  <div class="history">
    <h1 class="title font-weight-bold ml-4 mt-3">Історія завантажень рестрів оплат та показів</h1>
<!--    <div class="dev">-->
<!--      <v-divider inset></v-divider>-->
<!--    </div>-->
    <v-container class="my-5">
      <v-card flat class="pa-2" color="grey lighten-3">
        <v-layout align-center row>
          <v-flex xs12>
            <v-menu class="mr-3">
              <v-text-field :value="formattedDate(dateBegin)" slot="activator" label="Початок" prepend-icon="date_range" readonly></v-text-field>
              <v-date-picker v-model="dateBegin" locale="uk-uk"></v-date-picker>
            </v-menu>
            <v-menu class="mr-4">
              <v-text-field :value="formattedDate(dateEnd)" slot="activator" label="Закінчення" prepend-icon="date_range" readonly></v-text-field>
              <v-date-picker v-model="dateEnd" locale="uk-uk"></v-date-picker>
            </v-menu>
            <v-select
              :items="selectItems"
              label="Solo field"
              class="mr-4 d-inline-flex"
              :style="{ width: '200px' }"
              v-model="selectedItem"
              min-width="200px"
              max-width="200px"
            ></v-select>
            <v-btn color="red darken-3 white--text" depressed round >
              Показати
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card flat>
        <v-layout row wrap :class="`pa-3 pay-item meters`">
          <v-flex>
            <v-chip large :class="`meters white--text`">Покази</v-chip>
          </v-flex>
          <v-flex>
            <div class="caption grey--text">Дата операції</div>
            <div>22/06/2019</div>
          </v-flex>
          <v-flex>
            <div class="caption grey--text">Фінансові установи</div>
            <div>Усі банки, котрі приймають платежі по системі EPS</div>
          </v-flex>
          <v-flex>
            <div class="caption grey--text">Користувач</div>
            <div>Буняк К. М.</div>
          </v-flex>
          <v-flex>
            <div class="caption grey--text">К-сть квитанці</div>
            <div>60</div>
          </v-flex>
          <v-flex>
            <div class="caption grey--text">Сума (грн.)</div>
            <div>156565.00</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap :class="`pa-3 pay-item pays`">
          <v-flex>
            <v-chip large :class="`pays white--text`">Оплати</v-chip>
          </v-flex>
          <v-flex>
            <div class="caption grey--text">Дата операції</div>
            <div>22/06/2019</div>
          </v-flex>
          <v-flex>
            <div class="caption grey--text">Фінансові установи</div>
            <div>Усі банки, котрі приймають платежі по системі EPS</div>
          </v-flex>
          <v-flex>
            <div class="caption grey--text">Користувач</div>
            <div>Буняк К. М.</div>
          </v-flex>
          <v-flex>
            <div class="caption grey--text">К-сть квитанці</div>
            <div>60</div>
          </v-flex>
          <v-flex>
            <div class="caption grey--text">Сума (грн.)</div>
            <div>156565.00</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>

  </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import ukLocal from 'date-fns/locale/uk'

export default {
  data: () => {
    return {
      dateBegin: null,
      dateEnd: null,
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      selectedItem: ''
    }
  },
  computed: {
    items () {
      return [
        { title: 'first' }
      ]
    },
    selectItems () {
      return ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  },
  methods: {
    formattedDate (value) {
      return value ? format(parseISO(value), 'd MMMM yyyy', { locale: ukLocal, awareOfUnicodeTokens: true }) : ''
    }
  }
}
</script>

<style scoped>
  .pay-item.pays {
    border-left: 4px solid #3cd1c2;
  }
  .pay-item.meters {
    border-left: 4px solid tomato;
  }
  .v-chip.pays {
    background: #3cd1c2;
  }
  .v-chip.meters {
    background: tomato;
  }
</style>
