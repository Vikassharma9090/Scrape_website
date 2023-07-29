// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const Google_custom = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const apiKey = 'YOUR_GOOGLE_CUSTOM_SEARCH_API_KEY';
      const searchEngineId = 'YOUR_SEARCH_ENGINE_ID'; // This is your Custom Search Engine ID
      const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
        query
      )}&num=5&cx=${searchEngineId}&key=${apiKey}`;

      const response = await axios.get(apiUrl);
      const searchResults = response.data.items;

      if (searchResults && searchResults.length > 0) {
        // Extract URLs from the search results
        const urls = searchResults.map((result) => result.link);

        // Set the results state to display the URLs
        setResults(urls);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Search</button>
      <div>
        {results.length > 0 ? (
          results.map((url, index) => (
            <p key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </p>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Google_custom;
