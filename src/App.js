import './App.css';
import { Route, Routes } from 'react-router-dom';
import AllStarships from './pages/AllStarships/AllStarships';
import StarshipPage from './pages/StarshipPage';


function App() {
  return (
    <>
      <h1> Star Wars Starships</h1>
      <a href='/starships'>To the starships</a>
      <Routes>
      <Route path="/starships" element={<AllStarships />} />
      <Route path="/starship" element={<StarshipPage />} />
    </Routes>
    </>
  );
}

export default App;
