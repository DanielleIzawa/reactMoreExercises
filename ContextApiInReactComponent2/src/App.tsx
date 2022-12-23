import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AuthContext } from './Contexts/AuthContext';

function App() {

  const {auth} = useContext(AuthContext)
  console.log(auth);
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={() => toggleTheme}> Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
}

export default App
