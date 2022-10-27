import React from 'react';
import PropTypes from 'prop-types';

Pagin.propTypes = {

};

function Pagin(props) {
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="prev">
                        <i className="fa-sharp fa-solid fa-chevron-left"></i>
                    </li>
                    <li className="item"><a className="link" href="#">1</a></li>
                    <li className="item"><a className="link" href="#">2</a></li>
                    <li className="item"><a className="link" href="#">3</a></li>
                    <li className=" next">
                        <i className="fa-sharp fa-solid fa-chevron-right"></i>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagin;