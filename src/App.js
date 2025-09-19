// App.js - VERSÃO CORRIGIDA
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import GlobalStyle from './Components/GlobalStyle';
import RegisterNewEmployeePage from './Pages/RegisterNewEmployeePage';
import BuddyGestorHomePage from './Pages/BuddyGestorHomePage';
import './App.css';
import TreinamentosManagePage from './Pages/TreinamentosManagePage';
import SolicitacoesAcessoPage from './Pages/SolicitacoesAcessosPage';
function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cadastro" element={<RegisterNewEmployeePage />} />
          <Route path="/home-buddy" element={<BuddyGestorHomePage />} />
          <Route path="/treinamentos" element={<TreinamentosManagePage />} />
                    <Route path="/Acessos" element={<SolicitacoesAcessoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;