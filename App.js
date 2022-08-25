import { useState, useEffect } from 'react'
import './App.css';
import Header from './Components/Header'
import Container from './Components/Container'


function App() {
  const[APOD, setAPOD] = useState([])
  const APIKey = 'URAwWVhjpR3IUOVcxerfUotTLRAsjq4r8x9uiRQI'

  useEffect(() => {
    fetchPhoto()

    async function fetchPhoto() {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`)
      const data = await response.json()
      setAPOD(data)
    }
  }, [])

  return (
    <div>
      <Header />
      <Container data={APOD} API={APIKey}/>
    </div>
  );
}

export default App;
