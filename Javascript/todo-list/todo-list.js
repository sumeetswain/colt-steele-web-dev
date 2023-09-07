let input = prompt("what would you like to do?");
const todos = ["go gym"];
while (input != "quit" && input != "q") {
  if (input == "list") {
    for (let i in todos) {
      console.log(`${i}: ${todos[i]}`);
    }
  } else if (input == "new") {
    let newTodo = prompt("enter new todo");
    todos.push(newTodo);
  }
  input = prompt("what would you like to do?");
}
console.log("okay, you quit");
