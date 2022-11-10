

type PropsT = {
	children?: React.ReactNode;
}

const ContentWrapper = (props: PropsT) => {

	return (
		<div className="container mx-auto md:max-w-8xl">
			{props.children}
		</div>
	)
}

export default ContentWrapper