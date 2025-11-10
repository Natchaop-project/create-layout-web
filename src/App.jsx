import Header from './components/Header.jsx';
import './assets/css/index.css';
import AppRoutes from './routes/AppRoutes.jsx';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
        <Header />

        <AppRoutes />
    </Router>
  );
}

export default App;
