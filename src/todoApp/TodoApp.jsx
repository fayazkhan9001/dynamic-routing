import React from "react";
import TodoHeader from "./TodoHeader";
import AddTodo from "./AddTodo";
import { useState } from "react";
import TodoItems from "./TodoItems";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState("");

  return (
    <div className="mt-[30px] ">
      <div className="flex flex-col items-center  border-2 rounded-[20px] border-red-500 w-[500px] mx-auto h-[500px]">
        <TodoHeader />
        <AddTodo
          selectedTodo={selectedTodo}
          todos={todos}
          setTodos={setTodos}
          onAdd={(item) => {
            setTodos((prevArr) => [...prevArr, item]);
          }}
        />

        <TodoItems
          todos={todos}
          setTodos={setTodos}
          editTodo={(todo) => {
            setSelectedTodo(todo);
          }}
        />
      </div>
    </div>
  );
};

export default TodoApp;
