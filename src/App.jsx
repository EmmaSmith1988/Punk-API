import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CardInfo from './components/CardInfo/CardInfo';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterABV, setFilterABV] = useState('');
  const [filterClassic, setFilterClassic] = useState('');
  const [filterPH, setFilterPH] = useState(false);
  const [beersArr, setBeersArr] = useState([]);

  useEffect( () => {
    fetch(`https://api.punkapi.com/v2/beers?per_page=80${filterABV}${filterClassic}`)
      .then(response => response.json())
      .then(userObjects => {
        setBeersArr([...userObjects]);
        })
  }, [filterABV, filterClassic])

  const handleInput =  (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input)
  }

  const handleFilterABV = (event) => {
    if (event.target.checked){
      setFilterABV('&abv_gt=6');
    } else {
      setFilterABV('');
    }
  }

  const handleFilterClassic = (event) => {
    if (event.target.checked){
      setFilterClassic('&brewed_before=01-2010');
    } else {
      setFilterClassic('');
    }
  }

  const handleFilterPH = (event) => {
    if (event.target.checked){
      setFilterPH(event.target.checked);
    } else {
      setFilterPH(false);
    }
  }

  return (
    
      <div>
        <Navbar searchTerm={searchTerm} handleInput={handleInput} handleFilterABV={handleFilterABV} handleFilterClassic={handleFilterClassic} handleFilterPH={handleFilterPH}/>
        <Routes>
          <Route
            path='/'
            element={<Main searchTerm={searchTerm} filterPH={filterPH} beersArr={beersArr}/>}
          />        
          <Route
            path="/card/:cardId"
            element={<CardInfo beersArr={beersArr}/>}
            />
        </Routes>
      </div>
   
  );
}

export default App;
