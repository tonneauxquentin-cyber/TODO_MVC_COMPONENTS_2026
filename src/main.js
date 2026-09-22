import TodoList from './components/todoList/TodoList';

new TodoList({
    el: "#app",
    title: "My TodoList",
    apiURL: "https://6aa7f8539b08676cd32bb8f2.mockapi.io",
}).render();

