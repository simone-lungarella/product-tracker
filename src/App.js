import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Hompage';
import PhaseOne from './components/phases/PhaseOne';
import PhaseTwo from './components/phases/PhaseTwo';
import PhaseThree from './components/phases/PhaseThree';
import PhaseFour from './components/phases/PhaseFour';
import PhaseFive from './components/phases/PhaseFive';
import PhaseSix from './components/phases/PhaseSix';
import HelpPage from './components/HelpPage';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/help" element={<HelpPage />} />
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
