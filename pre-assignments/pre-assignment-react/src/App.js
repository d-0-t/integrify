import './App.css';
import Home from './pages/Home';
import UserPage from './pages/Users';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>
      <Route path="/users/:id" element={<UserPage />}>        
      </Route>
    </Routes>
  );
}

export default App;
