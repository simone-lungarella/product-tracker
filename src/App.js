import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Homepage from './components/Hompage';
import PhaseOne from './components/phases/PhaseOne';
import PhaseTwo from './components/phases/PhaseTwo';
import PhaseThree from './components/phases/PhaseThree';
import PhaseFour from './components/phases/PhaseFour';
import PhaseFive from './components/phases/PhaseFive';
import PhaseSix from './components/phases/PhaseSix';
import EndPhase from './components/phases/EndPhase';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();


  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Homepage />} />
        <Route key="step-1" path="/step-1" element={<PhaseOne />} />
        <Route key="step-2" path="/step-2" element={<PhaseTwo />} />
        <Route key="step-3" path="/step-3" element={<PhaseThree />} />
        <Route key="step-4" path="/step-4" element={<PhaseFour />} />
        <Route key="step-5" path="/step-5" element={<PhaseFive />} />
        <Route key="step-6" path="/step-6" element={<PhaseSix />} />
        <Route key="end" path="/end" element={<EndPhase />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
