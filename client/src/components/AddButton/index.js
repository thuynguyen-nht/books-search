import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

class AddBookBtn extends React.Component {

    postToDB = (book) => {
        console.log(book)
        var dbBook = {
            title: book.title,
            authors: book.authors,
            description: book.description,
            thumbnail: book.thumbnail,
            link: book.link
        }

        axios.post("/api/books", dbBook)
            .then(() => toast.success(`You added ${book.title} to your bookshelf`))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.postToDB(this.props) }
                } className="btn btn-lg">
                    Save Book
                </button>
            </div>
        );
    }
}

export default AddBookBtn;