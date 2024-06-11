import React, { useEffect, useState } from "react";

const AddTodo = ({ onAdd, setTodos, todos, selectedTodo }) => {
  const [todo, setTodo] = useState("");


  useEffect(() => {
    setTodo(selectedTodo);

    return()=>{
      console.log("cleanUp function ")
    }
  }, [selectedTodo]);

  const updateTodo = () => {
    const arr = todos?.map((item) => {
      if (item === selectedTodo) {
        return todo;
      } else {
        return item;
      }
    });
    setTodos(arr);
  };

  const handleAdd = () => {
    onAdd(todo);
    setTodo("");
  };

  return (
    <div>
   
      <div>
        <input
          type="text"
          placeholder="Add Item..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border-2 w-[300px] p-2 rounded-bl-full rounded-tl-full mb-4 outline-none "
        />
        {selectedTodo ? (
          <button
            onClick={updateTodo}
            className=" border-2 border-blue-700 px-6 py-2 rounded-br-full
           rounded-tr-full bg-blue-700 text-white hover:bg-blue-500"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className=" border-2 border-blue-700 px-6 py-2 rounded-br-full
       rounded-tr-full bg-blue-700 text-white hover:bg-blue-500"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default AddTodo;
