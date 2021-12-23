import Boton from "./Boton"


function Form  ( {title, boton} ){
    //console.log(props);
    
    return (
        <>
            
            <h2>{title}</h2>
            <input type="text" placeholder="soy input" /><br/>
            {/* { boton( {buttonText: 'Boton de form'} ) } */}
            <Boton buttonText='boton' />
            {/* {props.children} */}
            {/* { boton({buttonText: 'SuperFormButtom'})   } */}
        </>
    )
}
export default Form