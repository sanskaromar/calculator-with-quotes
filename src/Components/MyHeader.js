import React, {useState} from "react"

function MyHeader() {
    const [theme, setTheme] = useState(() => "../App.css");
    const [themeImport, setThemeImport] = useState(()=> import("../App.css"));

    const handleOnClick = async () => {
        if(theme === '../App-dark.css')
        {
            setTheme('../App.css')
            // setThemeImport(import("../App.css"));
            window.location.reload()
            // console.log("../App.css")
            
        }else{
            setTheme('../App-dark.css')
            setThemeImport(import("../App-dark.css"));
            // console.log("../App-dark.css")
        }
      }
    const neverGonnaUseThis = {
        themeImport = "oh"
    }
      
    return(
        <div className="header">
            
            <p>Calculat<button onClick={() => handleOnClick()}>.</button>r</p>
        </div>
    )
}
export default MyHeader