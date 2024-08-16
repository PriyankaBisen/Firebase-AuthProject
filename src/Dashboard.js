
import React from 'react';
import './Dashboard.css';
import Navbar from './Navbar';

const Dashboard = () => {
  // Sample data
  const data = [
    { title: 'Total Users', value: 1500 },
    { title: 'Active Users', value: 300 },
    { title: 'Revenue', value: '$12,000' },
  ];

  return (
    <>
    <Navbar />
    <div className="dashboard">
    {data.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.title}</h3>
          <p>{item.value}</p>
        </div>
      ))}
    </div></>
  );
};

export default Dashboard;
