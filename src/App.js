import './App.css';
import {Route, Routes} from 'react-router-dom';
import AudioRecorder from './AudioRecorder';
import Home from "./components/Home/Home";

function App() {
  return (<>  
  <Routes> 
    <Route path='/record' element={<AudioRecorder/>}/>
  </Routes>
  <Home/>
  </>
  );
}

export default App;
