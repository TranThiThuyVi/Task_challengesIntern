// src/App.js
import React, { useState, useEffect } from 'react';
import Quotes from './component/Quotes';
import Author from './component/Author'; 

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAuthorQuotes, setShowAuthorQuotes] = useState(false);
  const [author, setAuthor] = useState('');

  const getQuotes = async (author = 'Bill Gates') => {
    setIsLoading(true);
    try {
      // const url = author ? 
      //         `https://quote-garden.onrender.com/api/v3/quotes/?author=${encodeURIComponent(author)}` :
      //         'https://quote-garden.onrender.com/api/v3/quotes/random';
      const url = `https://quote-garden.onrender.com/api/v3/quotes/?author=${encodeURIComponent(author)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.data) {
        setQuotes(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch quotes", error);
    }
    setIsLoading(false);
  };

    useEffect(() => {
      getQuotes();
    }, []);

    const handleAuthorClick = () => {
      setShowAuthorQuotes(true);
      setAuthor('Bill Gates');
      getQuotes('Bill Gates');
    };

    const handleBackClick = () => {
        setShowAuthorQuotes(false);
        getQuotes(); // Fetch random quotes or initial quotes again
    };

    return (
        <div className="relative min-h-screen">
            {isLoading ? (
                <div>Loading...</div>
            ) : showAuthorQuotes ? (
                <Author quotes={quotes} author={author} onBackClick={handleBackClick} />
            ) : (
                <Quotes quotes={quotes} onAuthorClick={handleAuthorClick} />
            )}
        </div>
    );        
}

export default App;
