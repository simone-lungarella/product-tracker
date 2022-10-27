import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Hompage';
import PhaseOne from './PhaseOne';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/step-1" element={<PhaseOne />} />

      </Routes>
    </div>
  );
}

export default App;
