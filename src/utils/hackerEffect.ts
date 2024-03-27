function triggerHackerEffect(text: string): string | void{
	const availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '!@#$%^&*()_+'
	let interval: number | null = null
	let chars = text.split('')
	let iterations = 0

	if (interval) {
		clearInterval(interval)
	}

	const intervalTime = 200 / text.length // Normalized time so that the effect is the same for all texts, no matter the length

	interval = setInterval(() => {
		chars = chars.map((char, index) => {
			if (index < iterations) {
				return text[index]
			}
			console.log(availableCharacters[Math.floor(Math.random() * availableCharacters.length)])
			return availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
		});

		if (iterations !== null && iterations >= text.length) clearInterval(iterations)

		iterations += 1 / 4
	}, intervalTime)
}

export default triggerHackerEffect