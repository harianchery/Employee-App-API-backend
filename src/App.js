import logo from './logo.svg';
import './App.css';
import AddEmp from './Components/AddEmp';
import SearchEmp from './Components/SearchEmp';
import DeleteEmp from './Components/DeleteEmp';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddEmp/>}/>
    <Route path='/search' element={<SearchEmp/>}/>
    <Route path='/delete' element={<DeleteEmp/>}/>
    <Route path='/view' element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
