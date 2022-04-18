<template>
  <div id="app">
    <AddItem id="input" style="width: 100%; max-height: 80px; min-height: 80px; margin-top: 10px"></AddItem>
    <TodoListItems style="width: 90%; height: 400px"></TodoListItems>
    <TodoListInfo></TodoListInfo>
  </div>
</template>

<script>
import AddItem from "@/components/TodoList/AddItem";
import TodoListItems from "@/components/TodoList/TodoListItems";
import TodoListInfo from "@/components/TodoList/TodoListInfo";

export default {
  name: "TodoList",
  components: {AddItem, TodoListItems, TodoListInfo},
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;


  width: 500px;
  height: 100%;

  padding: 40px;

  border-radius: 10px;

  background-color: aliceblue;

  box-shadow: black 5px 5px 10px -10px;

}
</style>