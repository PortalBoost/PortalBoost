import { useState } from "react"
import EmployeeModal from "./EmployeeModal"

// TODO: Get employee ID, send ID to employeemodal

//Temp solution while doing layout
interface TestEmployeeProps {
	testId: number;
}

const EmployeePreview = ({ testId }: TestEmployeeProps) => {

	const [openModal, setOpenModal] = useState(false)



	const toggleOpen = () => {
		setOpenModal(!openModal)
	}
	// TODO: Hover/Touch differences on mobile
	// TODO: Nicer looking outline
	// TODO: Hover effects
	// TODO: Overlays?
	const placeholderProfilePicture = <div className="bg-n-purple-dark w-[600px] h-[300px] p-1 m-1 shrink flex justify-center items-center rounded-lg
	 bg-gradient-to-br opacity-50 from-n-offwhite ">Placeholder Picture</div>

	return (
		<>
			<div
				onClick={toggleOpen}
				className="h-auto rounded-lg flex flex-col bg-white shadow-lg gap-1 ring-1 ring-n-gray md:max-w-md
		transition-all hover:cursor-pointer hover:-translate-y-2 hover:shadow-xl ">

				{/** Fake image */}
				<div className="flex justify-center ">
					{placeholderProfilePicture}
				</div>
				<hr className="m-1"></hr>
				<div className="p-4 pt-2">
					<div className="text-n-purple font-semibold text-lg">Person Name {testId}</div>
					{/* <p className="mt-2 font-bold">One-liner</p> */}
					<p className="mt-2 italic">Short one-liner intro, interesting things in here. Short and sweet. </p>
				</div>
			</div>
			<EmployeeModal isOpen={openModal} toggleOpen={toggleOpen} testId={testId} />
		</>
	)
}

export default EmployeePreview