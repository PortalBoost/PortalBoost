import { useRecoilValue } from "recoil"
import userDataState from "../../atoms/userDataState"
import TitlesMenu from "../../components/employee/TitlesMenu"
import EmployeePreview from "../../components/employee/EmployeePreview"
import EmployeePreviewRounded from "../../components/employee/EmployeePreviewRounded"
import filteredEmployeesState from "../../atoms/filteredEmployeesState"






const ViewEmployees = () => {
	const employeeData = useRecoilValue(userDataState)
	const filteredEmployeeData = useRecoilValue(filteredEmployeesState)


	const placeholderSearchbar = <div className="ring-1 ring-n-purple rounded-md p-1  truncate shrink text-n-dark/50 text-left pl-2 w-full max-w-xs">Search... </div>
	//TODO: Proper grid sizing
	return (
		<div className="mt-20 animate-fade-in">
			<div className="flex flex-col gap-10 ">


				<div className="text-center ">
					<p className="text-4xl  font-serif"> Meet the <span className="text-n-dark font-semibold">MyTeam</span> Team.</p>

					<div className="mx-auto flex justify-center pt-4">
						{placeholderSearchbar}
					</div>

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