import React from "react";
import {MdDelete} from 'react-icons/md'

const Todo = ({ task }) => {
  return (
    <div className="todo">
      <p>{task} <span><MdDelete /></span></p>
      
    </div>
  );
};

export default Todo;
