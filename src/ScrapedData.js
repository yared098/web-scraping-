import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const ScrapedData = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://example.com');
        const $ = cheerio.load(response.data);
        const scrapedData = $('h1').text(); // Scrape data based on the HTML structure of the target website
        setData(scrapedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Scraped Data:</h2>
      <p>{data}</p>
    </div>
  );
};

export default ScrapedData;