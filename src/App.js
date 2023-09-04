import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UserManagementPage from './pages/UserManagementPage';
import TestPage from './pages/TestPage';
import InfoTeachersPage from './pages/InfoTeachersPage';

function App() {
  return (
    <div className="App fondo" >
      <Navbar/>
        <BrowserRouter>
          <div style={{"marginLeft":"auto","marginRight":"auto","maxWidth":"1200px"}}  >
            <Routes>
              <Route path='/'               element={<HomePage/>}/>
              <Route path='/users'          element={<UserManagementPage/>}/>
              <Route path='/test'           element={<TestPage/>} />
              <Route path='/infoTeachers'   element={<InfoTeachersPage/>} />
            </Routes>
          </div>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
