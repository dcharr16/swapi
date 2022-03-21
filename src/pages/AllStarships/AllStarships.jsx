import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/sw-api";
import Starship from "../../components/Starship/Starship";

const AllStarships = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  })

  return (
    <>
        <Starship />
    {starships.length ?
    <div className="allships">
      {starships.map((starship) => (
        <div key={starship.index} className="starship-card">
          <Link key={starship.index} state= {{ starship }} to='/starship' className="card-link">
            {starship.name}
          </Link><br />
        </div>
      ))}
    </div>
    :
    <>
      <h2>Loading Starships...</h2>
    </>}
  </>
  )
}

export default AllStarships