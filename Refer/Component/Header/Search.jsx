import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {

};

function Input(props) {
    return (
        <div>
            <nav className="navbar navbar-light">
                <form className="form-inline">
                    <input type="text" className="form-control--elm" placeholder='Typing something to search' />
                    <button className="btn-search">Search</button>
                </form>
            </nav>
        </div>
    );
}

export default Input;