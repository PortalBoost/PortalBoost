import EmployeePreview from "../../components/employee/EmployeePreview"






const ViewEmployees = () => {

	//TODO: Get all employees/mock employees. Map out all employees in container, show employeepreview for each employee. On click, get id, show modal with usermodal with same id.

	const TEST_EMPLOYEES = [
		{ testEmployeeID: 1 },
		{ testEmployeeID: 2 },
		{ testEmployeeID: 3 },
		{ testEmployeeID: 4 },
		{ testEmployeeID: 5 },
		{ testEmployeeID: 6 },
		{ testEmployeeID: 7 },
		{ testEmployeeID: 8 },
		{ testEmployeeID: 9 },
		{ testEmployeeID: 10 },
	]

	const placeholderSearchbar = <div className="ring-1 ring-n-purple rounded-md p-2 sm:w-96 max-w-xs truncate shrink">Searchbar - placeholder </div>
	//TODO: Proper grid sizing
	return (
		<div className="mt-20 ">
			<div className="flex flex-col gap-10 ">

				<div className="mx-auto flex">
					{placeholderSearchbar}
				</div>
				<div className="bg-gradient-to-br from-n-blue flex flex-col  sh p-5  max-w-full rounded-sm">
					<p className="text-2xl ">Meet the MyTeam Team!</p>
					<div className="bg-gradient-to-r from-n-dark p-[1px] max-w-xs rounded-full"></div>
					<p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat animi quidem aut voluptate eius voluptas ad ipsa officia</p>
					<p className="pt-2">Entertaining sentence about having a fika. Sentence about getting in touch via mail. </p>
				</div>
				{/** Test container */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5">
					{TEST_EMPLOYEES.map((x) => (
						<EmployeePreview key={x.testEmployeeID} testId={x.testEmployeeID} />
					))}
				</div>

			</div>
		</div>
	)
}

export default ViewEmployees