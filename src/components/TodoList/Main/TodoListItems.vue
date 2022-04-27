<template>
  <div id="container">
    <v-expansion-panels>
      <transition-group id="lists" tag="div">
        <TodoListItem v-for="item in todos" :key="item.id" :item="item"></TodoListItem>
      </transition-group>
    </v-expansion-panels>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoList/Main/TodoListItem";
import {VExpansionPanels} from 'vuetify/lib'
import {mapState} from 'vuex'

export default {
  name: "TodoListItems",
  components: {TodoListItem, VExpansionPanels},
  computed: {
    ...mapState('TodoList', ['todos']),
  },
  watch: {
    todos: {
      deep: true,
      handler() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  },
}
</script>

<style scoped>
#container {
  height: 400px;
}

#lists {
  overflow: scroll;
  width: 100%;
  max-height: 400px;
}

#lists::-webkit-scrollbar {
  width: 0 !important;
}

.v-enter-active, .v-leave-active {
  transition: all ease 0.5s;
}

.v-enter-to, .v-leave {
  transform: translateX(0);
  opacity: 1;
}

.v-leave-to, .v-enter {
  transform: translateX(100%);
  opacity: 0;
}
</style>
