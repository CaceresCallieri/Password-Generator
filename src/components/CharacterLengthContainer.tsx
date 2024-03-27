import { FC, useState, useEffect, useRef } from "react"

const MIN_LENGTH = 6
const MAX_LENGTH = 26

interface CharacterLengthContainerProps {
    characterLength: number
    setCharacterLength: (value: number) => void
}

const CharacterLengthContainer: FC<CharacterLengthContainerProps> = ({ characterLength, setCharacterLength }) => {
    const sliderRef = useRef<HTMLInputElement>(null)
    const [sliderPercentage, setSliderPercentage] = useState<number>(0) // Since the inital character length is 10, the slider will automatically be set at the adequate percentage

    function updateSliderStyle() {
        // Update the slider style based on the percentage of the slider that is filled
        if (sliderRef.current) {
            const percentage = (Number(sliderRef.current.value) - Number(sliderRef.current.min)) / (Number(sliderRef.current.max) - Number(sliderRef.current.min)) * 100
            setSliderPercentage(percentage)
        }
    }

    useEffect(() => {
        updateSliderStyle()
    }, [characterLength])

    return (
        <div className="character-length">
            <div>
                <label>Character Length</label>
                <p>{characterLength}</p>
            </div>
            <input
                type="range"
                min={MIN_LENGTH}
                max={MAX_LENGTH}
                value={characterLength}
                onChange={(e) => setCharacterLength(Number(e.target.value))}
                ref={sliderRef}
                style={{ '--thumb-percentage': `${sliderPercentage}%` } as React.CSSProperties}
            />
        </div>
    )
}

export default CharacterLengthContainer