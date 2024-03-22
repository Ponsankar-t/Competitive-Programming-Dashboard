import React, { useState, useEffect } from "react";
import './dcss.css';
import axios from 'axios';
import user from './images/user.png';
import lt from './images/leetcode.png';
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

async function fetchData(uid) {
  try {
    const url = 'https://leetcode-stats-api.herokuapp.com/' + uid;
    const response = await fetch(url);
    if (!response.ok) {
      return 'Error fetching data: ${response.status}';
    }
    const data = await response.json();
    return data['totalSolved'];
  } catch (error) {
    console.error("Error:", error);
    return 'Error fetching data'; // Or display a user-friendly message
  }
}
async function fetchData1(uid) {
  try {
    const url = 'https://leetcode-stats-api.herokuapp.com/' + uid;
    const response = await fetch(url);
    if (!response.ok) {
      return 'Error fetching data: ${response.status}';
    }
    const data = await response.json();
    return data['easySolved'];
  } catch (error) {
    console.error("Error:", error);
    return 'Error fetching data'; // Or display a user-friendly message
  }
}
async function fetchData2(uid) {
  try {
    const url = 'https://leetcode-stats-api.herokuapp.com/' + uid;
    const response = await fetch(url);
    if (!response.ok) {
      return 'Error fetching data: ${response.status}';
    }
    const data = await response.json();
    return data['mediumSolved'];
  } catch (error) {
    console.error("Error:", error);
    return 'Error fetching data'; // Or display a user-friendly message
  }
}
async function fetchData3(uid) {
  try {
    const url = 'https://leetcode-stats-api.herokuapp.com/' + uid;
    const response = await fetch(url);
    if (!response.ok) {
      return 'Error fetching data: ${response.status}';
    }
    const data = await response.json();
    return data['hardSolved'];
  } catch (error) {
    console.error("Error:", error);
    return 'Error fetching data'; // Or display a user-friendly message
  }
}
export default function Home() {
  const [totalSolved, setTotalSolved] = useState(null);
  const [easySolved, seteasySolved] = useState(null);
  const [mediumSolved, setmediumSolved] = useState(null);
  const [hardSolved, sethardSolved] = useState(null);
  const [error, setError] = useState(null);
  const username = sessionStorage.getItem('username');
  // const LCd=sessionStorage.getItem('LCd');
  const uid=sessionStorage.getItem('uid');
  useEffect(() => {
    const fetchLeetCodeData = async () => {
      const fetchedData = await fetchData(uid); // Replace with user input
      if (fetchedData instanceof Error) {
        setError(fetchedData.message); // Handle errors
      } else {
        setTotalSolved(fetchedData);
      }
    };

    fetchLeetCodeData();
  }, []);
  useEffect(() => {
    
    const fetchLeetCodeData1 = async () => {
      const fetchedData1 = await fetchData1(uid); // Replace with user input
      if (fetchedData1 instanceof Error) {
        setError(fetchedData1.message); // Handle errors
      } else {
        seteasySolved(fetchedData1);
      }
    };

    fetchLeetCodeData1();
  }, []);
  useEffect(() => {
    const fetchLeetCodeData2 = async () => {
      const fetchedData2 = await fetchData2(uid); // Replace with user input
      if (fetchedData2 instanceof Error) {
        setError(fetchedData2.message); // Handle errors
      } else {
        setmediumSolved(fetchedData2);
      }
    };

    fetchLeetCodeData2();
  }, []);
  useEffect(() => {
    const fetchLeetCodeData3 = async () => {
      const fetchedData3 = await fetchData3(uid); // Replace with user input
      if (fetchedData3 instanceof Error) {
        setError(fetchedData3.message); // Handle errors
      } else {
        sethardSolved(fetchedData3);
      }
    };

    fetchLeetCodeData3();
  }, []);

  
const lin="https://leetcode.com/"+uid;

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
        <link rel="stylesheet" href="styles.css" />
        {/* Feel free to remove these styles or customise in your own stylesheet 👍 */}
        <style dangerouslySetInnerHTML={{__html: "\n      .attribution {\n        font-size: 11px;\n        text-align: center;\n      }\n      .attribution a {\n        color: hsl(228, 45%, 44%);\n      }\n    " }} />
        <header className="header container">
        
          <div className="header__title">
            <h1>Statista</h1>
           <Link to ='/home' >
           <center><button type="Submit" className="bu">Profile</button></center></Link><br/>
           <Link to ='/codechef' >
           <center><button type="Submit" className="bu">Codechef</button></center></Link>
           <Link to ='/' ><br/>
           <center><button type="Submit" className="bu">Log-out</button></center></Link>
          </div>
          
        </header>
        <main>
          <section className="container cards"><a href={lin}>
            <div className="card card--facebook">
              <div className="card__platform">
                <img className="card__icon" src={lt} alt="Leetcode" />
                <div className="card__username">@{uid}</div>
              </div>
              <div className="card card--facebook">
        <div className="card__followers">
          <div className="card_count card_count--big">
            {error ? error : totalSolved}
             {/* Display error or fetched data */}
          </div>
          <div className="card__label">Total Solved</div>
        </div>
      </div>
            </div></a>
            <a href={lin}>  <div className="card card--twitter">
              <div className="card__platform">
                <img className="card__icon" src={lt} alt="Leetcode" />
                <div className="card__username">@{uid}</div>
              </div>
              <div className="card card--twitter">
              <div className="card__followers">
                <div className="card_count card_count--big">{error ? error : easySolved}{retrieve} {/* Display error or fetched data */}</div>
                <div className="card__label">Easy Solved</div>
              </div>
              </div>
            </div></a>
            <a href={lin}>  <div className="card card--instagram">
              <div className="card__platform">
                <img className="card__icon" src={lt} alt="Leetcode" />
                <div className="card__username">@{uid}</div>
              </div>
              <div className="card card--instagram">
              <div className="card__followers">
                <div className="card_count card_count--big">{error ? error : mediumSolved}{retrieve} {/* Display error or fetched data */}</div>
                <div className="card__label">Medium Solved</div>
              </div>
              </div>
            </div></a>
            <a href={lin}>  <div className="card card--youtube">
              <div className="card__platform">
                <img className="card__icon" src={lt} alt="Leetcode" />
                <div className="card__username">@{uid}</div>
              </div>
              <div className="card card--instagram">
              <div className="card__followers">
                <div className="card_count card_count--big">{error ? error : hardSolved}{retrieve} {/* Display error or fetched data */}</div>
                <div className="card__label">Hard Solved</div><br/>
                
              </div>
            </div>
            </div></a>
          </section>
  
        </main>
    </div>

  );
}