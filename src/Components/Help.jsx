import React from 'react'
import './Help.css'
import categories from '../help.json'
import CategoryHelp from './Widgets/CategoryHelp'

const Help = () => {
    return (
        <div className='help'>
            <header className='welcomeHelp'>
                <h1 className='titleHelp'>Centro de ayuda</h1>
                <input className='searchInput' type="search" placeholder='Busca tu duda aquí' />
            </header>
            <section className='sectionCategories'>
                {categories.map(category => {
                    return(
                        <CategoryHelp
                        key={category.id}
                        icon={category.icon}
                        title={category.title}
                        />
                    )
                })}

            </section>
        </div>
    )
}

export default Help
