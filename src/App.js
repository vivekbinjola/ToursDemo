import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeArticle = (id) => {
    const newArray = tours.filter((tr) => {
      return tr.id !== id;
    });
    setTours(newArray);
  };
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>No Tours left!</h2>
        <button className="btn" onClick={fetchData}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeArticle={removeArticle} />;
    </main>
  );
}

export default App;
