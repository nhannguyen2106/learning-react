import React from "react";
import PropTypes from "prop-types";

SpecificTask.propTypes = {};

function SpecificTask(props) {
  return (
    <div>
      <ul className="list-items">
        <li>All Task</li>
        <li>New Task</li>
        <li>Doing Task</li>
        <li>Done Task</li>
      </ul>
    </div>
  );
}

export default SpecificTask;
