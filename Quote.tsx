import React = require('react');

const Quote = ({ quote }) => {
  return (
    <div>
      <p>"{quote.quote}"</p>
      <p>
        Quote by
        <span>{quote.character}</span>
        from
        <span>{quote.anime}</span>
      </p>
    </div>
  );
};

export default Quote;
