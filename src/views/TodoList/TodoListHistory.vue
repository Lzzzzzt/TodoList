<template>
  <v-col class="root">
    <TodoListHistoryDate></TodoListHistoryDate>
    <TodoListHistoryDetails></TodoListHistoryDetails>
    <TodoListHistoryControlPanel></TodoListHistoryControlPanel>
  </v-col>
</template>

<script>
import TodoListHistoryDate from "@/components/TodoList/History/TodoListHistoryDate";
import TodoListHistoryControlPanel from "@/components/TodoList/History/TodoListHistoryControlPanel";
import TodoListHistoryDetails from "@/components/TodoList/History/TodoListHistoryDetails";

export default {
  name: "TodoListHistory",
  components: {TodoListHistoryDetails, TodoListHistoryControlPanel, TodoListHistoryDate},
  data() {
    return {
      finishedItems: JSON.parse(localStorage.getItem('finished')) || [],
    }
  },
  methods: {
    getFinishedItems(items) {
      this.finishedItems.push(...items);
    }
  },
  mounted() {
    this.$root.$on('sendFinishedItems', this.getFinishedItems);
  }
}
</script>

<style scoped>
.root {
  width: 95vw;
  height: 95vh;
  overflow: hidden;
}
</style>
