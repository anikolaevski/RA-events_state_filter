import React from 'react';
// import ReactDOM from 'react-dom';

import { items, filters } from './AppData';
let CurrentSelection = 'All';

export default class CBToolbar extends React.Component {
  static propTypes = {};
  state = { prev: 'All', current: 'All' }
  constructor(props) {
    super(props);
  }
  render () {
    let k = 0;
    return (
      <div>
        <div className="es_container">
          {filters.map( o => <Cbutton key={o} item = {o} parent = {this}/>)}
        </div>
        <div className="es_window">
          {items.map( o => <CItem key={k++} item = {o}/>)}
        </div>
      </div>
    );
  }
}

class Cbutton extends React.Component {
  constructor(props) {
    super(props);
    this.item = props;
  }
  handleClick (evt) {
    CurrentSelection = evt.currentTarget.innerText;
    this.item.parent.setState((prev) => ({prev, current: CurrentSelection}));
  }
  render() {
    const {item} = this.item;
    return(<button onClick={evt => this.handleClick(evt)}>{item}</button>);
  }
}

class CItem extends React.Component {
  constructor(props) {
    super(props);
    this.item = props;
  }
  render() {
    const {item} = this.item
    const {img, category} = item;
    if (CurrentSelection === 'All' || category === CurrentSelection) {
      return( <img src={img}/> );
    } else {
      return '';
    }
  }
}
