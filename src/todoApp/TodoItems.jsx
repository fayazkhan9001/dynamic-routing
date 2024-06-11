import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todos, setTodos, editTodo }) =>
    {
    return todos?.map((todo, index) => (
      <TodoItem
        key={index}
        item={todo}
        deleteTodo={() => {
          const filteredTodos = todos?.filter((item, index) => item !== todo);
          setTodos(filteredTodos);
        }}
        editTodo={() => editTodo(todo)}
      />
    ));
  }


export default TodoItems;
