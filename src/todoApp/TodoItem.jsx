import React from "react";

const TodoItem = ({item, deleteTodo, editTodo}) => {

  return (
    <div className="flex justify-between gap-x-20 my-2 bg-slate-200 py-2 px-4 rounded-[10px] w-[360px]">
      <p>{item}</p>

      <div className="flex gap-x-4 justify-between">
        <button onClick={editTodo}>edite</button>
        <button onClick={deleteTodo}>delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
