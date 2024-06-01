import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Cards from './Components/Cards/Cards';



const App = () => {

  const currentTheme = localStorage.getItem('currentTheme');

  const [theme, setTheme] = useState(currentTheme? currentTheme : 'light');

  useEffect(() => {
    localStorage.setItem('currentTheme', theme);
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Cards />
    </div>
  )
}

export default App