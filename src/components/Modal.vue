<template>
    <v-dialog
      v-model="showDialog"
      max-width="700px">
      <v-card>
        <v-card-title>
          <h2>TEST</h2>
        </v-card-title>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: ['dialogVisible'],
  data () {
    return {
      showDialog: null
    }
  },
  model: {
    prop: 'dialogVisible',
    event: 'change'
  },
  watch: {
    dialogVisible () {
      this.showDialog = this.dialogVisible
    },
    showDialog () {
      if (this.showDialog === false && this.dialogVisible === true) {
        this.$emit('change', false)
      }
    }
  },
  created: function () {
    this.showDialog = this.dialogVisible
  }
}
</script>

<style scoped>

</style>
