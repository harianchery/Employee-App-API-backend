import logo from './logo.svg';
import './App.css';
import AddEmp from './Components/AddEmp';
import SearchEmp from './Components/SearchEmp';
import DeleteEmp from './Components/DeleteEmp';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <div>
      <AddEmp/>
      <SearchEmp/>
      <DeleteEmp/>
      <ViewAll/>
    </div>
  );
}

export default App;
