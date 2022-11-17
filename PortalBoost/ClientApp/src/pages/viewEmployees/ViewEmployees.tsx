import { useRecoilValue } from "recoil"
import userDataState from "../../atoms/userDataState"
import TitlesMenu from "../../components/employee/TitlesMenu"
import EmployeePreview from "../../components/employee/EmployeePreview"
import EmployeePreviewRounded from "../../components/employee/EmployeePreviewRounded"






const ViewEmployees = () => {
	const employeeData = useRecoilValue(userDataState)


	const placeholderSearchbar = <div className="ring-1 ring-n-purple rounded-md p-2 sm:w-96 max-w-xs truncate shrink">Searchbar - placeholder </div>
	//TODO: Proper grid sizing
	return (
		<div className="mt-20 ">
			<div className="flex flex-col gap-10 ">

				<div className="mx-auto flex">
					{placeholderSearchbar}
				</div>
				<div className="text-center ">
					<p className="text-4xl  font-serif"> Meet the <span className="text-n-dark font-semibold">MyTeam</span> Team.</p>

					<TitlesMenu />


				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5">
					{employeeData.map((employee) => (
						<EmployeePreviewRounded key={employee.id} employee={employee} />
					))}
				</div>

			</div>
		</div>
	)
}

export default ViewEmployees