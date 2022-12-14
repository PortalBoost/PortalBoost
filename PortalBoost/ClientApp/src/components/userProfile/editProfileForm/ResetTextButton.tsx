import { GrPowerReset } from "react-icons/gr"


interface ResetTextButtonProps {
	setResetText: () => void;
}

const ResetTextButton = ({ setResetText }: ResetTextButtonProps) => {
	return (


		<button onClick={setResetText} type="button" className="bg-transparent hover:bg-transparent opacity-40 w-5 py-2 flex text-lg flex-col justify-center items-center absolute bottom-3">
			<GrPowerReset />
		</button>
	)
}


export default ResetTextButton