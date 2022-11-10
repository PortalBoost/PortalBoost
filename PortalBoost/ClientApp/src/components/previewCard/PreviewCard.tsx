import { useState } from 'react'

//TODO: add a link to the company page
const PreviewCard:React.FC<{id:number, companyName:string, companyDescription:string}> = ({id, companyName, companyDescription}) => {
	
	const [isHovered, setIsHovered] = useState(false)

	const card = "bg-white rounded-lg shadow-lg p-4"
	const cardHover = "bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out"
	const cardImage = "rounded-lg w-full h-40 object-cover object-center mb-6"
	const cardTitle = "text-2xl font-medium text-gray-900 mb-3"
	const cardText = "leading-relaxed text-base"

	return (
		<div className="w-screen md:w-1/3 p-4">
			<div className={isHovered ? cardHover : card}>
				<img className={cardImage} src="https://dummyimage.com/720x400" alt="image" />
				<h2 className={cardTitle}>{companyName}</h2>
				<p className={cardText}>{companyDescription}</p>
			</div>
		</div>
	)
}
export default PreviewCard