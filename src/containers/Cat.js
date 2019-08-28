import React, { Component } from 'react';

 export class Cat extends Component {

    //Updating phase
    componentWillUpdate() {
        console.log("Component will update..")
    }

    //(Update Phase): By default, this method is not implemented, so every update of state or props causes a render, even if the props didn’t change. However, if you want to avoid possible unnecessary renders, you could handle this here.
    shouldComponentUpdate() {
        console.log("Should component update..");
        return true; //If we returning false, then React will not execute componentWillUpdate(), render() and componentDidUpdate().
    }

    //(Update Phase): Whenever a component receives a new set of props, this method will be called first. Also, please note, that React calls this method, even when the props have not changed.
    componentWillReceiveProps(nextProps) {
        console.log("Component will recieve props...");
        console.log("nextProps: ", nextProps);
    }

    //(Update Phase): Everything went well, and React updated our component. Directly after rendering
    componentDidUpdate() {
        console.log("Component did update...");
    }

    //(Unmount Phase): Whenever a component removed / destroyed from DOM, this method will get executed
    componentWillUnmount() {
        console.log("Component will unmount/ remove...");
    }

    render() {
        return (
            <div>
                <h1>Cat Name: {this.props.catname}</h1>
            </div>
        )
    }
}