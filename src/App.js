import { Route, Routes} from 'react-router-dom';

// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Films from './pages/Film/Films';
import Header from './pages/Header';
import AddFilm from './pages/Film/AddFilm';
import Realisateur from './pages/Realisateur/Realisateur';
import AddRealisateur from './pages/Realisateur/AddRealisateur';
import ModifierRealisateur from './pages/Realisateur/ModifierRealisateur';
import Genre from './pages/Genre/Genre';
import AddGenre from './pages/Genre/AddGenre';
import ModifierGenre from './pages/Genre/ModifierGenre';

import User from './pages/User/User';
import ModifierFilm from './pages/Film/ModifierFilm';
import Login from './pages/Login';
import AjouterUser from './pages/User/AjouterUser';
import ModifierUser from './pages/User/ModifierUser';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
            {/* <Route path="/home" element={<Home/>} /> */}
            <Route path="/" element={<Login/>} />
            <Route path="/User" element={<User/>} />
            <Route path="/ajouterUser" element={<AjouterUser/>} />
            <Route path="/modifierUser/:id" element={<ModifierUser/>} />
            <Route path="/ListeFilms" element={<Films/>} />
            <Route path="/ajouterFilms" element={<AddFilm/> } />
            <Route path="/modifierFilm/:id" element={<ModifierFilm/> } />
            <Route path="/AfficherRealisateur" element={<Realisateur/> } />
            <Route path="/ajouterRealisateur" element={<AddRealisateur/> } />
            <Route path="/modifierRealisateur/:id" element={<ModifierRealisateur/> } />
            <Route path="/AfficherGenre" element={<Genre/> } />
            <Route path="/ajouterGenre" element={<AddGenre/> } />
            <Route path="/modifierGenre/:id" element={<ModifierGenre /> } />
        </Routes>
    </div>
  );
}

export default App;
