import React from "react";
import { useTodos } from "../store/todos";
export const filters = ['All', 'Active', 'Completed']
const FilterList = () => {
  const { filter, setFilter } = useTodos();
  return (
    <>
    {filters.map((el) => (
      <span
        key={el.titile}
        onClick={() => setFilter(el)}
        className={filter == el && 'active'}
      >
        {el}
      </span>
    ))}
  </>
    
   
  );
};

export default FilterList;
