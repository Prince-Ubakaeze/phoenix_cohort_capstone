function Homepage() {
  const scrollToPlanets = () => {
    document.getElementById('planets-section')
      .scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact-section')
      .scrollIntoView({ behavior: 'smooth' })
  }
 
  return (
    <section className='homepage'>
      {/* LEFT column — headline text and buttons */}
      <div className='intro'>
        <h1>Explore Our Solar System Through Data</h1>
        <p>
          Dive deep into the wonders of our solar system. Explore
          planetary distances, sizes, and fascinating facts through
          interactive data.
        </p>
        <div className='hero-buttons'>
          <button onClick={scrollToPlanets} className='btn-primary'>
            Explore Now
          </button>
          <button onClick={scrollToContact} className='btn-outline'>
            Contact Us
          </button>
        </div>
      </div>
 
      {/* RIGHT column — circular Earth globe image */}
      <div className='hero-image-wrapper'>
        <img src='https://anurella.github.io/images/planets/earth.jpg' alt='Earth from space' className='globepic' />
      </div>
 
    </section>
  )
}
 
export default Homepage
