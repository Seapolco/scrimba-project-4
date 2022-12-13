import Navbar from './components/Navbar';
import MemeForm from './components/Meme-Form';
// import DaMeme from './components/Da-Meme';
import './App.css'

function App() {

  return (
    
      <>
        <Navbar/>
        <main className="memegen-container">
          <MemeForm/>

        </main>
      </>

   )

}

export default App
