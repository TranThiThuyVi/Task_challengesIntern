import React from 'react';

const Author = ({ quotes, author, onBackClick }) => {
    return (
        <div className="p-6 my-6 rounded-lg max-w-xl mx-auto relative">
            <div
                className="flex absolute font-bold right-0 justify-end m-2 cursor-pointer"
                onClick={onBackClick}
            >
                <p>Go back</p>
            </div>
            <h2 className="text-2xl font-semibold mb-4">{author}</h2>
            {quotes.map((quote) => (
                <div key={quote._id} className="mb-4 border-s-4 border-orange-500 p-4">
                    <p className="text-xl font-semibold">"{quote.quoteText}"</p>
                </div>
            ))}
        </div>
    );
};

export default Author;
