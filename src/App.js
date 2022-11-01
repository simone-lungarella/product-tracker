import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Hompage';
import PhaseFive from './PhaseFive';
import PhaseFour from './PhaseFour';
import PhaseOne from './PhaseOne';
import PhaseSix from './PhaseSix';
import PhaseThree from './PhaseThree';
import PhaseTwo from './PhaseTwo';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/step-1" element={<PhaseOne />} />
        <Route path="/step-2" element={<PhaseTwo />} />
        <Route path="/step-3" element={<PhaseThree />} />
        <Route path="/step-4" element={<PhaseFour />} />
        <Route path="/step-5" element={<PhaseFive />} />
        <Route path="/step-6" element={<PhaseSix />} />
      </Routes>
    </div>
  );
}

export default App;
