import React, { useState } from 'react'
import { addStyles, EditableMathField } from 'react-mathquill'
addStyles()

const InputFunction = () => {
    const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2')

    return (
        <div>
            <div>
                <EditableMathField latex={latex} onChange={(mathField) => {  setLatex(mathField.latex()) }} />
                <p>{latex}</p>
            </div>
        </div>
    )
}

export default InputFunction