<template>
  <v-tabs align-with-title>
    <v-tab @click="toTodoListMain">Main</v-tab>
    <v-tab disabled @click="toTodoListHistory">History</v-tab>
  </v-tabs>
</template>

<script>
import {VTabs, VTab} from 'vuetify/lib'

export default {
  name: "TodoListNavBar",
  components: {VTab, VTabs},
  methods: {
    toTodoListMain() {
      this.$router.replace({name: 'TodoListMain'})
    },
    toTodoListHistory() {
      this.$router.replace({name: 'TodoListHistory'})
    }
  },
  mounted() {
    this.toTodoListMain();
  }
}
</script>

<style scoped>

</style>