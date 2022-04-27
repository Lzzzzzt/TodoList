<template>
  <div id="app" :class="{'elevation-4': !hover, 'elevation-8': hover}" @mouseout="hover = false"
       @mouseover="hover = true">
    <AddItem id="input" style="width: 100%; max-height: 80px; min-height: 80px; margin-top: 10px"></AddItem>
    <TodoListItems style="width: 90%; height: 400px"></TodoListItems>
    <TodoListInfo></TodoListInfo>
  </div>
</template>

<script>
import AddItem from "@/components/TodoList/Main/AddItem";
import TodoListItems from "@/components/TodoList/Main/TodoListItems";
import TodoListInfo from "@/components/TodoList/Main/TodoListInfo";

export default {
  name: "TodoList",
  components: {AddItem, TodoListItems, TodoListInfo},
  data() {
    return {
      hover: false
    }
  }
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

  background-color: #F1F2F6;
}
</style>
