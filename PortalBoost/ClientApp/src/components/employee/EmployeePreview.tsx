


const EmployeePreview = () => {



	// Container
	// Card Header/Top section
	// Image
	// Name(?)
	// Card contents
	// About-me sections
	// Card footer(?)
	// Send a message button (email)

	// TODO: Hover/Touch differences on mobile
	// TODO: Nicer looking outline
	// TODO: Hover effects
	// TODO: Overlays?
	const temppic = <div className="bg-sky-300 w-[600px] h-[300px] p-1 m-1 shrink flex justify-center items-center ">Placeholder Picture</div>

	return (
		<div className="h-auto rounded-lg flex flex-col bg-white shadow-lg gap-1 ring-1 ring-n-gray">

			{/** Fake image */}
			<div className="flex justify-center shrink">
				{temppic}
			</div>
			<hr className="my-1"></hr>
			<div className="p-4 pt-2">
				<div className="text-n-purple font-semibold text-lg">Persons Name</div>
				<p className="mt-2 font-bold">One-liner</p>
				<p className="">Short intro stuff, interesting things in here. Short and sweet. </p>
			</div>
		</div>
	)
}

export default EmployeePreview