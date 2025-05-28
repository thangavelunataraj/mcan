import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Master from './components/pages/Master/Master';

function App() {
  return (
    <Router>
      <Master/> 
      <AppRoutes />
    </Router>
  );
}

export default App;
