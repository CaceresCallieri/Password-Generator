import { FC } from "react"
import IconArrowRight from "../assets/IconArrowRight"
import generatePassword from "../utils/generatePassword"

interface GeneratePasswordButtonProps {
    setPassword: (value: string) => void
    characterLength: number
    checkBoxValues: { [key: string]: boolean }  // Expects an object with a key of string and a value of boolean
    setError: (value: boolean) => void
}

const GeneratePasswordButton: FC<GeneratePasswordButtonProps> = ({ setPassword, characterLength, checkBoxValues, setError }) => {
    function getPassword() {
        if (!Object.values(checkBoxValues).includes(true)) {
            setError(true)
            setPassword('')
            return
        }

        setError(false)
        const newPassword = generatePassword(characterLength, checkBoxValues)
        setPassword(newPassword)
    }

    return (
        <button onClick={getPassword} aria-label="Generate Password">GENERATE <IconArrowRight /> </button>
    )
}

export default GeneratePasswordButton