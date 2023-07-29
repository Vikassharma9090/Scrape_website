import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://app.scrapingbee.com/api/v1/",
        {
          url: inputValue,
          render_js: false,
        },
        {
          headers: {
            "API-Key": "HNQ9G1ZZSHARN29YV41W5M8170377QIMT7RQJQK7HYVEQ3K0AZM3M19EMV8ZDK4M2QZJZN4KXZA50BE7",
          },
        }
      );

      const text = response.data.text;

      setResults([...results, text]);
    } catch (error) {
      console.error("Error scraping the URL:", error);
    }
  };

  return (
    <div className="App">
      <>
      <h1>Scrape </h1>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Scrape</button>
        <>
          {results.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </>
      </>
    </div>
  );
};

export default App;

// Google Custom  Api


// import React, { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = async () => {
//     try {
//       const apiKey = "AIzaSyCluKMHxJhtpfwOQkvRZ5c9v7I1U91_RU0";
//       const searchEngineId = "53c0213af229e496f";
//       const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
//         query
//       )}&num=5&cx=${searchEngineId}&key=${apiKey}`;

//       const response = await axios.get(apiUrl);
//       const searchResults = response.data.items;

//       if (searchResults && searchResults.length > 0) {
//         const urls = searchResults.map((result) => result.link);

//         setResults(urls);
//       } else {
//         setResults([]);
//       }
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <>
//       <h1>Google Search Engine Show  Top 5 Link </h1>
//       <input type="text" value={query} onChange={handleInputChange} />
//       <button onClick={handleSubmit}>Search</button>
//       <div>
//         {results.length > 0 ? (
//           results.map((url, index) => (
//             <p key={index}>
//               <a href={url} target="_blank" rel="noopener noreferrer">
//                 {url}
//               </a>
//             </p>
//           ))
//         ) : (
//           <p>No results found.</p>
//         )}
//       </div>
//       </>
//     </div>
//   );
// };

// export default App;
