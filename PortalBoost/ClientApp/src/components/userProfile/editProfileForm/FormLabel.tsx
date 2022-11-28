
interface LabelProps {
	htmlFor: string;
	children?: React.ReactNode;
}

const FormLabel = ({ htmlFor, children }: LabelProps) => {

	return (
		<label htmlFor={htmlFor} className="text-n-purple pb-1">{children}</label>
	)
}

export default FormLabel