import React,{useContext} from 'react'
import {FormContext} from '../FormContext'

const Select = ({field_id,field_label,field_placeholder,field_value ,field_options }) => {
  const {handleChange}=useContext(FormContext);
  handleChange()  
    return (
        <div className="form-group mb-3">
          <label htmlFor="exampleFormControlSelect1">{field_label}</label>
          <select className="form-control" id="exampleFormControlSelect1" onChange={e=>handleChange(field_id,e)}>
            <option>open this select menu</option>
            {field_options.length>0 && field_options.map((option,i)=>(
              <option key={i} value={option.option_label} >{option.option_label}</option>
    ))} 
          </select>
        </div>
    )
}

export default Select
