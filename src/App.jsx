import "./App.css"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

const  App = ()=> {
  // js script 

  //let objetoDeEstilo ={}


  return (
    //jsx script
    <div>

     <Navbar/> {/*return funtion react*/}

     {/*<h1  style={{color:"steelblue", fontSize:"2rem"}} > Titulo </h1>*/} 
      <h1 className="title"> Titulo</h1>
      <h2>Subtitilo 1 </h2>
      <h2>Subtitilo 2</h2>

      <Footer/>
    </div>
  )
}

export default App
