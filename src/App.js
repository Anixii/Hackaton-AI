import './App.css';
import {Route, Routes} from 'react-router-dom';
import AudioRecorder from './AudioRecorder';
import Home from "./components/Home/Home";
import Animals from './components/Animals/Animals';
import axios from 'axios';

function App() {  
  console.log(JSON.stringify({type:'Dog',color:'white', action: 'Sitting on pawns'}));
  axios.post('http://13.53.169.64:8000/',JSON.stringify({type:'Dog',color:'white', action: 'Sitting on pawns'}))
  .then((res) =>{ 
    console.log(res);
  }).catch((error) =>{ 
    console.log(error);
  }) 
  // axios.get('http://13.53.169.64:8000/')
  // .then((res) =>{ 
  //   console.log(res);
  // }).catch((error) =>{ 
  //   console.log(error);
  // }) 

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
