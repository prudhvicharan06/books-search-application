import React from "react";
import { useState, useEffect } from "react";
import './index.css'

function Searchbar() {
  const URL = "https://openlibrary.org/search.json?q=<your-query>";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const [isError, setError] = useState({ sat: false, msg: "" });

  const fetchData = async (apiUrl) => {
    setLoading(true);
    setError({ sat: false, msg: "" });

    try {
      const response = await fetch(apiUrl);
      const { docs } = await response.json();

      setData(docs);
      setLoading(false);
      setError({ sat: false, msg: "" });

      if (!docs) {
        throw new Error("data not found...");
      }
    } catch (error) {
      setLoading(false);
      setError({ sat: true, msg: error.message || "somenthing went wrong" });
      console.log(error.message);
    }
  };

  useEffect(() => {
    const finalUrl = `${URL}${searchItem}`;
    fetchData(finalUrl);
  }, [searchItem]);

  return (
    <div>
      <header className="App-header">
        <form>
          <input
            type="text"
            name="saerch"
            id="search"
            placeholder="search Something"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </form>

        {loading && <h1>Loading...</h1>}
        {isError?.sat && <h1>{isError.msg}</h1>}

        {!loading && !isError?.sat && (
          <ul>
            {data.map((eachData) => {
              const { author_key, title } = eachData;
              return (
                <li key={author_key} className='search-li'>
                  <div>
                    <div>{title}}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </header>
    </div>
  );
}

export default Searchbar;
