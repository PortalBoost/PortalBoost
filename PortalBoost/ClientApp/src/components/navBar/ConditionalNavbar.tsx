import Navbar from './Navbar'
import MobileNavBar from './MobileNavBar'

const ConditionalNavBar = () => {

  return (
	<>
		  <div className="hidden md:block">
			  <Navbar />
		  </div>

		  <div className="md:hidden">
			  <MobileNavBar />
		  </div>
	  </>
  );
};

export default ConditionalNavBar;