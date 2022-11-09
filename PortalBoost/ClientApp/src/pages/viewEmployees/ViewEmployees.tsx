import EmployeePreview from "../../components/employee/EmployeePreview"

const ViewEmployees = () => {

	//TODO: Get all employees/mock employees. Map out all employees in container, show employeepreview for each employee. On click, get id, show modal with usermodal with same id.

	const AMOUNT_OF_TEST_EMPLOYEES = [1, 2, 3, 4, 5]

	return (
		<div className="container mt-20 bg-slate-500 p-5 min-h-screen">
			{/** Test container */}

			{/* {AMOUNT_OF_TEST_EMPLOYEES.map((x) =>
					<div key={x}>Employee</div>
				)} */}
			<EmployeePreview />

		</div>
	)
}

export default ViewEmployees