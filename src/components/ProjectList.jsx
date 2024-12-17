import { Component } from "react";

export class ProjectList extends Component {
  constructor() {
    super();

  }

  render() {
    let cards = [];
    this.props.filterdCards.forEach(element => {
        cards.push(<img src={element.img}></img>)
    });
    return cards;
  }
}