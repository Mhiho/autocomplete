import React from "react";

const ListOfNames = ({ names }) => {
  return (
    <React.Fragment>
        {names.map((name, index) => (
          <p key={name + index}>{name}</p>
        ))}
    </React.Fragment>
  );
};
export default ListOfNames;
