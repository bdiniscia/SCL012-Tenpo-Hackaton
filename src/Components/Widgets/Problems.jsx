import React, {useState} from 'react'
import problems from '../../problems.json'
import './Problems.css'

const Problems = ({goingBack}) => {
    const [showAnswer, setShowAnswer] = useState(false)
    const [answer, setAnswer] = useState('')
    const [titleAnswer, setTitleAnswer] = useState('')

    const showNewAnswer = (newAnswer, newTitle) => {
        setAnswer(newAnswer)
        setTitleAnswer(newTitle)
        setShowAnswer(true)
    }

    const goingBacktoProblems = () => {
        setAnswer('')
        setTitleAnswer('')
        setShowAnswer(false)
    }

    return (
        <div className='problems'>
            { showAnswer ?
            <div>
                <span className='goBack' onClick={() => goingBacktoProblems()}>&lt; Volver</span>
                <h1 className='titleSectionProblems titleSection' >{titleAnswer}</h1>
                <p className='primaryText'>{answer.primary}</p>
                {answer.steps && 
                <ol>
                    {answer.steps.map(step => {
                        return (
                            <li className='listStep'>{step}</li>
                        )
                    })} 
                </ol>
                }
                <h3 className='usefulQuestion'>¿Fue útil este artículo?</h3>
                <div className='feedbackButtons'>
                    <img className='feedback' src={require('../../img/fail.svg')} alt="No fue útil" />
                    <img className='feedback' src={require('../../img/success.svg')} alt="Sí, fue útil" />  
                </div>
                
            </div>
            :
            <div>
                <span className='goBack' onClick={goingBack}>&lt; Volver</span>
                <h1 className='titleSectionProblems'>Tengo un problema</h1>
                {problems.map(problem => {
                    return (
                        <div className='divProblem' onClick={() => showNewAnswer(problem.answer, problem.problem)} key={problem.id}>
                            <p className='problemQuestion'>{problem.problem}</p>
                            <img alt='Read more' src={require('../../img/next.svg')} />
                        </div>
                    )
                })}        
            </div>
            }
        </div>
    )
}

export default Problems
