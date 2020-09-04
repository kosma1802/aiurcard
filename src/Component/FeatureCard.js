import React, { Component } from 'react';
import './FeatureCard.less'

export default class FeatureCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div style={{widht:180,display:'block',float:'left',paddingBottom:4}}>
            <div className="card">
                <img className="icon" src={this.props.iconType}></img>
            </div>
            <div className="features">
                <text className="title">{this.props.title}</text>
                <br />
                <text className="description">{this.props.description}</text>
            </div>
            </div>
        )
    }
}
