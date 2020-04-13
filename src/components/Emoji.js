import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './bootstrap.css';

class Emoji extends Component {

  copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Copied to the clipboard!");
  };

  render(){
      return <Button onClick={this.copyToClipboard.bind(this, this.props.emoji)} id={this.props.emoji} className="col-lg-4 col-md-4 col-sm-4 col-xs-4" variant="outline-secondary">{this.props.emoji}</Button>
  }
}


export default Emoji;
