import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    constructor(props){
        super(props);
        console.log("Inside Constructor!!!");
        this.state={name:"Jinal"};

        setTimeout(()=>{
            this.setState({name:"Rinal"});
        }, 3000);
    }

    componentWillMount(){
        console.log("Component Will Mount!");
    }

    shouldComponentUpdate(){
        console.log("Should Component Update!");
        return true;
    }

    componentWillUpdate(newProps,newState){
        console.log("Component Will Update!" , newProps, newState);
    }

    componentDidUpdate(preProps, preState){
        console.log("Component Did Update",preProps, preState);
    }

    render() {
        console.log("Inside Render Method!");
        return (
            <div>
                
            </div>
        )
    }
}
