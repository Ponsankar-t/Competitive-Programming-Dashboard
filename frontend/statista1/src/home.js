import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
  const username = sessionStorage.getItem('name');
  const [users, setUsers] = useState([]); // Use an empty array for initial state

  // Fetch users on component mount and handle potential errors
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getusers', {


          params: { username }, // Send username as a query parameter
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        // Optionally display an error message to the user
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <center>
        <h1><strong>User Details</strong></h1><br/>
        <h1>  </h1><br/>
        <h1>  </h1> <br/>
      </center>
      <div className="user-list-container">
        <div className="user-table-container">
          <table>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <th>Name‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :</th>
                  <td>‎ {user.name}</td>
                </tr>
              ))}<br/>
              {users.map((user) => (
                <tr key={`${user._id}-email`}>
                  <th>Email ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :</th>
                  <td>‎ {user.email}</td> <br/>
                </tr>
              ))}<br/>
              {users.map((user) => (
                <tr key={`${user._id}-LCd`}>
                  <th> LeetCode ID ‎ :</th>
                  <td>‎ {user.LCd}</td>
                </tr>
              ))}<br/>
              {users.map((user) => (
                <tr key={`${user._id}-codechef`}>
                  <th>CodeChef ID ‎ :</th>
                  <td>‎ {user.IId}  {/* Assuming 'codechefId' property exists in user object */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       <div id="c"> <center><br/><br/>
        <div id="a"> <Link to="/">
            <button type="Submit">Log-out</button>
          </Link></div>
          <div id="b">
          <Link to="/dashboard">
            <button type="Submit">back</button>
          </Link></div>
        </center></div>
      </div>
    </div>
  );
};

export default Home;