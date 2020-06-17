import React, { Component } from 'react'
import axios from "axios";
import { Container } from "../../components/Grid";
import Jumbotron from '../../components/Jumbotron';
import SearchBox from '../../components/SearchBox';
import BookList from '../../components/BookList';

class Search extends Component {
    state = {
        searchRes: [],
        query: "",
        books: []
    };

    searchBooks = () => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${
            this.state.query
            }`;
        axios
            .get(url)
            .then(res => {
                //console.log(res);
                this.displayRes(res.data);
            })
            .catch(err => console.log(err));
    }

    handleInputSubmit = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    displayResults = data => {
        this.setState({ books: data.items });
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron />
                <SearchBox
                    query={this.state.query}
                    handleInputSubmit={this.handleInputSubmit}
                    searchBooks={this.searchBooks}
                />
                <BookList
                />
            </Container>
        )
    }
}

export default Search;