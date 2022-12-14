

type PropsT = {
	children?: React.ReactNode;
}

const ContentWrapper = (props: PropsT) => {

	return (
		<div className="container mx-auto max-w-4xl md:max-w-6xl min-h-screen">
			{props.children}
		</div>
	)
}

export default ContentWrapper