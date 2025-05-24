import React from "react";
import { useTodos } from "../store/todos";
import Subscription from "../email";

const Dark = () => {
  const { dark, setDark } = useTodos();
  
    function handle() {
      setDark(!dark);
      am;
    }
  

  return (
    <div className="mb-6 flex justify-between">
      <p className="text-white text-4xl font-medium ">T O D O</p>
      {/* <p className="text-white" onClick={handle}>
        {dark ? "dark" : "brightness"}
      </p> */}
        <Subscription />
    </div>
  );
};

export default Dark;
