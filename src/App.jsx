import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import {useState} from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  const handleInput =  (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input)
  }

  return (
    <div>
      <Navbar searchTerm={searchTerm} handleInput={handleInput} />
      <Main searchTerm={searchTerm} />
    </div>
  );
}

export default App;
