import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './Page/HomePage/HomePage';
import MapPage from './Page/MapPage/MapPage';
import PetPage from './Page/PetPage/PetPage';
import PlusPage from './Page/PlusPage/PlusPage';
import ProfilePage from './Page/ProfilePage/ProfilePage';


function App() {
  return (
    <>
      <Router>
          
            <div className="App">
              <Routes>
              <Route path='/' element={<HomePage></HomePage>}/>
              <Route path='/map' element={<MapPage></MapPage>}/>
              <Route path='/pet' element={<PetPage></PetPage>}/>
              <Route path='/profile' element={<ProfilePage></ProfilePage>}/>
              <Route path='/plus' element={<PlusPage></PlusPage>}/>

              </Routes>
            </div>

      </Router>
        
    </>

  );
}

export default App;
