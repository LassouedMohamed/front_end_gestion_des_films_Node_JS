import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img className="navbar-brand mr-5" src={process.env.PUBLIC_URL + '/logo.bmp'} width="5%"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className='nav-item '><Link to="/ListeFilms" className="nav-link mx-5">Films</Link></li>                     
        <li className='nav-item '><Link to="/User" className="nav-link mx-5">Utilisateur</Link></li>
        <li className='nav-item '><Link to="/AfficherRealisateur" className="nav-link mx-5">Realisateur</Link></li>
        <li className='nav-item '><Link to="/AfficherGenre" className="nav-link mx-5">Genre</Link></li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Header;