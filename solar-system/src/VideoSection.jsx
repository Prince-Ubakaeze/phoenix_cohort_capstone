import './VideoSection.css';

function VideoSection() {
  return (
    <section className="video-section">
  <div className="video-group">
    <div className="video-wrapper">
      <video autoPlay muted loop>
        <source src="https://media.istockphoto.com/id/144260690/video/complete-solar-system.mp4?s=mp4-640x640-is&k=20&c=as6u1-mEOcuDQQLqsCtAMOWRtvvYOF-5q0xrbIW5tTY=" type="video/mp4" />
      </video>
    </div>

    <div className="video-text">
      <h2>How Planetary Data Helps Us Understand Space</h2>
      <p>
        Planetary science goes beyond images. Comparing <strong>mass</strong>, <strong>diameter</strong>,{' '}
        <strong>gravity</strong>, and density, we gain insight into how planets form, behave,
        and interact within the solar system.
      </p>
    </div>
  </div>
</section>
  );
}

export default VideoSection;