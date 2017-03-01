document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: '#vue-app',
        data: vueVars,
        methods: vueMethods
    })
})

var vueVars = {
    todos: [{ id: 1, title: 'Go Shopping' },
    { id: 2, title: 'new Todo' }],
    newTodo: { id: null, title: '' }
}

var vueMethods = {

    addNewTodo(newTodo) {
        vueVars.todos.push(newTodo)
        vueVars.newTodo = { id: null, title: '' }
    },
    deleteTodo(todo) {
        vueVars.todos.splice(vueVars.todos.indexOf(todo, -1))
    }
}
