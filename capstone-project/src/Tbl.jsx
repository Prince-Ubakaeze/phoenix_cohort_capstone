import React from 'react'

const Tbl = () => {
  return (
    <>
      <div className='main'>
        <h1 className='container'>planetary Facts at a Glance</h1>
        <h4 className='planet'>Below is a comparative table of major planets in our solar systems.The highlights key physical properties used by astronomers and researchers worldwide</h4>
        <h5 className='data'>Data about the planets of our solar system (planetary facts taken from Nasa)</h5>
      
        <table border="1">
          <div className='table'>
              <tr align="center">
                  <th colspan="2"></th>
                  <th width="200">name</th>
                  <th width="200">mass(1024kg)</th>
                  <th width="200">diameter(km)</th>
                  <th width="200">density(kg/m3)</th>
                  <th width="200">gravity(m/s2)</th>
              </tr>

              {/* Terrestrial Planets */}
                <tr align="center">
                <td rowspan="4">terrestrial planets</td>
                    <td></td>
                    <td>mercury</td>
                    <td>0.330</td>
                    <td>4878</td>
                    <td>5427</td>
                    <td>3.7</td>
                </tr>
                <tr align="center">
                    <td></td>
                    <td>venus</td>
                    <td>0.330</td>
                    <td>4878</td>
                    <td>5427</td>
                    <td>3.7</td>
                </tr>
                    <tr align="center">
                        <td></td>
                        <td>earth</td>
                        <td>0.330</td>
                        <td>4878</td>
                        <td>5427</td>
                        <td>3.7</td>

                    
                </tr>
                <tr align="center">
                    <td></td>
                    <td>mars</td>
                    <td>0.330</td>
                    <td>4878</td>
                    <td>5427</td>
                    <td>3.7</td>
                </tr>
                {/* <!--Jovian Planets--> */}
                <tr align="center">
                    <td rowspan="4">jovian planets</td>
                    <td rowspan="2">Gas Giants</td>
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
                    <td rowspan="2">Ice Giants</td>
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
                {/* <!--Dwarf Planets--> */}
                <tr align="center">
                    <td colspan="2">dwarf planets</td>
                    <td>pluto</td>
                    <td>0.330</td>
                    <td>4878</td>
                    <td>5427</td>
                    <td>3.7</td>
                </tr>
              </div>
        </table>
      </div>
        
    </>
  )
}

export default Tbl
