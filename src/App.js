
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import GlobalStyle from './Components/GlobalStyle';
import './App.css';

function App() {
  return (
    <div className="App">
    <GlobalStyle />
      <LoginPage />
      <HomePage />
    </div>
  );
}

export default App;
