import React from 'react';
import PropTypes from 'prop-types';
import Todolist from './Todolist';

Todo.propTypes = {

};

function Todo(props) {
    const data = [
        {
            title: "Task 1",
            author: "Duong Viet Duc",
            status: "New",
            description: "This is task home work. This is task home work"
        },
        {
            title: "Task 2",
            author: "Duong Viet Duc",
            status: "New",
            description: "This is task home work. This is task home work"
        },
        {
            title: "Task 3",
            author: "Duong Viet Duc",
            status: "Done",
            description: "This is task home work. This is task home work"
        },
        {
            title: "Task 4",
            author: "Duong Viet Duc",
            status: "Doing",
            description: "This is task home work. This is task home work"
        },
        {
            title: "Task 5",
            author: "Duong Viet Duc",
            status: "New",
            description: "This is task home work. This is task home work"
        },
        {
            title: "Task 6",
            author: "Duong Viet Duc",
            status: "New",
            description: "This is task home work. This is task home work"
        },
        {
            title: "Task 7",
            author: "Duong Viet Duc",
            status: "Done",
            description: "This is task home work. This is task home work"
        },
        {
            title: "Task 8",
            author: "Duong Viet Duc",
            status: "New",
            description: "This is task home work. This is task home work"
        },
        {
            title: "Task 9",
            author: "Duong Viet Duc",
            status: "Doing",
            description: "This is task home work. This is task home work"
        },
        {
            title: "Task 10",
            author: "Duong Viet Duc",
            status: "Done",
            description: "This is task home work. This is task home work"
        },
        {
            title: "Task 11",
            author: "Duong Viet Duc",
            status: "New",
            description: "This is task home work. This is task home work"
        },
        {
            title: "Task 12",
            author: "Duong Viet Duc",
            status: "Done",
            description: "This is task home work. This is task home work."
        },

    ]
    return (
        <>
            {data.map((item, index) => (
                <Todolist
                    key={index}
                    title={item.title}
                    author={item.author}
                    status={item.status}
                    description={item.description}
                />
            ))}
        </>
    );
}

export default Todo;