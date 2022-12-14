import EmployeeModel from "../../models/employeeModel";

const testPersons = [
	 {pic: "p1", name: "John Smith" },
	 {pic: "p2", name: "Hanna Tester" },
	 {pic: "p3", name: "Anoter Testname" },
	 {pic: "p4", name: "Who Isthis" },
	 {pic: "p5", name: "Cannot Find" },
	 {pic: "p6", name: "What Name" },
]


const EmployeeSmallIcons = ({employee}: {employee: EmployeeModel}) => {
	return (
		<div className="grid grid-cols-3 gap-2 ">
			{testPersons.map((person) =>
			<div className="">
			 <img src="https://media.istockphoto.com/id/1288129985/sv/vektor/saknad-bild-av-en-platsh%C3%A5llare-f%C3%B6r-person.jpg?s=612x612&w=0&k=20&c=xjNT0OYnQAjditiExX4BPXiy5n0irhGiM2A4GfGq99I=" className="border-2 rounded-full px-0 py-4 flex justify-center hover:shadow-md ease-in-out-200 w-20 h-20"></img>
			 <p className="text-sm flex justify-center">{person.name}</p> 
			 </div>)}
		</div>

	)
}
export default EmployeeSmallIcons