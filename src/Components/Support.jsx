import React, {useState, Fragment} from 'react'
import './Support.css'
import HeaderSections from './Widgets/HeaderSections'
import transactions from '../transactions.json'
import Transaction from './Widgets/Transaction'
import InputRequirement from './Widgets/InputRequirement'
import BackButton from './Widgets/BackButton'
import Topbar from './Topbar'

const Support = () => {

    const [showInput , setShowInput] = useState(false);
    const [problematicTransac, setProblematicTransac] = useState('')

    const showInputView = (transac) => {
        setShowInput(true)
        setProblematicTransac(transac)
    }

    const goBackToTransactions = () => {
        setShowInput(false)
        setProblematicTransac('')
    }

    return (
        <Fragment>
            <Topbar />
            <div className='support'>
                <HeaderSections title='Solicitud'/>
                { showInput ?
                <div className='contentSupport'>
                    <BackButton onClick={() => goBackToTransactions()}/>
                    <div className='chosenTransaction'>
                        <p className='chosenTitle'>{problematicTransac.title}</p>
                        <p className='chosenAmount'>{problematicTransac.amount}</p>
                        <p className='chosenDate'>{problematicTransac.date}</p>
                    </div>
                    <InputRequirement problematicTransac={problematicTransac}/>
                </div>
                :
                <div>
                    <h2 className='questionTransac'>¿En cuál transacción tuviste problemas?</h2>
                    {transactions.map(transaction => {
                        return(
                            <Transaction
                            key={transaction.id}
                            onClick={() => showInputView(transaction)}
                            date={transaction.date}
                            title={transaction.title}
                            amount={transaction.amount}
                            type={transaction.type}
                            />
                        )
                    })}
                </div>
                }
            </div>
        </Fragment>
    )
}

export default Support
