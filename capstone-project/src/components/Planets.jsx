 
import { useState, useEffect } from 'react'
 
// The live API that returns the 9 planets as a JSON array
const API_URL = 'https://anurella.github.io/planets.json'
 
function Planets() {
  // planets: will hold the array of planet objects once fetched
  // loading: true while waiting for the API to respond
  // error: holds an error message if something goes wrong
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)
 
  // useEffect with [] runs this fetch ONCE when the component loads
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        // if the server returned an error status, throw it
        if (!response.ok) throw new Error('Could not load planet data')
        return response.json()  // convert the raw response to a JS array
      })
      .then((data) => {
        setPlanets(data)    // store the 9 planet objects in state
        setLoading(false)   // turn off the loading message
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])  // the empty [] means: run once only, never repeat
 
  return (
    <section id='planets-section' className='planets-section'>
 
      {/* Section heading and description — centred above the grid */}
      <div className='planets-intro'>
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
          Each planet in our solar system is unique. Compare their sizes,
          distances from the sun, and striking visual appearances.
        </p>
      </div>
 
      {/* Show loading or error messages while data arrives */}
      {loading && <p className='status-msg'>Loading planets...</p>}
      {error   && <p className='status-msg error-msg'>Error: {error}</p>}
 
      {/* Only render the grid once data has loaded successfully */}
      {!loading && !error && (
        <div className='planets-grid'>
          {planets.map((planet, index) => (
            // <figure> is REQUIRED by the assignment brief
            <figure key={index} className='planet-card'>
              <img
                src={planet.image}
                alt={planet.planet}
                className='planet-img'
              />
              <figcaption className='planet-caption'>
                <h3>{planet.planet}</h3>
                <p>{planet.distanceFromSun} million km from Sun</p>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
 
    </section>
  )
}
 
export default Planets
 
