import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ListOfCodes from './views/ListOfCodes/ListOfCodes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListOfCodes />} />
      </Routes>
    </Router>
  );
}
