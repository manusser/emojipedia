import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Categories extends Component {



  render(){
    if(this.props.data){
      return (
        this.props.data.map(e => {
          const slug = e.slug;
          const slug_modified = slug.split('-').join(' ');
          return <Button key={e.slug} onClick={this.props.action.bind(this, e.slug)} variant="success" style={{marginRight: '10px', marginBottom: '5px'}}>{slug_modified}</Button>
        })
      )
    }
  }

}

export default Categories;
