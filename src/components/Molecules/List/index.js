import React from "react";

const List = ({ listName, listNameStyle }) => {
  return (
    <div>
      <ul className="no-bullets ml-4">
        <li className={listNameStyle}>{listName}</li>
        <br></br>
      </ul>
    </div>
  );
};

export default List;
