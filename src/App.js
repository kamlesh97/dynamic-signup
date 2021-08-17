import React, { useEffect, useState } from "react";
import Element from "./components/Element";
import formJson from "./Data.json";
import {FormContext} from './FormContext'
console.log(formJson);

function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJson[0]);
  }, []);

  const { fields, page_label } = elements ?? {}

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const handleChange=(id,e)=>{
    const newElement={...elements}
    newElement.fields.forEach(field => {
      const {field_type,field_id, field_value}=field

      if(id===field_id){
        switch (field_type) {
          case 'checkbox':
            field['field_value']=e.target.checked
            break;
        
          default:
            field['field_value']=e.target.value
            break;
        }
        field['field_value']=e.target.value
      }
      setElements(newElement)
    });
  }
  return (
    <FormContext.provider value={{handleChange}}>
    <div className="App container">
      <h1>{page_label}</h1>
      <form className="mb-3">

      {fields ? fields.map((field, i) =><Element key={i} field={field} />) :null}


  
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
    </FormContext.provider>
  );
}

export default App;
