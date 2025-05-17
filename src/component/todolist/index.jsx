import React from 'react'
import { useTodos } from '../store/todos';

export const Todo = () => {
  const { filteredTodos, todos, setTodos } = useTodos();
  return (
   <>
  {filteredTodos().map((task) => (
            <div className="flex border-b-gray-500 border-b-1 py-5 px-3 gap-2">
              <input
                type="checkbox"
                className="checkbox-round"
                checked={task.comp}
              
             />
              {task.name}
            </div>
          ))}
   </>
    
  )
}

export default Todo
