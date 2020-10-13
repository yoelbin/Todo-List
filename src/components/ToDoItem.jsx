import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function ToDoItem(props) {
  return (
    <div>
      <li>
        {" "}
        <HighlightOffIcon
          className="delete-btn"
          onClick={() => {
            props.onChecked(props.id);
          }}
        />
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
