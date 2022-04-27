import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "@/views/TodoList/TodoList";
import TodoListPage from "@/views/TodoList/TodoListPage";
import TodoListHistory from "@/views/TodoList/TodoListHistory";
import TodoListNavBar from "@/components/TodoList/TodoListNavBar";
import DailySentencePage from "@/views/DailySentencePage";
import HomePage from "@/views/HomePage";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/',
            component: HomePage,
            meta: {
                name: 'Home'
            }
        },
        {
            name: 'TodoListPage',
            path: '/TodoList',
            redirect: {name: 'TodoListMain'},
            components: {
                default: TodoListPage,
                TodoListNavBar,
            },
            children: [
                {
                    name: 'TodoListMain',
                    path: 'List',
                    meta: {
                        name: 'TodoList'
                    },
                    component: TodoList,
                },
                {
                    name: 'TodoListHistory',
                    path: 'History',
                    meta: {
                        name: 'TodoList'
                    },
                    component: TodoListHistory
                }
            ]
        },
        {
            name: 'DailySentencePage',
            path: '/DailySentence',
            component: DailySentencePage,
            meta: {
                name: '一言'
            }
        }
    ]
})
