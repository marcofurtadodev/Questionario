import { useState } from 'react'
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import "./Question.css"

const [count, setCount] = useState(0)
const Question = ( { title, questionNumber, parentArray, setParentArray } : 
{
    title: string,
    questionNumber:number,
    parentArray: Array<number>,
    setParentArray: any
}) => {
  return (
    <div className='QuestionWrapper'> 
        <h1>{title}</h1>
        <FormControl>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Nunca"
            name="radio-buttons-group"
        >
            <div className='OptionWrapper'> 
            {count}
                <div className='QuestionOptions'>
                
                    <FormControlLabel value="Nunca" control={<Radio />} label="Nunca"               onClick={() => setCount(0)}/>
                    <FormControlLabel value="QuaseNunca" control={<Radio />} label="Quase nunca"    onClick={() => setCount(1)}/>
                    <FormControlLabel value="Regularmente" control={<Radio />} label="Regularmente" onClick={() => setCount(2)}/>
                </div>
                <div className='QuestionOptions'> 
                    <FormControlLabel value="QuaseSempre" control={<Radio />} label="Quase sempre" onClick={() => setCount(4)}/>
                    <FormControlLabel value="Sempre" control={<Radio />} label="Sempre"            onClick={() => setCount(8)}/>
                </div>
            </div>
        </RadioGroup>
        </FormControl>
    </div>
  )
}

void function(newCount : number){
    setCount(newCount);

} 

export default Question
