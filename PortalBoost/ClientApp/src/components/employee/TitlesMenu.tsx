import { useEffect } from "react"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import filteredEmployeesState from "../../atoms/filteredEmployeesState"
import userDataState from "../../atoms/userDataState"
import { EmployeeTitles } from "../../constants/employeeTitles"



const TitlesMenu = () => {
	// TODO: State for filtered employee data, shared with searchbar thingy

	const [filteredEmployees, setFilteredEmployees] = useRecoilState(filteredEmployeesState)
	const unfilteredEmployees = useRecoilValue(userDataState)
	const resetFilter = useResetRecoilState(filteredEmployeesState)

	const employeeTitles = Object.values(EmployeeTitles).map((title) => title)

	const updateEmployeeFilter = (title: string) => {
		const filteredByTitle = unfilteredEmployees.filter((employee) => employee.title === title)
		setFilteredEmployees(filteredByTitle)
	}

	const handleResetFilter = () => {
		resetFilter();
	}

	return (
		<ul className="flex justify-center p-4">
			<li
				onClick={() => handleResetFilter()}
				className="font-serif text-lg font-medium p-3 underline-offset-2 underline hover:decoration-n-turquoise-dark hover:scale-110 hover:cursor-pointer transition-all">
				All titles
			</li>
			{employeeTitles.map((title) => (
				<li className="font-serif text-lg font-medium p-3 underline-offset-2 underline hover:decoration-n-turquoise-dark hover:scale-110 hover:cursor-pointer transition-all"
					onClick={() => updateEmployeeFilter(title)}
					key={title.toString()}>
					{title}
				</li>
			))}
		</ul>
	)

}

export default TitlesMenu