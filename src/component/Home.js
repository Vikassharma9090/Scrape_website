// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://app.scrapingbee.com/api/v1/',
        {
          url: inputValue,
          render_js: false,
        },
        {
          headers: {
            'API-Key': 'HNQ9G1ZZSHARN29YV41W5M8170377QIMT7RQJQK7HYVEQ3K0AZM3M19EMV8ZDK4M2QZJZN4KXZA50BE7',
          },
        }
      );

      const text = response.data.text;

      // Append the new result to the existing results array
      setResults([...results, text]);
    } catch (error) {
      console.error('Error scraping the URL:', error);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Scrape</button>
      <div>
        {results.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
