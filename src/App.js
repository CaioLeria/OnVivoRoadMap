
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import GlobalStyle from './Components/GlobalStyle';
import RegisterNewEmployeePage from './Pages/RegisterNewEmployeePage';
import './App.css';

function App() {
  return (
    <div className="App">
    <GlobalStyle />
      <LoginPage />
      <HomePage />
      <RegisterNewEmployeePage />
    </div>
  );
}

export default App;
