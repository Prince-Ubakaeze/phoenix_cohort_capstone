function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-inner'>
 
        <div className='footer-about'>
          <h3>About</h3>
          <p>
            Built by the Phoenix Cohort at{' '}
            <a href='https://tsacademyonline.com/' target='_blank' rel='noreferrer'>
              TSacademy
            </a>
            . Our team: Prince and the Phoenix group.
          </p>
          <p>
            Mentored by{' '}
            <a href='https://amakandukwu.com/' target='_blank' rel='noreferrer'>
              Amaka
            </a>
            {' '}and{' '}
            <a
              href='https://www.linkedin.com/in/ifeomaokocha'
              target='_blank'
              rel='noreferrer'
            >
              Ifeoma
            </a>
            .
          </p>
        </div>
 
        <div className='footer-links'>
          <h3>Links</h3>
          <ul>
            <li>
              <a href='https://tsacademyonline.com/' target='_blank' rel='noreferrer'>
                TSacademy
              </a>
            </li>
            <li>
              <a
                href='https://github.com/YOUR_USERNAME/phoenix-capstone'
                target='_blank'
                rel='noreferrer'
              >
                Phoenix Cohort — GitHub
              </a>
            </li>
          </ul>
        </div>
 
      </div>
      <p className='footer-bottom'>
        &copy; 2026 Phoenix Cohort — TS Academy Frontend Development
      </p>
    </footer>
  )
}
 
export default Footer
