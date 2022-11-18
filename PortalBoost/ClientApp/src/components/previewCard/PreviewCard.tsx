import { useState } from 'react'

//TODO: add a link to the company page
const PreviewCard:React.FC<{id:number, companyName:string, companyDescription:string}> = ({id, companyName, companyDescription}) => {
	
	const [isHovered, setIsHovered] = useState(false)

	const card = "bg-white rounded-lg shadow-lg p-5"
	const cardHover = "bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out"
	const cardImage = "rounded-xl w-full h-40 object-cover object-center mb-6"
	const cardTitle = "text-2xl font-medium text-gray-900 mb-3 "
	const cardText = "leading-relaxed text-base overflow-hidden"
	
	//for card: w-screen md:w-1/3 p-4
	return (
		<div className="">
			<div className={card}>
				<img className={cardImage} src="https://media.istockphoto.com/id/1347612424/sv/vektor/cloud-logo-template-design-vector.jpg?s=612x612&w=0&k=20&c=YzDDQ0ZRXNhP3Q4j4jscP1gSR4Psvhit3HVyHpeTxTU=" alt="image" />
				<h2 className={cardTitle}>{companyName}</h2>
				<p className={cardText}>{companyDescription}</p>
			</div>
		</div>
	)
}
export default PreviewCard