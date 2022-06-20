import React from 'react'
import './buttonGroup.css'

function ButtonGroup() {
    return (
        <div className='containerr'>
            <h2 >Quero Pagar Cada:</h2>
            <div className="wrapper">
                <input type="radio" name="select" id="option-1"/>
                    <input type="radio" name="select" id="option-2" />
                        <input type="radio" name="select" id="option-3" />
                        <label htmlFor="option-1" className="option option-1">
                            <div className="dot"></div>
                            <span>3 anos</span>
                        </label>
                        <label htmlFor="option-2" className="option option-2">
                            <div className="dot"></div>
                            <span>1 ano</span>
                        </label>
                        <label htmlFor="option-3" className="option option-3">
                            <div className="dot"></div>
                            <span>1 mês</span>
                        </label>
                    </div>
            </div>
            )
}

            export default ButtonGroup