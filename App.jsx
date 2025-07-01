import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Pricing from './pricing';
import Login from './login';
import Admin from './admin';
import TrueVal from './trueval';
import PlanScore from './planscore';
import EcoStay from './ecostay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/modules/trueval" element={<TrueVal />} />
        <Route path="/modules/planscore" element={<PlanScore />} />
        <Route path="/modules/ecostay" element={<EcoStay />} />
      </Routes>
    </Router>
  );
}

export default App;
