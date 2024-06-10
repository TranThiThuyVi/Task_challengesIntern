// src/component/Quotes.js
import React, { useState } from 'react';
import Quote from './Quote';

const Quotes = ({ quotes, onAuthorClick }) => {
    const [showAllQuotes, setShowAllQuotes] = useState(false);

    return (
        <div>
            {quotes.slice(0, showAllQuotes ? quotes.length : 1).map((quote) => (
                <Quote key={quote._id} quote={quote} onAuthorClick={onAuthorClick} showAllQuotes={showAllQuotes} setShowAllQuotes={setShowAllQuotes} />
            ))}
        </div>
    );
};

export default Quotes;
