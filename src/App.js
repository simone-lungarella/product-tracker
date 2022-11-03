import { Routes, Route } from 'react-router-dom';
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
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/step-1" element={<PhaseOne />} />
        <Route exact path="/step-2" element={<PhaseTwo />} />
        <Route exact path="/step-3" element={<PhaseThree />} />
        <Route exact path="/step-4" element={<PhaseFour />} />
        <Route exact path="/step-5" element={<PhaseFive />} />
        <Route exact path="/step-6" element={<PhaseSix />} />
      </Routes>
    </div>
  );
}

export default App;
