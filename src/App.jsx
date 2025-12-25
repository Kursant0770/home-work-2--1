import './App.css'

function App() {
  return (
    <div className='body'>
      <header>
        <img src="./src/assets/logo/logo.svg" alt="logo" />

        <div className="header-nav">
          <a href="#">About us</a>
          <button>Let’s Talk</button>
        </div>
      </header>

      <main>
        <div className="background"></div>

        <section className="box-1">
          

          <div className="box-1-h1">
            <h1>We build dreams, not just walls</h1>
          </div>

          <div className="box-1-p">
            <p>Fulfill your international property developments with us</p>
          </div>

          <button>Let’s Talk</button>

          <div className="nav-svg">
            <img src="./src/assets/icons/nav.svg" alt="nav" />
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
