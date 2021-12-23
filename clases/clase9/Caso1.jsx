import { useState } from "react";


function Select({ options, onSelect, defaultOption=1 }) {

  return (

    <select onChange={(evt) => onSelect(evt.target.value)}>

      {
        options.map((o) => (
            <option value={o.value}>{o.text}</option>
        ))
      }

    </select>

  );
}

const options = [
    { value: 1, text: "Azul" },
    { value: 2, text: "Rojo" },
    { value: 3, text: "verde" }
  ];

export default function Caso1() {
  
  const [option, setOption] = useState(1);

  function optionSelected(value) {
      console.log(value)
      setOption(value);
  }

  return (
    <>
        <Select options={options} onSelect={optionSelected} defaultOption={1} />        
    </>
  );
}
