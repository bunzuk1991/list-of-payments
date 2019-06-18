<template>
  <div class="user-list">
    <v-container class="my-2">
      <v-card flat class="pa-2 mb-2" color="grey lighten-5">
        <v-layout align-content-space-between justify-space-between row>
          <v-flex xs12>
              <v-text-field
                name="search"
                label="Пошук"
                type="text"
                :rules="[v => !v]"
                v-model="search"
                class="ml-3"
              ></v-text-field>
          </v-flex>
          <v-flex shrink align-self-center>
            <app-org-edit :create="true"></app-org-edit>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card flat v-for="org in filteredList" :key="org.id" class="org-item">
        <v-layout align-center justify-space-between row wrap>
          <v-flex md3 sm3 class="pa-3">
            <div>{{ org.name }}</div>
          </v-flex>
          <v-divider vertical></v-divider>
          <v-flex md2 sm2>
            <div>{{ org.code }}</div>
          </v-flex>
          <v-divider vertical></v-divider>
          <v-flex md3 sm3>
            <div>{{ org.services }}</div>
          </v-flex>
          <v-divider vertical></v-divider>
          <v-flex md1 sm1>
            <v-chip large :class="'org-chip-active white--text'" v-if="org.active" v-text="'Активний'"></v-chip>
            <v-chip large :class="'org-chip-deactivate white--text'" v-else v-text="'Відключений'"></v-chip>
          </v-flex>
          <v-divider vertical></v-divider>
          <v-flex align-self-end shrink>
            <app-org-edit :org="org"></app-org-edit>
            <v-btn outline fab small color="red lighten-1" @click="appOrgShowModal = !appOrgShowModal">
              <v-icon>delete</v-icon>
            </v-btn>
            <modal @modalDialogConfirm="confirmDelete" :org="org.name" :dialogVisible="appOrgShowModal" input="appOrgShowModal = $event">
              <template v-slot:title>Вилучити елемент?</template>
              <template v-slot:paragraph>Після вилучення даного елемента, Ви не зможете його відмінити. Для відміни вилучення - команда "Відмінити, для підтвердження - команда "Підтвердити""</template>
            </modal>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AppOrgEdit from './AppOrgEdit'
import Modal from '@/components/Modal'
export default {
  name: 'AppOrgList',
  components: {
    AppOrgEdit,
    Modal
  },
  data () {
    return {
      search: '',
      appOrgShowModal: false
    }
  },
  computed: {
    filteredList () {
      const organisations = this.$store.getters.organisations
      if (this.search) {
        return organisations.filter(item => {
          return item.name.toLowerCase().includes(this.search) ||
            item.code.toLowerCase().includes(this.search) ||
            item.services.toLowerCase().includes(this.search)
        })
      } else {
        return organisations
      }
    }
  },
  methods: {
    confirmDelete (value) {
      console.log(value)
      if (value.confirm) {
        this.$store.dispatch('deleteOrg', value.org)
      }
    }
  },
  created () {
    this.$store.dispatch('getAllOrganisations')
  }
}
</script>

<style scoped>
  .v-chip.org-chip-active {
    width: 100px;
    background: #2b88ff;
    text-align: center;
    height: 26px;
    display: block;
    line-height: 26px;
    margin: 0 auto;
  }
  .v-chip.org-chip-deactivate {
    width: 100px;
    background: #ff7345;
    text-align: center;
    height: 26px;
    display: block;
    line-height: 26px;
    margin: 0 auto;
  }
</style>
