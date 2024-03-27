import { FC, useState, useEffect } from 'react'
import PasswordWithEffect from './PasswordWithEffect'
import SvgIconCopy from '../assets/SvgIconCopy'

interface PasswordContainerProps {
    password: string
    error: boolean
}

const PasswordContainer: FC<PasswordContainerProps> = ({ password, error }) => {
    const [isCopied, setIsCopied] = useState<boolean>(false)

    // useEffect to clear the 'COPIED' message even if the component unmounts to prevent memory leaks
    useEffect(() => {
        let timeoutId: number | undefined
        if (isCopied) {
            timeoutId = setTimeout(() => {
                setIsCopied(false)
            }, 3000)
        }
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [isCopied])

    function copyToClipboard(): void {
        if (!password) return

        navigator.clipboard.writeText(password)
            .then(() => setIsCopied(true))
            .catch(err => console.error(err))
    }

    return (
        <>
            <div className="password">
                {password ?
                    (
                        <PasswordWithEffect password={password} />
                    ) :
                    (
                        error ? (
                            <p className='error'>Please select at least one option</p>
                        ) : (
                            <p className='placeholder'>P4$5W0rD!</p>
                        )
                    )}
                <div className='clipboard-container'>
                    {isCopied && <p>COPIED</p>}
                    <button onClick={copyToClipboard} aria-label='Copy to clipboard'><SvgIconCopy /></button>
                </div>
            </div>
        </>
    )
}

export default PasswordContainer