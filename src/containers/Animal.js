import React, { Component } from 'react';
import { Cat } from './Cat';

 export class Animal extends Component {
    constructor() {
        super();
        console.log("Initializing component properties...");
        this.name = "Tiger"
    }

    state = {
        catName: "ABC"
    }

    updateCathandler = () => {
        this.setState({
            catName: "New Cat"
        })
    }

    componentWillMount() {
        console.log("Component will mount...");
    }

    componentDidMount() {
        console.log("Component did mount...");
    }
    shouldComponentUpdate() {
         return true;;
    }
    render() {
        console.log("Component rendering...");
        return (
            <div>
                <Cat catname={this.state.catName} />
                <button onClick={this.updateCathandler}>Update Cat</button>
            </div>
        )
    }
}

