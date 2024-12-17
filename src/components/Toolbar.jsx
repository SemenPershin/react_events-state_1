import { Component } from "react";



export class Toolbar extends Component {
    constructor() {
        super();
    }

    createToolbarComponent() {
        let components = [];
        this.props.filters.forEach(element => {
            components.push(<button onClick={() => {this.props.onSelectFilter(element);}} className={element.toLowerCase().replace(/\s/g, "_")}>{element}</button>)

        });
        
        return components;
    }

    render() {
        return this.createToolbarComponent()
    }
}