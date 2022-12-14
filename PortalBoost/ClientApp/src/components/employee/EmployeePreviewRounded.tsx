import { useState } from "react"
import EmployeeModel from "../../models/employeeModel";
import EmployeeModal from "./EmployeeModal"
import { AiOutlineUser } from "react-icons/ai";
import { PlaceholderUserImage } from "../common/PlaceholderUserImage";
import useFetchData from "../../hooks/useFetchData";
import PlaceholderAvatar from "../../assets/images/avatar-placeholder.jpg"



const EmployeePreviewRounded = ({ employee, sizeSmall }: { employee: EmployeeModel, sizeSmall?: boolean }) => {

	const { getEmployeeAssignment } = useFetchData();
	const employeeAssignment = getEmployeeAssignment({ id: `${employee.id}` } as EmployeeModel);

	const [openModal, setOpenModal] = useState(false)

	const toggleOpen = () => {
		setOpenModal(!openModal)
	}

	return (
		<>
			<div className={`flex flex-col relative group ${sizeSmall ? "max-w-[200px]" : "max-w-xs"}`}>

				<div onClick={toggleOpen} className={` 
				${sizeSmall ? "max-w-[121px]" : "max-w-[176px]"} 
				rounded-full mx-auto overflow-hidden ring-2 ring-n-dark cursor-pointer group-hover:scale-110 transition-all relative
				before:rounded-full before:w-full before:h-full 
				before:absolute before:ring-4 before:ring-inset before:ring-n-blue
				before:outline before:outline-n-dark before:outline-2 before:-outline-offset-4
				before:group-hover:ring-n-purple-light before:group-hover:outline-n-offwhite`} >
					<img src={PlaceholderAvatar}></img>
				</div>


				<div onClick={toggleOpen}
					className={`${sizeSmall ? "p-1" : "p-4"} pt-2 bg-white group-hover:shadow-xl -mt-6 cursor-pointer transition-shadow z-0 rounded-b-2xl`} >
					<div className="relative">
						<div className=" bg-gradient-to-r from-transparent to-transparent via-black h-0.5  w-3/4  absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-2"></div>
					</div>
					<div className="text-n-purple font-semibold text-lg text-center">{employee.firstName} {employee.lastName}</div>
					<div className="flex mx-auto max-w-0 group-hover:max-w-[50%] transition-all duration-500 h-0.5 bg-n-purple"></div>
					<p className="mt-2 italic text-center">{!sizeSmall && employee.oneLiner} </p>
				</div>

			</div>
			{openModal && <EmployeeModal isOpen={openModal} toggleOpen={toggleOpen} employee={employee} assignment={employeeAssignment} />}
		</>
	)
}

export default EmployeePreviewRounded