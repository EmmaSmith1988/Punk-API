import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CardInfo from './components/CardInfo/CardInfo';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [beersArr, setBeersArr] = useState([]);

  useEffect( () => {
    fetch("https://api.punkapi.com/v2/beers?per_page=50")
      .then(response => response.json())
      .then(userObjects => {
        setBeersArr([...userObjects]);
        })
  }, [])


  const handleInput =  (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input)
  }

  const handleFilter = (event) => {
    if (event.target.checked){
      setFilterTerm(event.target.id);
    } else {
      setFilterTerm("");
    }
  }


  return (
    <Router>
      <div>
        <Navbar searchTerm={searchTerm} handleInput={handleInput} filterTerm={filterTerm} handleFilter={handleFilter}/>
        <Routes>
          <Route
            path='/'
            element={<Main searchTerm={searchTerm} filterTerm={filterTerm} beersArr={beersArr}/>}
          />        
          <Route
            path="/card/:cardId"
            element={<CardInfo beersArr={beersArr}/>}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
