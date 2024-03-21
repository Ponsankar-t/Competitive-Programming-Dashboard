import React, { useState, useEffect } from "react";
import './dcss.css';
import axios from 'axios';
import codechef from './images/codechef.jpg';
import retrieve from './retrieve.js';
import { Link} from 'react-router-dom';


const MyComponent = () => {
  const [data, setData] = useState(null); // Initial state for data

  useEffect(() => {
    const fetchDataFromDb = async () => {
      const fetchedData = await fetchData('http://localhost:5000/users'); // Replace with your URL
      setData(fetchedData);
    };

    fetchDataFromDb();
  }, []);}

async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
export default function Home() {
  const [currentRating, setcurrentRating] = useState(null);
  const [highestRating, sethighestRating] = useState(null);
  const [globalRank, setglobalRank] = useState(null);
  const [countryRank, setcountryRank] = useState(null);
  const [error, setError] = useState(null);
  const username = sessionStorage.getItem('username');
  // const LCd=sessionStorage.getItem('LCd');
  const uid=sessionStorage.getItem('uid');
  const url1='https://codechef-api.vercel.app/'+uid;
  const lin='https://www.codechef.com/users/'+uid;
  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await axios.get(url1, { crossOrigin: 'anonymous' }); // Address CORS
        const data = await response.json();
        setcurrentRating(data.currentRating);
        sethighestRating(data.highestRating);
        setglobalRank(data.globalRank);
        setcountryRank(data.countryRank);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchLeetCodeData();
  }, []);

  


  return (
    <div>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* displays site properly based on user's device */}
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <title>Statista</title>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="dcss.css" />
        {/* Feel free to remove these styles or customise in your own stylesheet 👍 */}
        <style dangerouslySetInnerHTML={{__html: "\n      .attribution {\n        font-size: 11px;\n        text-align: center;\n      }\n      .attribution a {\n        color: hsl(228, 45%, 44%);\n      }\n    " }} />
        <header className="header container">
        
          <div className="header__title">
            <h1>Statista</h1>
            <Link to ='/dashboard' >
           <center><button type="Submit" className="bu">Back</button></center></Link>
          </div> <br/>
          <Link to ='/' >
           <center><button type="Submit" className="bu">Log-out</button></center></Link>
          
           
          
        </header>
        <main>
          <section className="container cards">
          <a href={lin}> <div className="card card--facebook">
              <div className="card__platform">
                <img className="card__icon" src={codechef} alt="Leetcode" />
                <div className="card__username">@{uid}</div>
              </div>
              <div className="card card--facebook">
        <div className="card__followers">
          <div className="card_count card_count--big">
            {error ? error : currentRating}{/* Display error or fetched data */}
          </div>
          <div className="card__label">Current Rating</div>
        </div>
      </div>
            </div></a>
            <a href={lin}>  <div className="card card--twitter">
              <div className="card__platform">
                <img className="card__icon" src={codechef} alt="Codechef" />
                <div className="card__username">@{uid}</div>
              </div>
              <div className="card card--twitter">
              <div className="card__followers">
                <div className="card_count card_count--big">{error ? error : highestRating}{retrieve} {/* Display error or fetched data */}</div>
                <div className="card__label">Highest Rating</div>
              </div>
              </div>
            </div></a>
            <a href={lin}><div className="card card--instagram">
              <div className="card__platform">
                <img className="card__icon" src={codechef} alt="Leetcode" />
                <div className="card__username">@{uid}</div>
              </div>
              <div className="card card--instagram">
              <div className="card__followers">
                <div className="card_count card_count--big">{error ? error : globalRank}{retrieve} {/* Display error or fetched data */}</div>
                <div className="card__label">Global Rank</div>
              </div>
              </div>
            </div></a>
            <a href={lin}><div className="card card--youtube">
              <div className="card__platform">
                <img className="card__icon" src={codechef} alt="Leetcode" />
                <div className="card__username">@{uid}</div>
              </div>
              <div className="card card--instagram">
              <div className="card__followers">
                <div className="card_count card_count--big">{error ? error : countryRank}{retrieve} {/* Display error or fetched data */}</div>
                <div className="card__label">Country Rank</div>
              </div>
            </div>
            </div></a>
          </section>
  
        </main>
    </div>

  );
}