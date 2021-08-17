import React,{useContext} from 'react'
import {FormContext} from '../FormContext'

function Checkbox({ field_id, field_label, field_placeholder, field_value,}) {
    const {handleChange}=useContext(FormContext);

    return (
        <div className="form-check mb-3">
            <input type='checkbox' className='form-check-input' id='exampleCheck1' checked={field_value} onChange={e=>handleChange(field_id,e)}  />
          <label className='form-check-label' htmlFor="exampleCheck1">{field_label}</label>
          
        </div>
    )
}

export default Checkbox
