// src/component/Quote.js
import React, { useState } from 'react';

const Quote = ({ quote, onAuthorClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        onAuthorClick(quote.quoteAuthor);
    };

    return (
        <div className="p-6 my-6 rounded-lg max-w-xl mx-auto">
            <div className='border-s-4 border-orange-500'>
                <p className="text-xl font-semibold mb-4 ml-10">"{quote.quoteText}"</p>
            </div>
            <div
                className={`w-full py-10 px-10 flex items-center justify-between hover:bg-[#333333] hover:text-white transition cursor-pointer ${
                    isHovered ? 'bg-[#333333] text-white' : ''
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <div>
                    <p className="text-lg mb-2">{quote.quoteAuthor}</p>
                    <p className="text-md">{quote.quoteGenre}</p>
                </div>
                <p className='text-xl'>&#8594;</p>
            </div>
        </div>
    );
};

export default Quote;
