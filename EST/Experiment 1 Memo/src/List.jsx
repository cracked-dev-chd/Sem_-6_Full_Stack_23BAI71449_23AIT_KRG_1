import React from "react";

const List = React.memo(({ items }) => {
  console.log("List component rendered");

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
});

export default List;