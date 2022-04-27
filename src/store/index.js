import Vuex from 'vuex'
import Vue from 'vue'
import TodoListStore from './TodoList';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        TodoList: TodoListStore
    }
})
