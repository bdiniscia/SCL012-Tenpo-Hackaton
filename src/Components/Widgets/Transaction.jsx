import React from 'react'
import './Transaction.css'

const Transaction = ({date, amount, type, title, onClick}) => {
    return (
        <div className='transaction' onClick={onClick}>
            <div className='transacPart'>
                <span className='dateTransac'>{date}</span>
                <span className='titleTransac'>{title}</span>
            </div>
            <div className='transacPart rightPart'>
                <span className='amountTransac'>{amount}</span>
                <span className='typeTransac'>{type}</span>
            </div>
        </div>
    )
}

export default Transaction
