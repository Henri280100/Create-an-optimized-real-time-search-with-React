import * as React from 'react';
import Quote from './Quote';
import SearchBar from './SearchBar';
import './style.css';

export default function App() {
  const [quotes, setQuotes] = React.useState([]);

  const onSearchSubmit = async (term) => {
    const res = await fetch(
      `https://animechan.vercel.app/api/quotes/anime?title=${term}`
    );
    const quotesArray = await res.json();
    setQuotes(quotesArray);
  };

  const clearResult = () => setQuotes([]);

  const renderedQuotes = quotes.map((quote, i) => {
    return <Quote quote={quote} key={i} />;
  });

  return (
    <div className="app">
      <h1 className="title">Realtime Search Bar</h1>
      <SearchBar onSearchSubmit={onSearchSubmit} clearResult={clearResult} />
      <div>{renderedQuotes}</div>
    </div>
  );
}
