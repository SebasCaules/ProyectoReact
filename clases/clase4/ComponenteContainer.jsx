const estados= ['js', 'React js', 'Component']


const Item = ( {valor} ) => {
    return (
        <button>{valor}</button>
    )
}


function ComponenteConteiner() {

    // const items = estados.map(t => <Item valor={t}/>)
    //Es donde van las llamadas a las Apis
    
    return (
        <div>
            <Item valor= {'Click'}/>
        </div>
    )
}

export default ComponenteConteiner
