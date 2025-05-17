import React from "react";
import FilterList from "./filterlist";
import Todo from "./todolist";
import AddTodo from "./addTodo";
import Dark from "./drk";

const Counter = () => {
  return (
    <div className="bg-[#181824] w-screen h-screen flex items-center bg-[url(/bg-desktop-dark.jpg)]   bg-no-repeat bg-centerc bg-top justify-center">
      <div className="w-96">
        <Dark />
        <AddTodo />

        <div className="w-96  bg-[#25253c] text-gray-500 text-center rounded-xl mt-5">
          <Todo />
          <div className="py-5 px-3 flex w-96 justify-center">
            <FilterList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
