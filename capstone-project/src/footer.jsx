import './footer.css'
export default function Footer(){
    return(
        <footer className='footer'>
            <h3>About</h3>
            <p className='about-text'>
                We are Group 21- a collaborative team of aspiring front-end developers building this solar system explorer as our Capstone Project.
                Team members include Joy, Francis, Uthman, Prince, Mojoyinola, Samuel, Victor, Israel, Atoyebi.
            </p>
            <hr  className='horizontal-line'/>

            <div className='footer-links'>
                <div className='left-link'>
                <p>©2026 Design by <a href="https://amakandukwu.com/">Amaka</a> & <a href="https://www.linkedin.com/in/ifeomaokocha">Ifeoma A.</a></p>
                <p>Built by <a href="https://github.com/Prince-Ubakaeze/Phoenix-Cohort-capstone-project.git">Group 21-PHOENIX-COHORT</a>.  
                <span className='left'>All rights reserved.</span></p>
            </div>

            <div className='quick-link'>
            <a href="https://tsacademyonline.com/">TS Academy</a>
            </div>
            </div>
        </footer>
    )
}