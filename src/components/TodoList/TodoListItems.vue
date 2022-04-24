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
import TodoListItem from "@/components/TodoList/TodoListItem";
import {VExpansionPanels} from 'vuetify/lib'

export default {
  name: "TodoListItems",
  components: {TodoListItem, VExpansionPanels},
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    }
  },
  methods: {
    addItem(item) {
      this.todos.unshift(item)
    },
    deleteItem(id) {
      let index;
      this.todos.forEach(value => {
        if (value.id === id) {
          index = this.todos.indexOf(value)
        }
      });
      this.todos.splice(index, 1);
    },
    changeItemState(id) {
      this.todos.forEach(value => {
        if (value.id === id) {
          value.done = !value.done;
        }
      });
    },
    sendInfo() {
      let info = {
        done: this.todos.filter(value => value.done === true).length,
        length: this.todos.length,
      }

      this.$nextTick(() => this.$root.$emit('Info', info));
    },
    deleteDone() {
      this.todos = this.todos.filter(value => !value.done);
    },
    changeItem(item) {
      let id = item.id;
      this.todos = this.todos.map(value => {
        if (value.id === id) {
          return {...value, ...item}
        }
        return value;
      });
    }
  },
  watch: {
    todos: {
      deep: true,
      handler() {
        this.sendInfo();
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  },
  mounted() {
    this.sendInfo();
    this.$root.$on('addItem', this.addItem);
    this.$root.$on('deleteItem', this.deleteItem);
    this.$root.$on('changeItemState', this.changeItemState);
    this.$root.$on('deleteDone', this.deleteDone);
    this.$root.$on('changeItem', this.changeItem);
  }
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
