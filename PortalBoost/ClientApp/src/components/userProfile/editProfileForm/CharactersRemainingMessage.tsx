

interface CharactersRemainingProps {
	characters: number;
}

const CharactersRemainingMessage = ({ characters }: CharactersRemainingProps) => {

	return (
		<span className="text-xs font-arial cursor-default text-gray-500 place-self-end relative">{`${characters} characters remaining`}</span>
	)
}

export default CharactersRemainingMessage