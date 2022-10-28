import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Hompage';
import PhaseEight from './PhaseEight';
import PhaseOne from './PhaseOne';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/step-1" element={<PhaseOne />} />
        <Route path="/step-8" element={<PhaseEight />} />
      </Routes>
    </div>
  );
}

export default App;
