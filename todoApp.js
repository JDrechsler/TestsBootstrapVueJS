document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: '#vue-app',
        data: vueVars,
        methods: vueMethods,
        computed: vueComputedProperties
    })
})

var vueVars = {
    todos: [{ id: 1, title: 'Go Shopping', completed: false }],
    newTodo: { id: null, title: '', completed: false }
}

var vueMethods = {

    addNewTodo(newTodo) {
        vueVars.todos.push(newTodo)
        vueVars.newTodo = { id: null, title: '', completed: false }
    },
    deleteTodo(todo) {
        vueVars.todos.splice(vueVars.todos.indexOf(todo, -1))
    },

    todoCompleted(todo) {
        todo.completed = !todo.completed
    }
}

var vueComputedProperties = {
    todoCount() {
        if (vueVars.todos.length <= 5) {
            return vueVars.todos.length
        } else {
            return 'Too many!'
        }
    }
}
