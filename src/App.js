import { Route, Routes } from 'react-router';
import './App.css';
import {Home} from './pages/Home'
import { Question } from './pages/Question';
import { Answer } from './pages/Answer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questions' element={<Question />} />
        <Route path='/answers/:id' element={<Answer />} />
      </Routes>
    </div>
  );
}

export default App;
