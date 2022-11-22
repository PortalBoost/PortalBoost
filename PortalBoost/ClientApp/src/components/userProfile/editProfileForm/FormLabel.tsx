
interface LabelProps {
	htmlFor: string;
	text: string;
}

const FormLabel = ({ htmlFor, text }: LabelProps) => {

	return (
		<label htmlFor={htmlFor} className="">{text}</label>
	)
}

export default FormLabel