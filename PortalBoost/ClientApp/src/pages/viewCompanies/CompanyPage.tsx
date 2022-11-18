import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import EmployeeSmallIcons from "../../components/employee/EmployeeSmallIcons"

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.';

//change css on hover to

const buttonStyling = "border-2 border-n-turquoise bg-white  text-black py-2 px-6 rounded flex justify-start gap-2 items-center ease-out-duration-300 hover:n-turquioise-dark hover:text-white hover:border-white"
const name = "pt-20 pb-10 text-n-purple"
const description = "p-4 pl-0 w-full "
const image = "rounded-xl w-60 h-60 object-cover object-center mb-6 border-2 p-6 h-40"

//TODO: routing via id

const CompanyPage = () => {
	return (
		<div className="">
			<div className="m-10">
				<Link to="/companies">
					<button className={buttonStyling}>
						<p><AiOutlineArrowLeft /></p>
						Fler kunder</button>
				</Link>
			</div>
			<div className="grid grid-cols-2 m-10 p-20 rounded-lg shadow-lg">
				<div className="">
					<h1 className={name}>Company name</h1>

					<p className={description}>{lorem}</p>
					<p>Company website</p>
					<div className="flex flex-wrap gap-20 mt-6">
						<div>
							<h3>System</h3>
							<p>system 1</p>
							<p>system 2</p>
						</div>
						<div>
							<h3>Tekniker</h3>
							<p>teknik 1</p>
							<p>teknik 2</p>
							<p>teknik 3</p>
							<p>teknik 4</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-start place-items-center pl-20">
					<img className={image} src="https://media.istockphoto.com/id/1347612424/sv/vektor/cloud-logo-template-design-vector.jpg?s=612x612&w=0&k=20&c=YzDDQ0ZRXNhP3Q4j4jscP1gSR4Psvhit3HVyHpeTxTU=" alt="image" />
					<h3  className="py-4">Teamet</h3>

					<div className="flex  ">
						<EmployeeSmallIcons />
					</div>
				</div>
			</div>


		</div>
	)
}

export default CompanyPage