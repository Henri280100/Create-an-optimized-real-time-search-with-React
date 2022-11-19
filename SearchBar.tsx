import React = require('react');

const SearchBar = ({ onSearchSubmit, clearResult }) => {
  const [term, setTerm] = React.useState('');
  const [debouncedTerm, setDebouncedTerm] = React.useState(term);

  React.useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  React.useEffect(() => {
    if (term !== '') {
      onSearchSubmit(term);
    } else {
      clearResult();
    }
  }, [term]);

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search user by name. . ."
        onChange={(e) => setDebouncedTerm(e.target.value)}
        value={debouncedTerm}
      />
    </div>
  );
};

export default SearchBar;
