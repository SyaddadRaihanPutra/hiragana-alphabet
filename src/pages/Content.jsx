import React, { useState, useEffect } from "react";
import Home from "../components/Home";
import axios from "axios";
import HiraganaCard from "../components/HiraganaCard";
import SearchBar from "../components/SearchBar";

export default function Content() {
  const [japaneseData, setJapaneseData] = useState(null);
  const [filteredData, setFilteredData] = useState(null); // Ubah initial state filteredData menjadi null

  useEffect(() => {
    // Fetching Japanese data
    const options = {
      method: "GET",
      url: "https://japanese-alphabet.p.rapidapi.com/v1.0/language",
      params: {
        language: "hiragana",
      },
      headers: {
        "X-RapidAPI-Key": "d4f2065d7emsh0621ad7edc9a9f3p19aa2djsnff2ebbac3826",
        "X-RapidAPI-Host": "japanese-alphabet.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setJapaneseData(response.data.data[0].content); // Mengakses response.data.data
      })
      .catch((error) => {
        console.error("Error fetching Japanese data:", error);
      });
  }, []); // Empty dependency array to run once on component mount

  useEffect(() => {
    // Set filteredData saat japaneseData berubah
    setFilteredData(japaneseData);
  }, [japaneseData]); // Memasukkan japaneseData ke dalam dependency array

  const handleSearch = (searchTerm) => {
    // Filter data berdasarkan kata kunci pencarian
    const filteredResults = japaneseData.filter((character) =>
      character.romaji.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div className="container">
      <Home />
      <SearchBar handleSearch={handleSearch} />
      {filteredData && filteredData.length > 0 ? (
        <div>
          {/* Loop through filteredData, bukan japaneseData */}
          <div className="hiragana-card-container row">
            {filteredData.map((character, index) => (
              <HiraganaCard key={index} character={character} />
            ))}
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>No data found</p>
      )}
    </div>
  );
}
