import React from 'react';
import md5 from 'crypto-js/md5';

const TableRank = (players) => (
  <table>
    <tbody className="ranking-table">
      {players
        .sort((a, b) => b.score - a.score)
        .map((player, index) => (
          <tr key={ index } className="ranking-element">
            <th>
              <img src={ `https://www.gravatar.com/avatar/${md5(player.gravatarEmail)}` } alt={ player.name } />
            </th>
            <th data-testid={ `player-name-${index}` }>{player.name}</th>
            Score:
            <th data-testid={ `player-score-${index}` }>{player.score}</th>
          </tr>
        ))}
    </tbody>

  </table>
);

export default TableRank;
