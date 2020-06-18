import React, { Component } from 'react'
import axios from "axios";
import { Container } from "../../components/Grid";
import Jumbotron from '../../components/Jumbotron';
import SearchBox from '../../components/SearchBox';
import BookList from '../../components/BookList';
import Button from '../../components/Button';
import EmptyList from '../../components/EmptyList'

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
                console.log(res);
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
                <Jumbotron />
                <form className="container searchBox">
                    <div className="form-group">

                        <SearchBox
                            query={this.state.query}
                            handleInputChange={this.handleInputChange}
                        />
                        <Button
                            searchBooks={this.searchBooks}
                        />
                    </div>
                </form>
                {(this.state.books && this.state.books.length > 0) ?
                    <BookList

                    />
                    :
                    <EmptyList />
                }
            </Container>
        )
    }
}

export default Search;