import React from 'react';
import PropTypes from 'prop-types';

Task.propTypes = {

};

function Task(props) {
    return (
        <div>
            <ul className="list-group">
                <li className="group-item">ALL TASK</li>
                <li className="group-item">NEW TASK</li>
                <li className="group-item">DOING TASK</li>
                <li className="group-item">DONE TASK</li>
            </ul>
        </div>
    );
}

export default Task;