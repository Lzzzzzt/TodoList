export default {
    namespaced: true,
    state: {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
        history: JSON.parse(localStorage.getItem('history')) || [],
    },
    getters: {
        info(state) {
            let todos = state.todos;
            return {
                done: todos.filter(value => value.done === true).length,
                length: todos.length
            }
        },
    },
    mutations: {
        addItem(state, item) {
            state.todos.unshift(item)
        },
        deleteItem(state, id) {
            let index;
            state.todos.forEach(value => {
                if (value.id === id) {
                    index = this.todos.indexOf(value)
                }
            });
            state.history.push(this.todos.splice(index, 1));
        },
        deleteDone(state) {
            state.history.push(state.todos.filter(value => value.done));
            state.todos = state.todos.filter(value => !value.done);
        },
        changeItem(state, item) {
            let id = item.id;
            state.todos = state.todos.map(value => {
                if (value.id === id) {
                    return {...value, ...item}
                }
                return value;
            });
        }
    }
}
