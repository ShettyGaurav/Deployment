import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:1670/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Gaurav' }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return <div>Check the console for the response!</div>;
}

export default App;
