import React from 'react';



// BookList renders a bootstrap list item
export default function BookList({ children }) {
    return (
        <ul className="list-group">{children}</ul>
    );
}

// export default function SearchResults() {
//     return (
//         <div>
//             <Details />
//         </div>
//     )
// }