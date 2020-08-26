import React, { Component } from 'react'
import axios from "axios";
import './style.css'
import { Container } from "../../components/Grid";
import SearchBox from '../../components/SearchBox';
import BookList from '../../components/BookList';
import { SearchBtn } from '../../components/Button';
import EmptyList from '../../components/EmptyList'
import Details from '../../components/Details'
import AddBookBtn from '../../components/AddButton'

class Search extends Component {
    state = {
        searchRes: [],
        query: "",
        books: []
    };

    searchBooks = event => {
        event.preventDefault();
        let url = `https://www.googleapis.com/books/v1/volumes?q=${
            this.state.query
            }`;
        axios
            .get(url)
            .then(res => {
                this.displayResults(res.data);
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
        console.log("Query", this.state.query);
    }


    displayResults = data => {
        this.setState({ books: data.items });
    };

    render() {

        return (
            <Container fluid>

                <form className="container searchBox">
                    <div className="form-group">

                        <SearchBox
                            query={this.state.query}
                            handleInputChange={this.handleInputChange}
                        />
                        <SearchBtn
                            searchBooks={this.searchBooks}
                        />
                    </div>
                </form>
                <div className="container bg">

                    {(this.state.books && this.state.books.length > 0) ?
                        <BookList>
                            {this.state.books.map(book => {
                                return (
                                    <div className="book-details container my-3">
                                        <Details
                                            key={book.id}
                                            authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                                            title={book.volumeInfo.title}
                                            description={book.volumeInfo.description ?
                                                book.volumeInfo.description : "No Description Available"}
                                            link={book.volumeInfo.infoLink}
                                            thumbnail={book.volumeInfo.imageLinks.thumbnail ?
                                                book.volumeInfo.imageLinks.thumbnail : "#"}
                                        />

                                        <AddBookBtn
                                            authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                                            title={book.volumeInfo.title}
                                            description={book.volumeInfo.description ?
                                                book.volumeInfo.description : "No Description Available"}
                                            link={book.volumeInfo.infoLink}
                                            thumbnail={book.volumeInfo.imageLinks.thumbnail ?
                                                book.volumeInfo.imageLinks.thumbnail : "#"}

                                        />
                                    </div>
                                )
                            })}
                        </BookList>
                        :
                        <EmptyList />
                    }
                </div>
            </Container>
        )
    }
}

export default Search;