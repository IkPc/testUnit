import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <body className='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <LoginForm />
    </body>
  );
}

export default App;
