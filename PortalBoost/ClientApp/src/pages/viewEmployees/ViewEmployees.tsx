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
		<div className="container mt-20 p-5">
			<div className="flex flex-col gap-10 ">
				<div className="mx-auto flex">
					{placeholderSearchbar}
				</div>

				{/** Test container */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
					{TEST_EMPLOYEES.map((x) => (
						<EmployeePreview key={x.testEmployeeID} testId={x.testEmployeeID} />
					))}
				</div>

			</div>
		</div>
	)
}

export default ViewEmployees