

type Props = {
	children?: React.ReactNode;
}

const ContentWrapper = (props: Props) => {

	return (
		<div className="container mx-auto">
			{props.children}
		</div>
	)
}

export default ContentWrapper