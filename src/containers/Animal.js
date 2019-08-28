import React, { Component } from 'react';
import { Cat } from './Cat';

 export class Animal extends Component {
    constructor() {
        super();
        console.log("Initializing component properties...");
        this.name = "Tiger"
    }

    //State of the component
    state = {
        catName: "ABC",
        showCat: true
    }

    updateCathandler = () => {
        this.setState({
            catName: "New Cat"
        })
    }

    showHideCathandler = () => {
        this.setState({
            showCat: !this.state.showCat
        })
    }

    //(Mounting Phase): this method is only called once in a life of a component, and this is right before it is initially.
    componentWillMount() {
        console.log("Component will mount...");
    }

    //(Mounting Phase): Whenever this method is called, React has already rendered our component and put it into the DOM.
    componentDidMount() {
        console.log("Component did mount...");
    }
    render() {
        console.log("Component rendering / re-rendering...");
        return (
            <div style={{marginTop: '15px'}}>
                <button onClick={this.updateCathandler}>Update Cat</button>
                <button style={{marginLeft: '5px'}} onClick={this.showHideCathandler}>Show/Hide Cat</button>
                {this.state.showCat ? <Cat catname={this.state.catName} /> : null}
            </div>
        )
    }
}