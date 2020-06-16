import React, { Component } from 'react'
import { Container } from "../components/Grid";
import Jumbotron from '../components/Jumbotron';
import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';

class Search extends Component {
    render() {
        return (
            <Container fluid>
                <Jumbotron />
                <SearchBox />
                <SearchResults />
            </Container>
        )
    }
}

export default Search;