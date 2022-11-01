import React, { useState } from "react";
import PropTypes from "prop-types";

CreateNewTask.propTypes = {};

function CreateNewTask({ onClick }) {
  return (
    <div className="createTaskBtn" onClick={onClick}>
      <a href="#">Create New Task</a>
    </div>
  );
}

export default CreateNewTask;
