import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { circleA } from './example';

class Text extends React.Component {
  render() {
    return (
      <div ciid = {this.props.ciid} >
        <p>{this.props.header}</p>
      </div>
    );
  }
}

class InnerCircle extends React.Component {
  render() {
    return (
      <div ciid = {this.props.ciid} cid = {this.props.cid}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cid : 1,
      items : circleA.items,
      name : circleA.name,
    }
  }

  handleItems(items) {
    console.log(items);
    items = [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].type == 0) {
        items.push(<Text ciid = {items[i].ciid}  header = {items[i].data.header} children = {items[i].children}/>);
      } else {
        items.push(<InnerCircle ciid = {items[i].ciid} cid = {items[i].data.cid} name = "b"/>); //de naam moet nog automatisch worden opgehaald
      }
    }
    return(items); //dit werkt niet want kennelijk kan je maar een ding returnen, maar ik vind vast ooit wel iets dat het wel laat werken
  }

  render() {
    return (
      <div> //ik heb het canvas object niet gebruikt aangezien daar knoppen op maken eigenlijk bij elke muisklik kijken of de coordinaten overeen komen.
        <h1>{this.state.name}</h1>
        <div>{this.handleItems(this.state.items)}<div>
      </div>
    );
  }


// ========================================
ReactDOM.render(
  <Circle />,
  document.getElementById('root')
);
