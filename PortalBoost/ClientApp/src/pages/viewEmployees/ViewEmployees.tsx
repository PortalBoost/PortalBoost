import EmployeePreview from "../../components/employee/EmployeePreview"

const ViewEmployees = () => {

	//TODO: Get all employees/mock employees. Map out all employees in container, show employeepreview for each employee. On click, get id, show modal with usermodal with same id.

	const AMOUNT_OF_TEST_EMPLOYEES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	const placeholderSearchbar = <div className="ring-2 ring-n-purple rounded-md p-2 max-w-xs truncate shrink">Searchbar - layout placeholder </div>

	return (
		<div className="container mt-20 p-5">
			<div className="flex flex-col gap-10 ">
				<div className="mx-auto flex">
					{placeholderSearchbar}
				</div>
				{/** Test container */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
					{AMOUNT_OF_TEST_EMPLOYEES.map((x) =>
						<EmployeePreview key={x} />
					)}

				</div>
			</div>
		</div>
	)
}

export default ViewEmployees