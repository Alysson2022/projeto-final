import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <h1> Projeto Artesanato e Projeto Software </h1>

      <Link to='/home'> Home </Link>
      <Link to='/login'> Login </Link>
      <Link to='/estoque'> Estoque </Link>
      <Link to='/registro'> Registrar </Link>
    </div>
  );
}

export default App;
