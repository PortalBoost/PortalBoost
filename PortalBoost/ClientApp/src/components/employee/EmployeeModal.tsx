

// Container
// Card Header/Top section
// Image
// Name(?)
// Card contents
// About-me sections
// Card footer(?)
// Send a message button (email)

interface EmployeeModalProps {
	isOpen: boolean;
	toggleOpen: () => void;
	testId: number; // TODO:  Send in real User 
}

//TODO: Reusable modal container instead?
//TODO: Center inner container?
const EmployeeModal = ({ isOpen, toggleOpen, testId }: EmployeeModalProps) => {

	return (
		<>
			{
				isOpen && (

					<div
						className="bg-black bg-opacity-50 fixed top-0 right-0 left-0 w-full h-full z-50"
						onClick={toggleOpen} >

						<div className="bg-white relative top-1/4 mx-auto max-w-3xl sm:w-full p-14 rounded-sm"
							onClick={(e) => e.stopPropagation()}>

							{/** Main Content */}
							<div className="">
								Testing testing. ID is: {testId}
							</div>

						</div>

					</div>
				)}
		</>
	)
}

export default EmployeeModal