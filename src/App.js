
import AddData from './components/AddData';
import Comments from './components/Comments';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './custom.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/my-library" element={<MyLibrary />} /> */}
        <Route path="/add" element={<AddData />} ></Route>
        <Route path="/comments" element={<Comments />} ></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
