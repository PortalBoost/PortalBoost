

type Props = {
	children?: React.ReactNode;
}

const ContentWrapper = (props: Props) => {

	return (
		<div className="container mx-auto max-w-8xl">
			{props.children}
		</div>
	)
}

export default ContentWrapper