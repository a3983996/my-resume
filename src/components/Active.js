import React from "react";

const Active = ({ activeHeight, top }) => {
  return (
    <div
      className="active"
      style={{ height: `${activeHeight}px`, top: `${top}` }}
    ></div>
  );
};

export default Active;
