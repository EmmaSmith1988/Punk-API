import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import {useState, useEffect} from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [beersArr, setBeersArr] = useState([]);

  useEffect( () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then(response => response.json())
      .then(userObjects => {
        setBeersArr([...userObjects]);
        })
  }, [])

  console.log(beersArr);

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

  console.log(filterTerm);

  return (
    <div>
      <Navbar searchTerm={searchTerm} handleInput={handleInput} filterTerm={filterTerm} handleFilter={handleFilter}/>
      <Main searchTerm={searchTerm} filterTerm={filterTerm} beersArr={beersArr}/>
    </div>
  );
}

export default App;
