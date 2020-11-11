import React, { Component } from 'react';
import { GoHome, TableRank } from '../components';
import './style_sheets/Ranking.scss';
import triviaLogo from '../visual_identity/logo/trivia_logo_noBg2.png';


class Ranking extends Component {
  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    return (
      <div className="default-page ranking-page">
        <header>
          <img src={ triviaLogo } alt="Trivia Logo" className="logo" />
          <h1 data-testid="settings-title">Ranking</h1>
        </header>

        <main>
          { TableRank(ranking) }
          <GoHome />
        </main>
      </div>
    );
  }
}

export default Ranking;
