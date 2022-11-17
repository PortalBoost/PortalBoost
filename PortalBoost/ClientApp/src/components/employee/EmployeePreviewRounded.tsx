import { useState } from "react"
import EmployeeModel from "../../models/employeeModel";
import EmployeeModal from "./EmployeeModal"
import { AiOutlineUser } from "react-icons/ai";

const EmployeePreviewRounded = ({ employee }: { employee: EmployeeModel }) => {

	const [openModal, setOpenModal] = useState(false)

	const toggleOpen = () => {
		setOpenModal(!openModal)
	}


	const placeholderImage = <div className="from-n-dark bg-gradient-to-br  p-10 mx-auto "> <AiOutlineUser className="text-8xl text-n-offwhite filter opacity-90 drop-shadow-[4px_4px_4px_black]" /> </div>
	//transition-all hover:cursor-pointer hover:-translate-y-2 hover:shadow-xl
	return (
		<>
			<div className=" flex flex-col relative group ">

				<div onClick={toggleOpen} className="bg-slate-600 rounded-full max-w-[176px] max-h-[176px] mx-auto overflow-clip ring-2 ring-n-dark cursor-pointer" >
					{placeholderImage}
				</div>

				<div onClick={toggleOpen}
					className="p-4 pt-2 bg-white shadow-md -mt-6 cursor-pointer" >
					<div className="flex max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></div>
					<div className="text-n-purple font-semibold text-lg text-center">{employee.firstName} {employee.lastName}</div>
					<p className="mt-2 italic text-center">Short one-liner intro, interesting things in here. Short and sweet. </p>
				</div>

			</div>
			<EmployeeModal isOpen={openModal} toggleOpen={toggleOpen} employee={employee} />
		</>
	)
}

export default EmployeePreviewRounded