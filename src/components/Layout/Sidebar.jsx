import React from 'react';
import '../../css/components/Sidebar.css'; //상대경로

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/wiki">Wiki</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/user">User</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
