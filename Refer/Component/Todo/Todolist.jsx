import React from 'react';
import PropTypes from 'prop-types';

Todolist.propTypes = {

};

function Todolist(props) {
    const { status, author, title, description } = props;
    return (
        <div className='todolist'>
            <div className='title'>
                <h6 className='title__task'>Title: {title}</h6>
                <p className='author'>Creator: {author}</p>
                <span className={status}>Status: {status}</span>
            </div>
            <div className="description">
                <h6 className='descript'>Description:</h6>
                <p className='description--p'>{description}</p>
                <div className="status">
                    <p className='select' value={status}>{status} <i className="fa-solid fa-angle-down"></i></p>
                </div>
            </div>
        </div>
    );
}

export default Todolist;