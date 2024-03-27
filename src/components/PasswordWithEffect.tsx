import { FC, useState, useEffect, useRef } from 'react'

interface PasswordWithEffectProps {
    password: string
}

const PasswordWithEffect: FC<PasswordWithEffectProps> = ({ password }) => {
    const [chars, setChars] = useState<string[]>(password.split(''))
    const intervalRef = useRef<number | null>(null)

    useEffect(() => {
        const availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '!@#$%^&*()_+'
        let iterations = 0
        const intervalTime = 20

        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current)
        }

        // Update chars state with the latest password
        setChars(password.split(''))

        intervalRef.current = window.setInterval(() => {
            setChars((oldChars) => 
                oldChars.map((char, index) => {
                    if (index < iterations) {
                        return password[index]
                    }
                    return availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
                })
            )

            if (iterations >= password.length) {
                if (intervalRef.current !== null) {
                    clearInterval(intervalRef.current)
                }
            }

            iterations += 1 / 3
        }, intervalTime)

        // Cleanup on unmount or when password changes
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current)
            }
        }
    }, [password])

    return (
        <p>{chars.join("")}</p>
    )
}

export default PasswordWithEffect