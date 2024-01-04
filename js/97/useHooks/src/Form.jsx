// import React, { useState } from 'react'
import useForm from './UseForm';

export default function Form() {
  /*const [state, setState] = useState({
    name: 'J',
    age: 1
  });*/

  const [formData, setFormData] = useForm({
    name: 'J',
    age: 1
  });

  return (
    <form>
      name: <input value={formData.name} onChange={setFormData} name="name"/>
      age: <input type="number" value={formData.age} onChange={setFormData} name="age" />
    </form>
  )
}
