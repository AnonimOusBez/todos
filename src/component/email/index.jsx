import React from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import { useTodos } from "../store/todos";

import { ToastContainer, toast } from 'react-toastify';
function Subscription() {
const{todos} = useTodos()

  const SERVICE_ID = import.meta.env.VITE_SERVICE_KEY;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_KEY;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleOnSubmit = (e) => {
 console.log("test")
    e.preventDefault();
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {message:JSON.stringify(todos) }, PUBLIC_KEY)
      .then(
        (result) => {
         notify()
        },
        (error) => {
          console.log(error.text);
          notify2()
        }
      );
    
  console.log({setState})

};
const notify = () => {
    toast(CustomComponent, {
    });
  };
  const notify2 = () => {
    toast(CustomComponent2, {
    });
  };
return (
    <div className="email">
 

      <button onClick={handleOnSubmit} className="bakery-button"><img src="email-144-16.png" alt=""  className="png"/></button>
    </div>
  );
}

export default Subscription;

function CustomComponent() {
  return (
    <div>
      <span>Todo was successfully sent</span>

    </div>
  );
}

function CustomComponent2() {
  return (
    <div>
      <span>ERROR : sent wasnt successful</span>

    </div>
  );
}