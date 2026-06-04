import { useState, useEffect } from 'react'
 
const API_URL = 'https://anurella.github.io/planets.json'
 
function PlanetTable() {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])
 
  return (
    <section className='table-section'>
      <h2>Planetary Facts at a Glance</h2>
      <p className='table-desc'>
        A quick-reference overview of all planets and their distances from the Sun.
      </p>
 
      {loading ? (
        <p className='status-msg'>Loading table...</p>
      ) : (
        <div className='table-wrapper'>
          <table className='planet-table'>
            <thead>
              <tr>
                <th>Planet</th>
                <th>Distance from Sun (million km)</th>
              </tr>
            </thead>
            <tbody>
              {planets.map((planet, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'row-dark' : 'row-light'}
                >
                  <td>{planet.planet}</td>
                  <td>{planet.distanceFromSun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
 
export default PlanetTable
