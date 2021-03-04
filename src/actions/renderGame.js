import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

export default function renderGame(game) {
  ReactDOM.render(
    <App game={game}/>,
    document.getElementById('root')
  );
}