function PlanetaryData() {
  return (
    <section className='planetary-data-section'>
 
      {/* LEFT — video with play button overlay */}
      <div className='video-wrapper'>
        {/* Background video — autoPlay muted loop required by the brief */}
      <video autoPlay muted loop className='pvideo'>
        <source src="https://media.istockphoto.com/id/144260690/video/complete-solar-system.mp4?s=mp4-640x640-is&k=20&c=as6u1-mEOcuDQQLqsCtAMOWRtvvYOF-5q0xrbIW5tTY=" type='video/mp4' />
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
