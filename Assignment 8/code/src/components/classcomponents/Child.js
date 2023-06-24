import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props)
        console.log(`${this.props.title} constructor is called`);
    }

    componentDidMount(){
        console.log(`${this.props.title} componentDidMount is called`);
    }
  render() {
    console.log(`${this.props.title} render is called`);
    return (
      <li>{this.props.title}</li>
    )
  }
}
