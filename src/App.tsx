import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material'
import Question from './components/Question'

function App() {
  const [countArray, setcountArray] = useState([])
  let i: number = 1;

  return (
    <>
      <form>
        <Question title="Qual a frequência que coisa 1 coisa acontece?" questionNumber={i++} parentArray={countArray} setParentArray={setcountArray}/>
        <Question title="Qual a frequência que coisa 2 coisa acontece?" questionNumber={i++} parentArray={countArray} setParentArray={setcountArray}/>
        <Question title="Qual a frequência que coisa 3 coisa acontece?" questionNumber={i++} parentArray={countArray} setParentArray={setcountArray}/>
      </form>
    </>
  )
}

export default App
