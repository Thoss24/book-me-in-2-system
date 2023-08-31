import './App.css';
import fetchData from './utility/fetch-data';
import { useState, useEffect } from 'react';

function App() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      const dataToStr = JSON.stringify(data)
      setEvents(dataToStr)
    };

    getData()
  })

  return (
    <div>
      <pre><p>{events}</p></pre>
    </div>
  );
}

export default App;
