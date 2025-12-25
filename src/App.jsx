import './App.css'

function App() {
  return (
    <div className='body'>
      <header>
        <img src="./src/assets/icons/logo.svg" alt="logo" />

        <div className="header-nav">
          <a href="#">About us</a>
          <button>Let’s Talk</button>
        </div>
      </header>

      <main>
        <div className="background"></div>

        <section className="box-1">
            <h1 className="box-1-h1">We build dreams, not just walls</h1>

            <p className="box-1-p">Fulfill your international property developments with us</p>
          <button>Let’s Talk</button>

          <div className="nav-svg">
            <img src="./src/assets/icons/nav.svg" alt="nav" />
          </div>
        </section>

        <section className="box-2">
          <div className="box-text">
            <h1>Case Studies</h1>

            <p>
              We deliver a unique and truly bespoke approach to delivering international developments to market,
              with over 10 years success around the world.
            </p>
          </div>

          <div className="case-studies">
            <img src="./src/assets/images/case-studies-1.png" alt="case-studies-1" />
            <img src="./src/assets/images/case-studies-2.png" alt="case-studies-2" />
            <img src="./src/assets/images/case-studies-3.png" alt="case-studies-3" />
            <img src="./src/assets/images/case-studies-4.png" alt="case-studies-4" />
          </div>
        </section>

        <section className="box-3">
          <div className="box-text">
            <h1>We are Invoriem</h1>

            <p>We fulfill international property developments</p>
          </div>

          <div className="box-video">
            <img src="./src/assets/images/box-3-video.jpg" alt="video" className="video"/>
            <img src="./src/assets/icons/box-3-play-video.svg" alt="play" className="play"/>
          </div>
        </section>
      </main>
      <footer>
        <section className="footer">
          <div>
            <p>Copyright © 2020 Invoriem</p>
          </div>

          <div className="footer-icons">
            <p>info@invoriem.com</p>

            <section>
              <img src="/src/assets/icons/instagram-1.svg" alt="instagram" />
              <img src="/src/assets/icons/facebook-2.svg" alt="facebook" />
              <img src="/src/assets/icons/twitter-3.svg" alt="twitter" />
              <img src="/src/assets/icons/linkedIn-4.svg" alt="linkedIn" />
            </section>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default App
