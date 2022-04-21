import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import {useState} from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [filterTerm, setFilterTerm] = useState("");

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
      <Main searchTerm={searchTerm} filterTerm={filterTerm}/>
    </div>
  );
}

export default App;
