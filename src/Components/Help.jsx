import React, {useState, Fragment} from 'react'
import './Help.css'
import categories from '../help.json'
import CategoryHelp from './Widgets/CategoryHelp'
import Problems from './Problems'
import Topbar from './Topbar'

const Help = () => {
    const [showProblems, setShowProblems] = useState(false)

    const showTheProblems = () => {
        setShowProblems(true)
    }

    const hideTheProblems = () => {
        setShowProblems(false)
    }


    return (
        <Fragment>
            <Topbar />
            <div className='help'>
                <header className='welcomeHelp'>
                    <h1 className='titleHelp'>Centro de ayuda</h1>
                    <input className='searchInput' type="search" placeholder='Busca tu duda aquí' />
                </header>
                {showProblems ? 
                <Problems 
                goingBack={hideTheProblems}
                />
                :
                <section className='sectionCategories'>
                    <CategoryHelp 
                    keyId="s01"
                    title="Tengo un problema"
                    icon={require('../img/problem.svg')}
                    onClick={() => showTheProblems()}
                    />
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
                }    
            </div>
        </Fragment>
    )
}

export default Help
