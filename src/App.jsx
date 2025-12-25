import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main1 from './components/main1'
import Main2 from './components/Main2'
import Main3 from './components/Main3'

function App() {
  return (
    <div className='body'>
      <Header />

      <div className="background"></div>

      <Main1 />

      <Main2 />

      <Main3 />
      
      <Footer />

      
    </div>
  )
}

export default App
