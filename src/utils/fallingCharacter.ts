function createFallingCharacter(checkBoxValues: { [key: string]: boolean }): void {
    const { uppercase, lowercase, numbers, symbols } = checkBoxValues
    let availableCharacters = ""
    if (uppercase) availableCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (lowercase) availableCharacters += "abcdefghijklmnopqrstuvwxyz"
    if (numbers) availableCharacters += "0123456789"
    if (symbols) availableCharacters += "!@#$%^&*()_-+=<>?/{}[]|~"

    if (availableCharacters === "") return

    const fallingCharacter = document.createElement('div')
    fallingCharacter.classList.add('letter')
    fallingCharacter.innerText = availableCharacters[Math.floor(Math.random() * availableCharacters.length)] // Insert random character into the element

    fallingCharacter.style.left = `${Math.random() * 100}vw` // Random horizontal position
    document.body.prepend(fallingCharacter)

    fallingCharacter.style.opacity = `${Math.random() * 0.3 + 0.1}` // Random opacity between 0.1 and 0.4
    fallingCharacter.style.animation = "drop linear"

    const animationDuration = Math.random() * 6000 + 4000 // Random duration between 4 and 10 seconds
    fallingCharacter.style.animationDuration = `${animationDuration}ms`

    fallingCharacter.addEventListener('animationend', () => {
        fallingCharacter.remove()
    })
}

export default createFallingCharacter