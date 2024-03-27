function generatePassword(length: number, checkBoxValues: { [key: string]: boolean }) {
    const { uppercase, lowercase, numbers, symbols } = checkBoxValues

    const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const numbersCharacters = '0123456789'
    const symbolsCharacters = '!@#$%^&*()_+'
    
    let availableCharacters = ''
    availableCharacters += uppercase ? uppercaseCharacters : ''
    availableCharacters += lowercase ? lowercaseCharacters : ''
    availableCharacters += numbers ? numbersCharacters : ''
    availableCharacters += symbols ? symbolsCharacters : ''
    
    let password = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length)
        password += availableCharacters[randomIndex]
    }
    
    return password
}

export default generatePassword
