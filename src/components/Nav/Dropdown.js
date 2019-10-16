import React, { Component } from 'react';

export default class Dropdown extends Component {
  render() {
    return (
      <div>
        {this.props.title}<i class="icofont-thin-down"></i>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
