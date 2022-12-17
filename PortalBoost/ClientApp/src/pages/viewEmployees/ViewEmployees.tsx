import { useRecoilValue } from "recoil"
import userDataState from "../../atoms/userDataState"
import TitlesMenu from "../../components/employee/TitlesMenu"
import EmployeePreviewRounded from "../../components/employee/EmployeePreviewRounded"
import filteredEmployeesState from "../../atoms/filteredEmployeesState"

const ViewEmployees = () => {
	const employeeData = useRecoilValue(userDataState)
	const filteredEmployeeData = useRecoilValue(filteredEmployeesState)

	//TODO: Proper grid sizing
	return (
		<div className="mt-20 animate-fade-in">
			<div className="flex flex-col justify-center items-center gap-10 sm:px-24">


				<div className="text-center ">
					<p className="text-4xl  font-serif"> Meet the <span className="text-n-dark font-semibold">MyTeam</span> Team.</p>
					<TitlesMenu />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5">
					{filteredEmployeeData.map((employee) => (
						<EmployeePreviewRounded key={employee.id} employee={employee} />
					))}
				</div>

			</div>
		</div>
	)
}

export default ViewEmployees