import React,{useContext} from 'react'
import {FormContext} from '../FormContext'
const Input = ({field_id,field_label,field_placeholder,field_value  }) => {
  const {handleChange}=useContext(FormContext);
  handleChange()  
  return (

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">{field_label}</label>
          <input
            type='text'
            className="form-control mb-3"
            id={field_id}
            aria-describedby="emailHelp"
            placeholder={field_placeholder?field_placeholder:''}
            value={field_value}
            onChange={e=>handleChange(field_id,e)}
          />

          
          </div>
    )
}

export default Input
