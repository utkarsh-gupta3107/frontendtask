// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Task from './ask';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Task/>}>
        </Route>
        
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
