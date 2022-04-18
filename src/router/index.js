import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "@/views/TodoList/TodoList";
import TodoListPage from "@/views/TodoList/TodoListPage";
import TodoListHistory from "@/views/TodoList/TodoListHistory";
import TodoListNavBar from "@/components/TodoList/TodoListNavBar";
import DailySentencePage from "@/views/DailySentencePage";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'TodoListPage',
            path: '/TodoList',
            components: {
                default: TodoListPage,
                TodoListNavBar,
            },
            children: [
                {
                    name: 'TodoListMain',
                    path: 'List',
                    component: TodoList
                },
                {
                    name: 'TodoListHistory',
                    path: 'History',
                    component: TodoListHistory
                }
            ]
        },
        {
            name: 'DailySentencePage',
            path: '/DailySentence',
            component: DailySentencePage,
        }
    ]
})