import './App.css';
import './miCss.css'
import rey_sisebuto from './images/rey_sisebuto.png';
import rey_leogivildo from './images/rey_leogivildo.png';
import rey_atanagildo from './images/rey_atanagildo.png';
import rey_incognito from './images/rey_incognito.png';

function App() {  

   let reyes = ['sisebuto', 'leogivildo', 'atanagildo'];
   const cambiarTexto = (e) =>{
      if(e.target.innerHTML == "Visto")
        e.target.innerHTML = "";
      else
        e.target.innerHTML = "Visto";
   }   
   const cambiarImagen = (e) =>{
      if(e.target.src.includes("incognito"))
        e.target.style.visibility = "hidden";
      else{
        e.target.src = rey_incognito;
        e.target.parentNode.style.backgroundColor = "white"
      }
    
      
      
   }
  return (
    
    <div className="contenedor">
         
        <div className='tarjeta'>
          <img onClick={cambiarImagen} src={rey_sisebuto} className="imgLogo" alt='rey_sisebuto'/>
          <div onClick={cambiarTexto}>{reyes[0]}</div>
        </div>
        <div className='tarjeta'>
          <img onClick={cambiarImagen} src={rey_leogivildo} className="imgLogo" alt='rey_leogivildo'/>
          <div onClick={cambiarTexto}>{reyes[1]}</div>
        </div>
        <div className='tarjeta'>
          <img onClick={cambiarImagen} src={rey_atanagildo} className="imgLogo" alt='rey_atanagildo'/>
          <div onClick={cambiarTexto}>{reyes[2]}</div>
        </div>
    </div>

 
 
  

 
  
        
  );
}

export default App;
