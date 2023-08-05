import logo from './logo.svg';
import './App.css';
import dog from './assets/22222222222222.png'
import car from './assets/111111.png'
import { Route, Routes } from 'react-router-dom';
import AudioRecorder from './AudioRecorder';
function App() {
  return (<>  
  <Routes> 
    <Route path='/record' element={<AudioRecorder/>}/>
  </Routes>
    <div className="main">
      <img alt='' className={'imgage_dog'} src={dog}/>
      <img alt='' className={'imgage_car'} src={car}/>
    </div>
  </>
  );
}

export default App;
