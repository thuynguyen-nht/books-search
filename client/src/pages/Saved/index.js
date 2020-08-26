import React, { Component } from 'react';
import { Container } from "../../components/Grid";
import Details from "../../components/Details"
import BookList from '../../components/BookList';
import axios from "axios";
import EmptyList from '../../components/EmptyList';
import { RemoveBookBtn } from '../../components/Button';
import { toast } from 'react-toastify';


class Saved extends Component {
    state = {
        savedBooks: [],
        initialized: true

    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        axios.get("/api/books")
            .then(res => {
                this.setState({ savedBooks: res.data })
            })
            .catch((err => console.log(err)))
    }

    deleteFromDB = id => {
        console.log(id);

        axios.delete(`/api/books/${id}`)
            .then(() => {
                toast.error('Book Deleted');
                this.getBooks();

            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                {this.state.savedBooks.length > 0 ?
                    <BookList>
                        {this.state.savedBooks.map(book => {
                            return (
                                <div className="bg">
                                    <Details
                                        key={book._id}
                                        authors={book.authors}
                                        title={book.title}
                                        description={book.description}
                                        link={book.link}
                                        thumbnail={book.thumbnail}
                                    />
                                    <RemoveBookBtn
                                        onClick={() => this.deleteFromDB(book._id)}
                                    />
                                </div>
                            )

                        })}
                    </BookList>
                    :
                    <EmptyList />
                }

            </Container>
        );
    }
}

export default Saved;