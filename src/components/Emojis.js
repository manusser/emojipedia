import React, { Component } from 'react';
import Emoji from './Emoji';
import { Alert, Col, Spinner, Badge } from 'react-bootstrap';

class Emojis extends Component {

  render(){
    if(this.props.data && this.props.loaded){
        return (
          this.props.data.map(e => {
            const emoji = String.fromCodePoint(parseInt(e.codePoint, 16));
            return <Emoji key={e.slug} emoji={emoji} slug={e.slug} />
          })
        )
    }else if(!this.props.loaded){
      return <Col align="center">
      <h1><Badge variant="dark">
                        Loading 
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      </Badge></h1>
      </Col>
    }else{
      return <Col>
        <Alert variant="danger" >Ups, no Emoji was found :(</Alert>
      </Col>
    }
  }
}


export default Emojis;
