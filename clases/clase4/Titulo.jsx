


 const Titulo = (   {titulo, subTitulo, saludo}  ) => { 


  return  (
    <>
      <h2 onClick={()=>saludo()}>{ titulo }</h2>     
      <h2 >{ subTitulo }</h2>     
    </>
    ) 
    
  
}

export default Titulo
