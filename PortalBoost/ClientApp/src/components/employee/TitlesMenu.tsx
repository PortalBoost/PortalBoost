import React, { useEffect, useState } from "react"
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
	const [selectedTitle, setSelectedTitle] = useState("")
	const employeeTitles = Object.values(EmployeeTitles).map((title) => title)


	const [searchValue, setSearchValue] = useState("")


	const handleSelect = (title: string) => {
		setSelectedTitle(title)
	}

	const handleResetFilter = () => {
		// resetFilter();
	}

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value.toLocaleLowerCase());

	}

	const updateEmployeeFilter = () => {
		const filteredBySearchValue = unfilteredEmployees.filter((emp) => {
			// Search only by names, if selectedTitle is showing all titles
			if (selectedTitle === "") return emp.firstName?.toLocaleLowerCase().includes(searchValue) || emp.lastName?.toLocaleLowerCase().includes(searchValue)
			// Search only by title, if searchbar is empty
			if (searchValue === "") return emp.title === selectedTitle
			// Or return only matching titles+names
			return emp.title === selectedTitle && emp.firstName?.toLocaleLowerCase().includes(searchValue) || emp.title === selectedTitle && emp.lastName?.toLocaleLowerCase().includes(searchValue)
		})
		setFilteredEmployees(filteredBySearchValue)
	}

	useEffect(() => {
		updateEmployeeFilter();
	}, [searchValue, selectedTitle])

	return (
		<>
			<div className="py-4">
				<input id="search" className="ring-1 rounded p-1 text-sm font-sans" onChange={handleSearchChange}></input>
			</div>
			<ul className="flex flex-col justify-center sm:flex-row  p-4  gap-6 ">
				<li
					onClick={() => (handleResetFilter(), handleSelect(""))}
					className={`p-3 sm:p-1  hover:decoration-n-turquoise-dark hover:scale-110 hover:cursor-pointer  transition-all font-serif text-lg font-medium underline underline-offset-2 
				 ${selectedTitle === "" ? "decoration-4 decoration-n-turquoise-dark" : "decoration-1"}`}>
					{"All titles"}
				</li>
				{employeeTitles.map((title) => (
					<li className={`p-3 sm:p-1 hover:decoration-n-turquoise-dark hover:scale-110 hover:cursor-pointer  transition-all font-serif text-lg font-medium underline underline-offset-2 
				 ${selectedTitle === title ? "decoration-4 decoration-n-turquoise-dark " : "decoration-1"}`}
						onClick={() => (updateEmployeeFilter(), handleSelect(title))}
						key={title.toString()}
					>
						{title}
					</li>
				))}
			</ul>
		</>
	)

}

export default TitlesMenu