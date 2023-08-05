import './App.css';
import {Route, Routes} from 'react-router-dom';
import AudioRecorder from './AudioRecorder';
import Home from "./components/Home/Home";
import Animals from './components/Animals/Animals';

function App() {
  return (<>  
  <Routes> 
    <Route path='/record' element={<AudioRecorder/>}/>
    <Route path='/test' element={<Animals/>}/>
    <Route path='/' element={<Home/>}/>
  </Routes>
  </>
  );
}

export default App;
