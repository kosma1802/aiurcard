import React, { Component } from 'react'
import './Input.css'
export default class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
        return (
                <input className='input' type='text' onChange={this.props.onChange}></input>
        )
    }
}
