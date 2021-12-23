import {useState, useEffect} from 'react'
// import './input.css'


export const Input = () => {

    const inputHandler = (event)=>{
        event.stopPropagation()
        console.log(event.key);
        if ( ['a','e','i','o','u'].includes(event.key) ) {
            event.preventDefault()
        }            
        
    }

    
    return (
        <div className="box" >
            <div className="border border-1 border-warning" >
                <input className="m-5" onKeyDown={inputHandler } type="text" name="i" id="i"/>
            </div>
        </div>
    )
}
