import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IssueBook from './components/IssueBook';
import BooksIssued from './components/BooksIssued';

function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
           <Route index element={<Home/>} />
           <Route path="issuebook" element={<IssueBook/>} />
           <Route path="booksissued" element={<BooksIssued/>} />

        </Routes>
        </BrowserRouter>
    

      </div>
     
  );
}

export default App;
