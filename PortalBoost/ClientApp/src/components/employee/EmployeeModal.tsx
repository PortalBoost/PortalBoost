
import { AiFillCloseCircle } from "react-icons/ai"
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
// TODO: Scroll through modal
// TODO: Close button, fixed at top. When scrolled down, fixed at bottom.
// TODO: Remove horizontal scroll?
const EmployeeModal = ({ isOpen, toggleOpen, testId }: EmployeeModalProps) => {





	const placeholderProfilePicture = <div className="bg-n-purple-dark w-[600px] h-[300px] p-1 m-1 shrink flex justify-center items-center rounded-lg
	bg-gradient-to-br opacity-50 from-n-offwhite ">Placeholder Picture</div>

	return (
		<>
			{
				isOpen && (

					< div
						className="bg-black bg-opacity-50 fixed top-0 right-0 left-0 w-full h-full z-50"
						onClick={toggleOpen} >

						{/** Modal background */}
						<div className="bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
						w-full h-screen sm:max-w-3xl xs:h-auto overflow-scroll
						rounded-sm  "
							onClick={(e) => e.stopPropagation()}>

							{/** Main Content */}
							<div className=" w-full h-full rounded-sm">
								{/** Fake image*/}
								<div className="flex justify-center ">
									{placeholderProfilePicture}
								</div>
								<hr className="m-1 sm:mx-5"></hr>
								{/** Card Content */}
								<div className="p-3 sm:py-5 sm:px-10">
									<div className="text-n-purple font-semibold text-lg">Person Name {testId}</div>
									<p className="mt-2 font-bold">One-liner</p>
									<p className="">Short intro stuff, interesting things in here. Short and sweet. </p>
									<p className="mt-2 font-bold">More stuff</p>
									<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe reprehenderit fugiat minus cum, doloremque deserunt aperiam nihil natus libero quisquam id pariatur possimus est magni dignissimos ratione sunt expedita non.</p>
									<p className="mt-2 font-bold">Additional stuff</p>
									<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe reprehenderit fugiat minus cum, doloremque deserunt aperiam nihil natus libero quisquam id pariatur possimus est magni dignissimos ratione sunt expedita non.</p>
								</div>
								<AiFillCloseCircle onClick={toggleOpen} style={{
									position: "fixed", top: "0", right: "0",
									fontSize: "50px", margin: "10px",
									color: ""
								}} />
							</div>

						</div>

					</div>
				)
			}
		</>
	)
}

export default EmployeeModal