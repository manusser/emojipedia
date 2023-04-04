import React, { Component } from 'react';

import Emojis from './components/Emojis';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';


import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const API = "https://emoji-api.com/emojis?search=";
const API_KEY = "";

class App extends Component {

  state = {
    search: '',
    datos: [],
    categories: [],
    isLoaded: false
  }



  fetchSearch(search){

    let url = `${API}${search}&access_key=${API_KEY}`;

    fetch(url)
    .then((res) => res.json() )
    .then((data) => {
      if(typeof data !== 'undefined'){
        this.setState({
          datos: data,
          isLoaded: true,
        })
      }else{
        this.setState({
          data: null,
          isLoaded: false
        })
      }

    });
  }

  fetchCategory(category){

    let url = `https://emoji-api.com/categories/${category}?access_key=${API_KEY}`;

    fetch(url)
    .then((res) => res.json() )
    .then((data) => {
      if(typeof data !== 'undefined'){
        this.setState({
          datos: data,
          isLoaded: true,
        })
      }else{
        this.setState({
          datos: null,
          isLoaded: false
        })
      }

    });
  }

  searchCategories(){

    let url = `https://emoji-api.com/categories?access_key=${API_KEY}`;

    fetch(url)
    .then((res) => res.json() )
    .then((data) => {
      if(typeof data !== 'undefined' || data.lenght !== null){
        this.setState({
          categories: data.filter(dato => dato.slug !== "component" && dato.slug !== "flags"),
          error: false
        })
      }else{
        this.setState({
          error: true,
          categories: null,
        })
      }

    });
  }

  componentDidMount = async() => {
    await this.fetchSearch(this.state.search);
    await this.searchCategories();

  }


  render(){
    const {search, datos, isLoaded, categories} = this.state;
    return (
      <Container>
        <Jumbotron fluid>
          <Container align="center">
            <h1>Emojipedia 🌍</h1>
            <p>
              Emojipedia is a project who contains all posibles Emojis in the world.
            </p>
            <i>Click on a Emoji to copy it!</i>
          </Container>
        </Jumbotron>

        <Row md="auto">
          <Col>
            <SearchBar fetchEmoji={this.fetchSearch.bind(this)}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container align="center">
              <h1>Categories</h1>
              <Categories action={this.fetchCategory.bind(this)} data={categories}/>
            </Container>
          </Col>
        </Row>
        <Row>
          <Emojis loaded={isLoaded} search={search} data={datos} />
        </Row>
      </Container>
    )
  }

}

export default App;
