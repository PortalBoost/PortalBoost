import { useState } from "react"
import EmployeeModel from "../../models/employeeModel";
import EmployeeModal from "./EmployeeModal"
import { AiOutlineUser } from "react-icons/ai";
import { PlaceholderUserImage } from "../common/PlaceholderUserImage";



const EmployeePreviewRounded = ({ employee }: { employee: EmployeeModel }) => {

	const [openModal, setOpenModal] = useState(false)

	const toggleOpen = () => {
		setOpenModal(!openModal)
	}


	// TODO: Border thingy top right, bottom left opposite side. Animate?
	return (
		<>
			<div className=" flex flex-col relative group ">

				<div onClick={toggleOpen} className=" rounded-full max-w-[176px] max-h-[176px] mx-auto overflow-clip ring-2 ring-n-dark cursor-pointer group-hover:scale-110 transition-transform " >
					<PlaceholderUserImage />
				</div>

				<div onClick={toggleOpen}
					className="p-4 pt-2 bg-white group-hover:shadow-xl -mt-6 cursor-pointer transition-shadow z-0 rounded-b-2xl" >
					<div className="relative">
						<div className=" bg-gradient-to-r from-transparent to-transparent via-black h-0.5  w-3/4  absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-2"></div>
					</div>
					<div className="text-n-purple font-semibold text-lg text-center">{employee.firstName} {employee.lastName}</div>
					<div className="flex mx-auto max-w-0 group-hover:max-w-[50%] transition-all duration-500 h-0.5 bg-n-purple"></div>
					<p className="mt-2 italic text-center">Short one-liner intro, interesting things in here. Short and sweet. </p>
				</div>

			</div>
			<EmployeeModal isOpen={openModal} toggleOpen={toggleOpen} employee={employee} />
		</>
	)
}

export default EmployeePreviewRounded