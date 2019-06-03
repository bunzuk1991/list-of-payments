<template>
  <div class="history">
    <h1 class="headline font-weight-bold ml-4 mt-4">Історія завантажень рестрів оплат та показів</h1>
<!--    <div class="dev">-->
<!--      <v-divider inset></v-divider>-->
<!--    </div>-->
    <v-container class="my-2">
      <v-card flat class="pa-2 mb-2" color="grey lighten-5">
        <v-layout align-center row>
          <v-flex xs12>
            <v-menu class="mr-3" offset-y transition="scale-transition">
              <v-text-field color='red darken-1' :value="formattedDate(dateBegin)" slot="activator" label="Початок" prepend-icon="date_range" readonly></v-text-field>
              <v-date-picker color="red darken-1" v-model="dateBegin" locale="uk-uk"></v-date-picker>
            </v-menu>
            <v-menu class="mr-4" offset-y transition="scale-transition">
              <v-text-field color='red darken-1' :value="formattedDate(dateEnd)" slot="activator" label="Закінчення" prepend-icon="date_range" readonly></v-text-field>
              <v-date-picker color="red darken-1" v-model="dateEnd" locale="uk-uk"></v-date-picker>
            </v-menu>
            <v-select
              :items="selectItems"
              label="Операція:"
              class="mr-4 d-inline-flex"
              :style="{ width: '200px' }"
              v-model="selectedItem"
              offset-y
            ></v-select>
            <v-btn color="grey darken-1 white--text" depressed round >
              <v-icon left>find_in_page</v-icon>
              Показати
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card flat v-for="historyItem in historyList" :key="`history-item-${historyItem.id}`">
        <v-layout row wrap :class="`pa-3 pay-item ${historyItem.kind}`">
          <v-flex md1 sm4>
            <v-chip large :class="`${historyItem.kind} white--text`">{{ historyItem.kindName }}</v-chip>
          </v-flex>
          <v-flex md2 sm4>
            <div class="caption grey--text">Дата операції</div>
            <div>{{ historyItem.operationDate }}</div>
          </v-flex>
          <v-flex md4 sm4>
            <div class="caption grey--text">Фінансові установи</div>
            <div>{{ historyItem.banks }}</div>
          </v-flex>
          <v-flex md2 sm4>
            <div class="caption grey--text">Користувач</div>
            <div>{{ historyItem.user }}</div>
          </v-flex>
          <v-flex md1 sm4>
            <div class="caption grey--text">К-сть квитанці</div>
            <div>{{ historyItem.receipts }}</div>
          </v-flex>
          <v-flex md2 sm4>
            <div class="caption grey--text">Сума (грн.)</div>
            <div>{{ historyItem.sum }}</div>
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
      selectedItem: 'Покази'
    }
  },
  computed: {
    historyList () {
      return [
        { kind: 'pays', kindName: 'Оплати', operationDate: '10/10/2018', banks: 'АТ "Ощадбанк", ПАТ КБ "Приватбанк"', user: 'Пронська В. А.', receipts: '1454', sum: 4545645.55 },
        { kind: 'meters', kindName: 'Покази', operationDate: '10/12/2018', banks: 'Усі банки, які приймають платежі через систему EPS"', user: 'Волянкськ Б. А.', receipts: '1454', sum: 0.00 },
        { kind: 'pays', kindName: 'Оплати', operationDate: '10/10/2018', banks: 'АТ "Ощадбанк", ПАТ КБ "Приватбанк"', user: 'Пронська В. А.', receipts: '1454', sum: 4545645.55 },
        { kind: 'pays', kindName: 'Оплати', operationDate: '10/10/2018', banks: 'АТ "Ощадбанк", ПАТ КБ "Приватбанк"', user: 'Пронська В. А.', receipts: '1454', sum: 4545645.55 },
        { kind: 'pays', kindName: 'Оплати', operationDate: '10/10/2018', banks: 'АТ "Ощадбанк", ПАТ КБ "Приватбанк"', user: 'Пронська В. А.', receipts: '1454', sum: 4545645.55 },
        { kind: 'meters', kindName: 'Покази', operationDate: '10/12/2018', banks: 'Усі банки, які приймають платежі через систему EPS"', user: 'Волянкськ Б. А.', receipts: '1454', sum: 0.00 }
      ]
    },
    selectItems () {
      return ['Оплати', 'Покази', 'Усе']
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
    border-left: 4px solid #26bfe9;
  }
  .pay-item.meters {
    border-left: 4px solid #ff7345;
  }
  .v-chip.pays {
    background: #26bfe9;
  }
  .v-chip.meters {
    background: #ff7345;
  }
</style>
