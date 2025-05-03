import './App.css';
import Weather from './Weather';

function App() {
  return (
      <div className="App">
          <div className="container">
              <h1>Weather App</h1>
              <Weather />
              <footer>
                  <a href="https//github.com/mashudu08/react-weather-app" target="_blank">Project open-sourced code on
                      Github</a> by Mashudu Luvhengo
              </footer>
          </div>
      </div>
  );
}

export default App;
