import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IssueBook from './components/IssueBook';
import BooksIssued from './components/BooksIssued';
import HomePagination from './components/HomePagination';

function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
           <Route index element={<Home/>} />
           <Route path='/:pageno' element={<HomePagination />} />
           <Route path="issuebook" element={<IssueBook/>} />
           <Route path="booksissued" element={<BooksIssued/>} />

        </Routes>
        </BrowserRouter>
    

      </div>
     
  );
}

export default App;
