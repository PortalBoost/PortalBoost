import { Link } from "react-router-dom"
import {AiOutlineArrowLeft} from 'react-icons/ai'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.';

const buttonStyling = "bg-n-turquoise hover:n-turquioise-dark text-white font-bold py-2 px-6 rounded flex flex-shrink-0 justify-items-center ease-out duration-300"
const name = "pt-20 pb-10"
const description = "p-4 pl-0 w-full "
const image= "rounded-xl w-60 h-60 object-cover object-center mb-6 absolute right-1/4 top-60 border-2 p-6 h-40"

const CompanyPage = () => {
	return(
		<div className="grid grid-cols-2 m-10 p-10 rounded-lg shadow-lg">
			<div>
				<Link to="./companies">

					<button className={buttonStyling}>
						<p className="px-2 "><AiOutlineArrowLeft /></p>
						Fler kunder</button>
				</Link>

				<div className="">
					<h1 className={name}>Company name</h1>
					
					<p className={description}>{lorem}</p>
					<p>Company website</p>
				</div>
				
			</div>
			<div>
				<img className={image} src="https://media.istockphoto.com/id/1347612424/sv/vektor/cloud-logo-template-design-vector.jpg?s=612x612&w=0&k=20&c=YzDDQ0ZRXNhP3Q4j4jscP1gSR4Psvhit3HVyHpeTxTU=" alt="image" />

				<div className="">Här kommer teamet</div>
			</div>
		</div>
	)
}

export default CompanyPage