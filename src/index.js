import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.css';  // 전역 스타일
import App from './App';     // 앱 컴포넌트

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
