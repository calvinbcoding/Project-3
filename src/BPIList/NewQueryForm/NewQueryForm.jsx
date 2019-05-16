import React, {Component } from 'react';

class CurrentBPIForm extends Component{
    constructor(){
        super();
        this.state = {
            bpi: bpi.USD
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.targe]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createCurrentBPI(this.state);
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
            Current BPI: <input onChange = {this.handleChange} type="text" name="name" />
            <input type="submit"/>
        </form>
    }
}
export default CurrentBPI;