import { useState, useEffect } from 'react'
 
const API_URL = 'https://anurella.github.io/planets.json'
 
function PlanetTable() {
  const [, setPlanets] = useState([])
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
       <table className='table' style={{ borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr align="center">
      <th colSpan="2">Type</th> 
      <th scope="col">name</th>
      <th scope="col">mass(1024kg)</th>
      <th scope="col">diameter(km)</th>
      <th scope="col">density(kg/m3)</th>
      <th scope="col">gravity(m/s2)</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td scope="rowgroup" id="test" rowSpan="4" colSpan="2">terrestrial planets</td>
      <td>mercury</td>
      <td>0.330</td>
      <td>4878</td>
      <td>5427</td>
      <td>3.7</td>
    </tr>
    <tr align="center">
      <td>venus</td>
      <td>0.330</td>
      <td>4878</td>
      <td>5427</td>
      <td>3.7</td>
    </tr>
    <tr align="center">
      <td>earth</td>
      <td>0.330</td>
      <td>4878</td>
      <td>5427</td>
      <td>3.7</td>
    </tr>
    <tr align="center">
      <td>mars</td>
      <td>0.330</td>
      <td>4878</td>
      <td>5427</td>
      <td>3.7</td>
    </tr>

    {/* Jovian Planets */}
    <tr align="center">
      <td scope="rowgroup" rowSpan="4">jovian planets</td>
      <td scope="rowgroup" rowSpan="2">Gas Giants</td>
      <td>jupiter</td>
      <td>0.330</td>
      <td>4878</td>
      <td>5427</td>
      <td>3.7</td>
    </tr>
    <tr align="center">
      <td>saturn</td>
      <td>0.330</td>
      <td>4878</td>
      <td>5427</td>
      <td>3.7</td>
    </tr>
    <tr align="center">
      <td scope="rowgroup" rowSpan="2">Ice Giants</td>
      <td>uranus</td>
      <td>0.330</td>
      <td>4878</td>
      <td>5427</td>
      <td>3.7</td>
    </tr>
    <tr align="center">
      <td>neptune</td>
      <td>0.330</td>
      <td>4878</td>
      <td>5427</td>
      <td>3.7</td>
    </tr>

    {/* Dwarf Planets */}
    <tr align="center">
      <td scope="row" colSpan="2">dwarf planets</td>
      <td>pluto</td>
      <td>0.330</td>
      <td>4878</td>
      <td>5427</td>
      <td>3.7</td>
    </tr>
  </tbody>
</table>
      )}
    </section>
  )
}
 
export default PlanetTable
