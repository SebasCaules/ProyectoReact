
import { useState, useEffect } from 'react'

// import SuperForm from './clase4/EjemploUno';
// import {SuperButon} from './clase4/EjemploUno'


function ComponenteUseEffect() { 
    const [ contador, setContador ] = useState(0)
    const [bool, setBool] = useState(true)
    const [fecha, setFecha] = useState(Date())


    
    
    //let count = 0 // este es un estado   
    const titulo = 'este estado morira'
    
    const handlerClick=()=>{
        setContador(contador+1)
        //setBool(!bool)
        setFecha(Date())
    }

    useEffect(()=>{
        console.log('llamada a api 2')//tareas pesada o asincronicas acá

        return ()=>{
            console.log('componente desmontado')
        }
    })


    useEffect(()=>{
        console.log('llamada a api 3 ejecuta una sola vez ' )//tareas pesada o asincronicas acá
    }, [])

    useEffect(()=>{
        console.log('llamada a api 3 ejecuta cada vez que cambie el boleano' )//tareas pesada o asincronicas acá
    }, [bool, contador])
    
    console.log('ejecucion antes del render 1')
  

    return (                     
        <div>
            <p>{contador}</p>
            <p>{fecha}</p>
            <button onClick={handlerClick}>Click +</button>
            <button onClick={handlerClick}>Click -</button>
            <button onClick={handlerClick}>Agregar al carrito</button>

            <button onClick={() => setBool(!bool)}>Click bool</button>
        </div>      
    );
}

export default ComponenteUseEffect;

// // Este es el app que usamos para el ejemplo de la clases

// import SuperForm from './clase5/SuperForm';
// import { SuperButon } from './clase5/SuperForm'



// function EcomerceApp() {
//   const [estado, setEstado] = useState('')
//   const [boleano, setBoleano] = useState(false)


  
//   function llamadaApi() {
//     console.log('llamada a api')
//   }

//   const cambioEstado=()=>{
//     setBoleano(!boleano)
//   }
  
//   // useEffect(()=>{//ejcucion despues de cada rendering
//   //   console.log('app montada despues del rendering')
//   //   llamadaApi()
//   // })

//   useEffect(()=>{//componentDidMount(){} solo una vez despues del primero
//     console.log('se ejecuta una sola vez')
//     llamadaApi()
//   }, [])

//   useEffect(()=>{//componentDidMount(){} solo una vez despues del primero
//     console.log('cambio de boleano')
//     //document.addEventListener()
//     llamadaApi()
    
//   }, [estado, boleano])



//    console.log('antes del rendering')
//   return (
//         <div className="App" onClick={()=>setEstado('Juan')}>          
//             <h1>{estado}</h1>
//               <button onClick={cambioEstado}>cambio de estado</button>       
//             <SuperForm  title='Hola soy tilte' render={SuperButon} />
//             {/* <SuperForm title='Hola soy form' render={SuperButon} />     */} 
//             {/* <p>{state}</p> */}          
//         </div>
//   );
// }

// export default EcomerceApp;

