 import { useContext } from "react";
import Switch from "react-switch";
 import ThemeContext from "../context/ThemeContext";



function ThemeSwitch() {
   const {theme, setTheme} = useContext(ThemeContext);

   return (
   <Switch  checked={theme === 'lightMode'} offColor="#757575" onColor="#FF5722" uncheckedIcon checkedIcon  
      onChange={() => {
         return setTheme(theme === 'lightMode' ?'darkMode' : 'lightMode')
      } 
     } 
   />
 )
};

export default ThemeSwitch;