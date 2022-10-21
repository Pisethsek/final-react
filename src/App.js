import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import HomePage from './pages/HomePage';

function App() {
  return (

    <div className="App">
      <MyNavbar />
        <HomePage />
      <MyFooter />
    </div>
  );
}

export default App;
