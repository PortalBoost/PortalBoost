import { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import filteredEmployeesState from "../../atoms/filteredEmployeesState"
import userDataState from "../../atoms/userDataState"
import { EmployeeTitles } from "../../constants/employeeTitles"
import { Link } from "react-router-dom"


const TitlesMenu = () => {
	// TODO: State for filtered employee data, shared with searchbar thingy

	const [filteredEmployees, setFilteredEmployees] = useRecoilState(filteredEmployeesState)
	const unfilteredEmployees = useRecoilValue(userDataState)
	const resetFilter = useResetRecoilState(filteredEmployeesState)
	const [selectedItem, setSelectedItem] = useState("")
	const employeeTitles = Object.values(EmployeeTitles).map((title) => title)

	const updateEmployeeFilter = (title: string) => {
		const filteredByTitle = unfilteredEmployees.filter((employee) => employee.title === title)
		setFilteredEmployees(filteredByTitle)
	}

	const handleSelect = (title: string) => {
		setSelectedItem(title)
	}

	const handleResetFilter = () => {
		resetFilter();
	}


	return (
		<ul className="flex flex-col justify-center sm:flex-row  p-4  gap-6 ">
			<li
				onClick={() => (handleResetFilter(), handleSelect("All titles"))}
				className={`p-3 sm:p-1  hover:decoration-n-turquoise-dark hover:scale-110 hover:cursor-pointer  transition-all font-serif text-lg font-medium underline underline-offset-2 
				 ${selectedItem === "All titles" ? "decoration-4 decoration-n-turquoise-dark" : "decoration-1"}`}>
				{"All titles"}
			</li>
			{employeeTitles.map((title) => (
				<li className={`p-3 sm:p-1 hover:decoration-n-turquoise-dark hover:scale-110 hover:cursor-pointer  transition-all font-serif text-lg font-medium underline underline-offset-2 
				 ${selectedItem === title ? "decoration-4 decoration-n-turquoise-dark " : "decoration-1"}`}
					onClick={() => (updateEmployeeFilter(title), handleSelect(title))}
					key={title.toString()}
				>
					{title}
				</li>
			))}
		</ul>
	)

}

export default TitlesMenu