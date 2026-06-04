function Navbar() {
  const scrollToPlanets = () => {
    document.getElementById('planets-section')
      .scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact-section')
      .scrollIntoView({ behavior: 'smooth' })
  }
 
  return (
    <nav className='navbar'>
      <div className='nav-logo'>Solar Explorer</div>
      <ul className='nav-links'>
        <li>
          <button onClick={scrollToPlanets} className='nav-link-btn'>
            Planets
          </button>
        </li>
        <li>
          <button onClick={scrollToContact} className='nav-link-btn'>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}
 
export default Navbar
