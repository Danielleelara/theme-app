import { useState } from 'react'
import './App.css'
import ThemeSwitch from './components/ThemeSwitch'
import ThemeContext from './context/ThemeContext'

function App() {
  const [theme, setTheme] = useState('lightMode');

  return (
      <ThemeContext.Provider value={{ 
        theme,
        setTheme
      }}>
          <div id={theme === 'lightMode' ? 'lightMode' : 'darkMode' }>
            <h1>Escolha o tema</h1>
            <ThemeSwitch />
        </div>
      </ThemeContext.Provider>
  )
}

export default App
