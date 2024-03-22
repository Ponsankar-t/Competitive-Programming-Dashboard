import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [dataValue, setDataValue] = useState(null); // State variable to store retrieved data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/mer/users'); // Replace with your API endpoint
        setDataValue(response.data.specificField); // Access the desired field from the response
      } catch (error) {
        console.error(error);
        // Handle errors (display an error message, etc.)
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures data is fetched only once on component mount

  // Use the dataValue in your component logic
  return (
    <div>
      {dataValue !== null && <p>{dataValue}</p>}
    </div>
  );
};

export default MyComponent;
