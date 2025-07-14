import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import SearchT from './components/SearchT';
import DeleteT from './components/DeleteT';
import Viewall from './components/Viewall';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<AddTodo/>}/>
      <Route path='/search' element={<SearchT/>}/>
      <Route path='/delete' element={<DeleteT/>}/>
      <Route path='/view' element={<Viewall/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
