<template>
  <v-tabs align-with-title>
    <v-tab :to="{name: 'TodoListMain'}">Main</v-tab>
    <v-tab :to="{name: 'TodoListHistory'}">History</v-tab>
  </v-tabs>
</template>

<script>
import {VTabs, VTab} from 'vuetify/lib'

export default {
  name: "TodoListNavBar",
  components: {VTab, VTabs},
}
</script>

<style scoped>

</style>
