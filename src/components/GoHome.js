import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../visual_identity/general_styles/buttons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

class GoHome extends Component {
  render() {
    return (
      <div className="ranking-footer">
        <Link to="/">
          <button
            type="button"
            data-testid="btn-go-home"
            className="btnDarkBlue"
          >
            <FontAwesomeIcon icon={ faAngleDoubleLeft } />
          </button>
        </Link>
      </div>
    );
  }
}

export default GoHome;
