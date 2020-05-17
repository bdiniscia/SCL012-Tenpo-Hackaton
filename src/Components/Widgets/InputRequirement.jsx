import React from 'react'
import './InputRequirement.css'
import Button from './Button'

const InputRequirement = () => {
    return (
        <div className='inputRequirement' >
            <p className='question' >Cuéntanos qué pasó y solucionaremos tu requerimiento:</p>
            <textarea className='textareaRequirement' placeholder="Escribe aquí..." />
            <div className='divButton'>
                <Button title='Enviar' />
            </div>
        </div>
    )
}

export default InputRequirement
