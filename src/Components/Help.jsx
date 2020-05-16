import React from 'react'
import './Help.css'
import SvgProblem from './Widgets/ProblemIcon'
import SvgNewUsers from './Widgets/NewUserIcon'
import SvgCardHelp from './Widgets/CardHelpIcon'
import SvgChargeMoney from './Widgets/ChargeMoneyIcon'
import SvgWithdrawal from './Widgets/WithdrawIcon'

const Help = () => {
    return (
        <div className='help'>
            <header className='welcomeHelp'>
                <h1 className='titleHelp'>Centro de ayuda</h1>
                <input className='searchInput' type="search" placeholder='Busca tu duda aquí' />
            </header>
            <section className='sectionCategories'>
                <div className='categoryHelp'>
                    <div className='contentCategory' >
                        <SvgProblem />
                        <span className='categoryText'>Tengo un problema</span>
                    </div>
                    <img alt='Read more' src={require('../img/next.svg')} />
                </div>
                <div className='categoryHelp'>
                    <div className='contentCategory' >
                        <SvgNewUsers />
                        <span className='categoryText'>Soy nuevo en Tenpo</span>
                    </div>
                    <img alt='Read more' src={require('../img/next.svg')} />
                </div>
                <div className='categoryHelp'>
                    <div className='contentCategory' >
                        <SvgCardHelp />
                        <span className='categoryText'>Tarjeta Tenpo Mastercard</span>
                    </div>
                    <img alt='Read more' src={require('../img/next.svg')} />
                </div>
                <div className='categoryHelp'>
                    <div className='contentCategory' >
                        <SvgChargeMoney />
                        <span className='categoryText'>Cargar plata a Tenpo</span>
                    </div>
                    <img alt='Read more' src={require('../img/next.svg')} />
                </div>
                <div className='categoryHelp'>
                    <div className='contentCategory' >
                        <SvgWithdrawal />
                        <span className='categoryText'>Retirar plata</span>
                    </div>
                    <img alt='Read more' src={require('../img/next.svg')} />
                </div>
                <div className='categoryHelp'>
                    <div className='contentCategory' >
                        <SvgWithdrawal />
                        <span className='categoryText'>Retirar plata</span>
                    </div>
                    <img alt='Read more' src={require('../img/next.svg')} />
                </div>
            </section>
        </div>
    )
}

export default Help
