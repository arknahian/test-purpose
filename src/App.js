import { useEffect, useState } from 'react';
import './App.css';
import Country from './Components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
    hello
         {
           countries.map(country => <Country key={country.ccn3} country={country}></Country>)
         }
  
      </header>
    </div>
  );
}

export default App;
