import React, { Component } from 'react';

 export class Cat extends Component {

    //Updating phase
    componentWillUpdate() {
        console.log("Component will update..")
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will recieve props...");
        console.log("nextProps: ", nextProps);
    }

    componentDidUpdate() {
        console.log("Component did update...");
    }

    render() {
        console.log("Component rendering...");
        return (
            <div>
                <h1>Cat Name: {this.props.catname}</h1>
            </div>
        )
    }
}

