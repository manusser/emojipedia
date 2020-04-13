import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form } from 'react-bootstrap';

class SearchBar extends Component {

  handlerForm(e){
    let valor = ReactDOM.findDOMNode(this.refs.search).value;
    e.preventDefault();
    this.props.fetchEmoji(valor);
    valor = '';
  }

  render(){
    return <div>
      <form onSubmit={this.handlerForm.bind(this)}>
        <Form.Group>
          <Form.Control size="lg" type="text" ref="search" placeholder="Search" />
          <br />
          <Button variant="primary" type="submit" size="lg" block>Send</Button>
        </Form.Group>
      </form>
    </div>
  }

}

export default SearchBar;
