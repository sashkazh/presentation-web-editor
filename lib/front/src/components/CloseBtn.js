import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeBgSettingsPanel } from '../actions/actions';

class CloseBtn extends Component {
  render() {
    return (
      <button
        className="closeBtn flatButton"
        onClick={this.props.clickHandler.bind(this)}
      >
        <svg
          className="closeIcon icon"
          xmlns="http://www.w3.org/2000/svg"
          width="179760.707"
          height="179760.522"
          viewBox="0 0 168.52566 168.52548"
        >
          <path d="M144.106 8.747c-2.374-2.375-6.196-2.375-8.57 0L84.262 60.02 32.99 8.744c-2.375-2.374-6.197-2.374-8.57 0L8.745 24.418c-2.374 2.374-2.375 6.198 0 8.572l51.273 51.274-51.273 51.272c-2.375 2.374-2.375 6.196 0 8.57L24.42 159.78c2.373 2.373 6.196 2.373 8.57 0l51.272-51.273 51.274 51.273c2.374 2.375 6.198 2.373 8.572 0l15.672-15.673c2.375-2.374 2.375-6.197 0-8.57l-51.273-51.274L159.78 32.99c2.373-2.374 2.373-6.196 0-8.57L144.105 8.746z" />
        </svg>
      </button>
    );
  }
}

export default connect()(CloseBtn);
