<template>
  <v-dialog
    width="400px"
    v-model="modal"
  >
    <v-btn round class="grey lighten-2 mr-3" depressed flat slot="activator" v-if="create">Нова організація</v-btn>
<!--    <v-btn round small class="grey lighten-3 mr-3" flat slot="activator" v-else>Редагувати</v-btn>-->
    <v-btn outline fab small color="green darken-1 mr-3" slot="activator" v-else>
      <v-icon>edit</v-icon>
    </v-btn>

    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary"  v-if="create">Створення нової організації</h1>
              <h1 class="text--primary"  v-else>Редагування організації</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout role="">
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="name"
                label="Назва організації"
                type="text"
                :rules="[v => !v]"
                v-model="editedName"
              ></v-text-field>
              <v-text-field
                name="code"
                label="ЄДРПОУ"
                type="text"
                :rules="[v => !v]"
                v-model="editedCode"
              ></v-text-field>
              <v-text-field
                name="services"
                label="Перелік служб"
                type="text"
                :rules="[v => !v]"
                v-model="editedServices"
              ></v-text-field>
              <v-switch
                label="Активна"
                v-model="editedActive"
              >
              </v-switch>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="info" flat @click="onCancel">Cancel</v-btn>
              <v-btn class="success" flat @click="onSave">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    org: {
      type: Object,
      default: () => {}
    },
    create: {
      type: Boolean,
      default: false
    }
  },
  name: 'AppEditAdModal',
  data () {
    return {
      modal: false,
      editedName: this.create ? '' : this.org.name,
      editedCode: this.create ? '' : this.org.code,
      editedServices: this.create ? '' : this.org.services,
      editedActive: this.create ? true : this.org.active
    }
  },
  methods: {
    onCancel () {
      this.modal = false
      if (this.create) {
        this.editedName = ''
        this.editedCode = ''
        this.editedServices = ''
        this.editedActive = false
      } else {
        this.editedName = this.org.name
        this.editedCode = this.org.code
        this.editedServices = this.org.services
        this.editedActive = this.org.active
      }
    },
    onSave () {
      const OrgObject = {
        name: this.editedName,
        code: this.editedCode,
        services: this.editedServices,
        active: this.editedActive,
        id: this.create ? null : this.org.id
      }
      if (this.editedName !== '' && this.editedCode !== '' && this.editedServices !== '') {
        if (this.create) {
          console.log(OrgObject)
          this.$store.dispatch('createOrg', OrgObject)
        } else {
          this.$store.dispatch('updateOrg', OrgObject)
        }
        this.modal = false
      }
    }
  }
}
</script>

<style scoped>

</style>
