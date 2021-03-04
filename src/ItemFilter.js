import React from 'react';
import PropTypes from 'prop-types';

import { items, filters } from './AppData';

export default class CBToolbar extends React.Component {
  static propTypes = {};
  state = { prev: 'All', current: 'All' }
  constructor(props) {
    super(props);
  }
  callback(newValue) { 
    this.setState( (prev) => ({prev, current: newValue}) );
  }
  render () {
    let k = 0;
    return (
      <div>
        <div className="es_container">
          {filters.map( o => <Cbutton key={o} item={o} callback={this.callback.bind(this)} />)}
        </div>
        <div className="es_window">
          {items.map( o => <CItem key={k++} item={o} state={this.state} />)}
        </div>
      </div>
    );
  }
}

class Cbutton extends React.Component {
  static propTypes = {
    item: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
  }
  handleClick () {
    this.props.callback(this.props.item);
  }
  render() {
    return(
    <button onClick={evt => this.handleClick(evt)}>{this.props.item}</button>
    );
  }
}

class CItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
  }
  render() {
    const {img, category} = this.props.item;
    if (this.props.state.current === 'All' || category === this.props.state.current) {
      return( <img src={img}/> );
    } else {
      return null;
    }
  }
}
