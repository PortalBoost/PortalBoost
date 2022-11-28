import { Link } from "react-router-dom"
import CompanyModel from "../../models/companyModel"
import EmployeeModel from "../../models/employeeModel"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import EmployeeSmallIcons from "../../components/employee/EmployeeSmallIcons"
import { useRecoilValue } from "recoil"
import { useParams } from 'react-router-dom'
import companyDataState from "../../atoms/companyDataState"
import useFetchData from "../../hooks/useFetchData";

interface CompanyProps {
	id: string,
	name: string,
	description: string[],
	techniques: string[],
	systemsUsed: string[],
	employees: EmployeeModel[]
}

type Params = {
	id: string
}



const buttonStyling = "border-2 border-n-turquoise bg-white  text-black py-2 px-6 rounded flex justify-start gap-2 items-center ease-out-duration-300 hover:n-turquioise-dark hover:text-white hover:border-white"
const name = "pt-20 pb-10 text-n-purple"
const description = "p-4 pl-0 w-full "
const image = "rounded-xl w-60 h-60 object-cover object-center mb-6 border-2 p-6 h-40"


const CompanyPage = () => {

	const { id } = useParams<'id'>(); //använder params som är en interface som har id som string

	const fetchedCompanies = useRecoilValue(companyDataState)
	const company = fetchedCompanies.find(comp => comp.id === id);


	const { getUsersAtCompany } = useFetchData();

	// Lägg in ID från valt company in som id parameter, och så får man tillbaka en array med anställda som jobbar på det företaget
	const usersWorkingAtASpecificCompanyTest = getUsersAtCompany({ id: "6374cf17193bf25d5515a513" } as CompanyModel)

	if (company)
		return (
			<div className=" animate-fade-in">
				<div className="m-10">
					<Link to="/companies">
						<button className={buttonStyling}>
							<p><AiOutlineArrowLeft /></p>
							Fler kunder</button>
					</Link>
				</div>
				<div className="grid grid-cols-2 m-10 p-20 rounded-lg shadow-lg">
					<div className="">
						<h1 className={name}>{company.name}</h1>

						<p className={description}>{company.description}</p>
						<div className="flex flex-wrap gap-20 mt-6">
							<div>
								<h3>System</h3>
								<ul>
									{company.systemsUsed.map((system, i) => <li key={i}> {system} </li>)}
								</ul>
							</div>

							<div>

								<h3>Tekniker</h3>
								<p>
									{company.techniques?.map((technique, i) => <li key={i}> {technique} </li>)}
								</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-start place-items-center pl-20">
						<img className={image} src="https://media.istockphoto.com/id/1347612424/sv/vektor/cloud-logo-template-design-vector.jpg?s=612x612&w=0&k=20&c=YzDDQ0ZRXNhP3Q4j4jscP1gSR4Psvhit3HVyHpeTxTU=" alt="image" />
						<h3 className="py-4">Teamet</h3>

						<div className="flex  ">
							<EmployeeSmallIcons />
						</div>
					</div>
				</div>


			</div>
		)
}

export default CompanyPage