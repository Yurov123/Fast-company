import React from "react";

const Qualitie = ({ color, name, id }) => {
  return (
    <div>
      {user.qualities.map((item) => (
        <span className={"badge m-1 bg-" + item.color} key={item._id}>
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default Qualitie;
