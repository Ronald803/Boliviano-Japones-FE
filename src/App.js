import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UserManagementPage from './pages/UserManagementPage';

function App() {
  return (
    <div className="App fondo">
      <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path='/'       element={<HomePage/>}/>
            <Route path='/users'  element={<UserManagementPage/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
