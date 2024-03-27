import './App.css'
import { useState, useEffect, useMemo } from 'react'

import PasswordContainer from './components/PasswordContainer'
import CharacterLengthContainer from './components/CharacterLengthContainer'
import Checkbox from './components/Checkbox'
import StrengthIndicator from './components/StrengthIndicator'
import GeneratePasswordButton from './components/GeneratePasswordButton'

import createFallingCharacter from './utils/fallingCharacter'

const App = () => {
  const [password, setPassword] = useState<string>('')
  const [characterLength, setCharacterLength] = useState<number>(10)
  const [error, setError] = useState<boolean>(false)

  const [uppercaseValue, setUppercaseValue] = useState<boolean>(true)
  const [lowercaseValue, setLowercaseValue] = useState<boolean>(true)
  const [numbersValue, setNumbersValue] = useState<boolean>(true)
  const [symbolsValue, setSymbolsValue] = useState<boolean>(true)

  const checkBoxValues = useMemo(() => ({
    "uppercase": uppercaseValue,
    "lowercase": lowercaseValue,
    "numbers": numbersValue,
    "symbols": symbolsValue
  }), [uppercaseValue, lowercaseValue, numbersValue, symbolsValue])

  useEffect(() => {
    const intervalId = setInterval(() => {
      createFallingCharacter(checkBoxValues)
    }, 1500 / characterLength)

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId)
    }
  }, [characterLength, checkBoxValues])

  return (
    <main>
      <h1>Password Generator</h1>

      <PasswordContainer password={password} error={error} />

      <section>

        <CharacterLengthContainer characterLength={characterLength} setCharacterLength={setCharacterLength} />

        <div className="checkboxes-container">
          <Checkbox label="Include Lowercase Letters" id="lowercase" isChecked={lowercaseValue} setIsChecked={setLowercaseValue} />
          <Checkbox label="Include Uppercase Letters" id="uppercase" isChecked={uppercaseValue} setIsChecked={setUppercaseValue} />
          <Checkbox label="Include Numbers" id="numbers" isChecked={numbersValue} setIsChecked={setNumbersValue} />
          <Checkbox label="Include Symbols" id="symbols" isChecked={symbolsValue} setIsChecked={setSymbolsValue} />
        </div>

        <StrengthIndicator checkBoxValues={checkBoxValues} length={characterLength} />

        <GeneratePasswordButton setPassword={setPassword} characterLength={characterLength} checkBoxValues={checkBoxValues} setError={setError} />

      </section>
    </main>
  )
}

export default App
