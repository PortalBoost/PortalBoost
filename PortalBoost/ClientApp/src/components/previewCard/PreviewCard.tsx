import { useState } from 'react'
import useFetchData from './../../hooks/useFetchData'
import CompanyModel from '../../models/companyModel'

interface CompanyProps {
	company: CompanyModel
}

const PreviewCard = ({company}: {company: CompanyModel}) => {

	const [isHovered, setIsHovered] = useState(false)

	const card = "bg-white rounded-lg shadow-lg p-5 hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
	const cardHover = "bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out"
	const cardImage = "rounded-xl w-full h-40 object-cover object-center mb-6"
	const cardTitle = "text-2xl font-medium text-gray-900 mb-3 "
	const cardText = "leading-relaxed text-base overflow-hidden"
	
	//for card: w-screen md:w-1/3 p-4
	return (
		<div className="">
			<div className={card}>
				<img className={cardImage} src="https://media.istockphoto.com/id/1347612424/sv/vektor/cloud-logo-template-design-vector.jpg?s=612x612&w=0&k=20&c=YzDDQ0ZRXNhP3Q4j4jscP1gSR4Psvhit3HVyHpeTxTU=" alt="image" />
				<h2 className={cardTitle}>{company.name}</h2>
				<p className={cardText}>{company.description}</p>
			</div>
		</div>
	)
}
export default PreviewCard