import React from 'react';
import backgroundImage from '/image.jpeg'; // Update the path to your background image file

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the start (left)
    justifyContent: 'flex-start', // Align content to the start (top)
    padding: '20px', // Add some padding to the container
    color: '#ffffff',
  };

  const h1Style = {
    fontSize: '3rem',
    fontWeight: 'bold',
    textDecoration: 'underline',
    margin: '0', // Remove default margin
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Home Page</h1>
      {/* Other content goes here */}
    </div>
  );
};

export default Home;
