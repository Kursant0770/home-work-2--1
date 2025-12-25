import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainOne from './components/MainOne'
import MainThree from './components/MaintHree'
import MainTwo from './components/MainTwo'

function App() {
  return (
    <div className='body'>
      <Header />

      <div className="background"></div>

      <MainOne />

      <MainTwo />

      <MainThree />

      <Footer />

      
    </div>
  )
}

export default App
