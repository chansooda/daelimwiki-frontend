import React from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import './css/global.css';  // 전역 스타일

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          {/* 페이지 컴포넌트가 여기에 들어갈 것입니다 */}
        </main>
      </div>
    </div>
  );
};

export default App;
