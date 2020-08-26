import React from 'react';
import './style.css'


// BookList renders a bootstrap list item
export default function BookList({ children }) {
    return (
        <ul className="list-group">{children}</ul>
    );
}

