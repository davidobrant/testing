import React, { useState } from 'react'

export default function Input() {

    const [name, setName] = useState()

  return (
    <div>
        <input data-testid="input" type="text" placeholder='enter name' onChange={(e) => setName(e.target.value)}/>
        <div data-testid='output'>{name}</div>
    </div>
  )
}
