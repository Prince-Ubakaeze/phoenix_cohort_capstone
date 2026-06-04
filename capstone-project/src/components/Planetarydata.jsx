function PlanetaryData() {
  return (
    <section className='planetary-data-section'>
 
      {/* LEFT — video with play button overlay */}
      <div className='video-wrapper'>
        <video autoPlay muted loop className='section-video'>
          <source src='/space-video.mp4' type='video/mp4' />
        </video>
        <div className='play-overlay'>
          <div className='play-icon'>&#9654;</div>
        </div>
      </div>
 
      {/* RIGHT — heading and descriptive text */}
      <div className='planetary-data-text'>
        <h2>How Planetary Data Helps Us Understand Space</h2>
        <p>
          Understanding planetary data gives scientists and researchers
          insights into the formation, composition, and evolution of our
          solar system. By studying distances, sizes, and atmospheric
          conditions, we uncover patterns that connect all planets and
          help us understand our place in the universe.
        </p>
      </div>
 
    </section>
  )
}
 
export default PlanetaryData
