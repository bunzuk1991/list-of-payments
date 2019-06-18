<template>
    <v-dialog
      v-model="showDialog"
      max-width="500px">
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
    dialogVisible: {
      type: Boolean
    },
    org: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showDialog: null
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
  },
  watch: {
    dialogVisible () {
      this.showDialog = this.dialogVisible
    }
  }
  // model: {
  //   prop: 'dialogVisible',
  //   event: 'change'
  // },
}
</script>

<style scoped>

</style>
