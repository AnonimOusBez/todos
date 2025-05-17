import React from "react";
import { useTodos } from "../store/todos";
import { ToastContainer, toast } from 'react-toastify';

const AddTodo = () => {
  const { setNewTask, newTask, setTodos, deleteAllTodos } = useTodos();
  function newTaskAdder() {
    const newOne = {
      name: newTask.name,
      comp: newTask.comp,
    };
    setTodos(newOne);
    setNewTask({
      name: "",
      comp: false,
    });
  }

  // const notify = () => toast("success !");
  // const notify2 = () => toast("error !");
  const notify = () => {
    toast(CustomComponent, {
    });
  };
  const notify2 = () => {
    toast(CustomComponent2, {
    });
  };
  
  return (
    <>
      <div className=" py-6 px-3 gap-2 bg-[#25253c] w-96 h-12 rounded-xl flex items-center text-gray-500">
        <input
          type="checkbox"
          className="checkbox-round "
          onClick={() =>
            setNewTask({
              name: newTask.name,
              comp: !newTask.comp,
            })
          }
        />
        <input
          className=" outline-0"
          type="text"
          placeholder="Create a new to do..."
          value={newTask.name}
          onChange={(e) =>
            // setTitle(e.target.value)
            setNewTask({
              name: e.target.value,
              comp: newTask.comp,
            })
          }
        />
        <button
          onClick={() => {
            if (newTask.name != "") {
              newTaskAdder();
              notify()
            } else {

                notify2();
            }
          }}
          className="text-2xl   px-1 py-1 rounded-xl"
        >
          +
        </button>
        <button
          className="text-2xl   px-1 py-1 rounded-xl"
          onClick={deleteAllTodos}
        >
          clear all
        </button>
      </div>
      {/* <button onClick={notify}>Notify !</button> */}
      <ToastContainer />
    </>
  );
};

export default AddTodo;
function CustomComponent() {
  return (
    <div>
      <span>Todo was successfully created</span>

    </div>
  );
}

function CustomComponent2() {
  return (
    <div>
      <span>ERROR : no text in the input</span>

    </div>
  );
}