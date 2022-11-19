import * as React from 'react';
import SearchBar from './SearchBar';
import './style.css';

export default function App() {
  return (
    <div className="app">
      <h1 className="title">Realtime Search Bar</h1>
      <SearchBar />
      <div className="main-content">search results...</div>
    </div>
  );
}
