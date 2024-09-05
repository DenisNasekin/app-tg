import { Route, Routes } from 'react-router-dom';

import './App.css';

import WebSocketScreen from '../WebSocketScreen/WebSocketScreen';
import WeatherScreen from '../WeatherScreen/WeatherScreen';
import InfiniteScrollComponent from '../InfiniteScrollComponent/InfiniteScrollComponent';
import Menu from '../Menu/Menu';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<WebSocketScreen/>}/>
          <Route path="weather" element={<WeatherScreen/>}/>
          <Route path="article" element={<InfiniteScrollComponent/>}/>
        </Routes>
        <Menu/>
    </div>

  );
}

export default App;
