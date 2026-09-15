export default function getTemplate(todoList) {
    return `
    <h2>${todoList.title}</h2>
      <ul>
      ${todoList.todos.map((todo) => todo.render()).join("")}
      </ul>
      `;
}