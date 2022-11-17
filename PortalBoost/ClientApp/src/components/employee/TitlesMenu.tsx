


const TitlesMenu = () => {
	// TODO: State for filtered employee data, shared with searchbar thingy

	// TODO: Get proper titles. Update models to contain proper titles. Store as enums?
	// TODO: Filter shown results based on selected title.
	const temporaryTitles = ["DevOps", "Architect", "Developer", "Test"]

	return (
		<ul className="flex flex-col xxs:flex-row gap-5 xs:gap-4 xs:justify-between max-w-lg mx-auto p-4">
			{temporaryTitles.map((title) => (
				<li className="font-serif text-lg font-medium p-3 underline-offset-2 underline hover:decoration-n-purple-dark hover:scale-110 hover:cursor-pointer transition-all "
					key={title.toString()}>{title}</li>
			))}
		</ul>
	)

}

export default TitlesMenu