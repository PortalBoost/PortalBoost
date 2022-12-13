
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5"
import { RiMailSendLine } from "react-icons/ri"
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import CompanyModel from "../../models/companyModel";
import EmployeeModel from "../../models/employeeModel";
import PreviewCard from "../previewCard/PreviewCard";

interface EmployeeModalProps {
	isOpen: boolean;
	toggleOpen: () => void;
	employee: EmployeeModel;
	assignment: CompanyModel | undefined;
}

// TODO: Reusable modal container instead?
// TODO: Esc to close modal
// TODO: Close button, fixed at top. When scrolled down, fixed at bottom.
// TODO: Send message button: Take email of viewed employee, open default mail program. 
// TODO: Fix animate-fade-out on component unmount
//TODO: Company Preview Card in assignment section, link to company
const EmployeeModal = ({ isOpen, toggleOpen, employee, assignment }: EmployeeModalProps) => {

	const placeholderProfilePicture = <div className="bg-n-purple-dark w-[1500px] h-[300px]  shrink flex justify-center items-center 
	bg-gradient-to-br opacity-50 from-n-offwhite ">Placeholder Picture</div>

	return (
		< div id="modal-overlay"
			className="bg-black bg-opacity-50 fixed top-0 right-0 left-0 w-full h-full z-50
			backdrop-blur-[2px]"
			onClick={toggleOpen} >

			{/** Modal background */}
			<div id="modal" className={`bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
						w-full h-screen sm:max-w-3xl sm:h-auto overflow-auto
						rounded-sm  ${isOpen ? "animate-fade-in" : "animate-fade-out"}`}
				onClick={(e) => e.stopPropagation()}>

				{/** Main Content */}
				<div className=" w-full h-full rounded-sm break-words">
					{/** Fake image*/}
					<div className="flex justify-center mb-2 ">
						{placeholderProfilePicture}
					</div>
					<hr className="m-1 sm:mx-5"></hr>
					{/** Card Content */}
					<div className="p-3 xs:py-8 xs:pb-12 sm:px-10 ">
						<div className="text-n-purple text-3xl uppercase">  {employee.firstName} {employee.lastName}</div>
						<p className="text-sm pl-1"> {employee.title} </p>
						<div className="bg-gradient-to-r from-n-purple h-0.5 w-2/5 rounded-full"></div>

						<p className="pt-2 italic "> {employee.oneLiner} </p>

						<p className="mt-2 font-bold">Presentation</p>
						<p> {employee.presentation}</p>

						<p className="mt-2 font-bold">Surprising fact or skill</p>
						<p className="">{employee.skill}</p>

						<div className="flex flex-col  pt-12 sm:pt-4">
							<p className="font-bold underline underline-offset-2 decoration-n-dark/50 ">Current Assignment</p>
							<Link to={`/companies/${assignment?.id}`} className="mt-1 shadow-md max-w-sm p-2 ring-1 ring-n-purple">
								<p className="font-bold">{assignment?.name}</p>
								<p className="">{assignment?.description}</p>
							</Link>
						</div>

						<button className="mt-10 sm:mt-5 flex px-4" >
							<a className="flex gap-2 items-center"
								href={`mailto:${employee.email}`}>
								<RiMailSendLine className="text-xl" /> Send a message
							</a>
						</button>
					</div>

					<div role="button" id="close-modal" onClick={toggleOpen}
						className="fixed top-0 right-0  ">
						<IoCloseCircleOutline className="hover:rotate-90 transition-transform text-4xl m-2 text-white filter drop-shadow-lg " />
					</div>

				</div>
			</div>
		</div>
	)
}

export default EmployeeModal