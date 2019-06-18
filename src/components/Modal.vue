<template>
    <v-dialog
      v-model="showDialog"
      max-width="500px"
      persistent
    >
      <v-btn outline fab small color="red lighten-1" slot="activator">
        <v-icon>delete</v-icon>
      </v-btn>
      <v-card>
        <v-card-title primary-title class="headline red darken-1 white--text">
          <slot name="title">Use Google's location service?</slot>
        </v-card-title>
        <v-card-text>
         <slot name="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nam?</slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            flat="flat"
            @click="confirmDialog(false)"
          >
            Відмінити</v-btn>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="confirmDialog(true)"
          >Підтвердити</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    org: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    confirmDialog (value) {
      const dialogObg = {
        confirm: value,
        org: this.org
      }
      this.showDialog = false
      this.$emit('modalDialogConfirm', dialogObg)
    }
  }
}
</script>

<style scoped>

</style>
