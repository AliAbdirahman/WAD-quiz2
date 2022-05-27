import React, { useEffect, useState } from "react";


const Home = () => {
  const [hero, setHero] = useState([])
  
  const Url = "http://127.0.0.1:8000/heroes/?format=json"
  useEffect(() => {
    fetch(Url)
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        setHero(data)
        console.log(data)
      })
  }, [])

  return (
    <div>
      <h2>Heroes Names and Aliases List</h2>
        <ul>
          {hero.map(hero => (
            <li key={hero.name}>{hero.name}: {hero.alias}</li>
          ))}
        </ul>
    </div>
  );
}

export default Home;
