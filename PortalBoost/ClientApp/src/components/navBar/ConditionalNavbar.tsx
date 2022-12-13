import Navbar from './Navbar'
import MobileNavBar from './MobileNavBar'
import { useRecoilValue } from 'recoil';
import successfullLogin from "../../atoms/successfulLoginState";

const ConditionalNavBar = () => {

	const isAuth = useRecoilValue(successfullLogin)

	return (
		<>
			<div className={`hidden ${isAuth && "md:block"}`}>
				<Navbar />
			</div>

			<div className={`hidden ${isAuth && "max-md:block"}  `}>
				<MobileNavBar />
			</div>
		</>
	);
};

export default ConditionalNavBar;