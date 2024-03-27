import { FC, useMemo } from "react"

const TOO_WEAK_THRESHOLD = 17
const WEAK_THRESHOLD = 25
const MEDIUM_THRESHOLD = 40

interface StrengthIndicatorProps {
	checkBoxValues: { [key: string]: boolean }
	length: number
}

const StrengthIndicator: FC<StrengthIndicatorProps> = ({ checkBoxValues, length }) => {
	const { uppercase, lowercase, numbers, symbols } = checkBoxValues

	const strengthLevel = useMemo(() => {
		if (!uppercase && !lowercase && !numbers && !symbols) return null

		let rating: number = 0

		// Rating system: 0-16 = TOO WEAK!, 17-26 = WEAK, 25-39 = MEDIUM, 40+ = STRONG, 1 point for each character, 5 points for each character type
		rating += length
		rating += uppercase ? 5 : 0
		rating += lowercase ? 5 : 0
		rating += numbers ? 5 : 0
		rating += symbols ? 5 : 0

		if (rating < TOO_WEAK_THRESHOLD) {
			return "TOO WEAK!"
		} else if (rating < WEAK_THRESHOLD) {
			return "WEAK"
		} else if (rating < MEDIUM_THRESHOLD) {
			return "MEDIUM"
		} else {
			return "STRONG"
		}
	}, [uppercase, lowercase, numbers, symbols, length]);

	const barsClassName = strengthLevel?.replace(/\s/g, "-").replace(/!/g, "").toLowerCase() || ''; // Replaces spaces with dashes and removes exclamation marks

	return (
		<div className="strength-indicator-container" >
			<span>STRENGTH</span>
			<div className="strength-indicator">
				{!strengthLevel ? "" : (
					<>
						<p>{strengthLevel}</p>
						<div className={`bars ${barsClassName}`}>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default StrengthIndicator