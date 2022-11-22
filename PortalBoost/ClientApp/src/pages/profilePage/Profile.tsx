import { useRecoilValue } from "recoil"
import userState from "../../atoms/userState"
import TitlesMenu from "../../components/employee/TitlesMenu"
import EmployeePreview from "../../components/employee/EmployeePreview"
import EmployeePreviewRounded from "../../components/employee/EmployeePreviewRounded"
import EditProfileForm from "../../components/userProfile/editProfileForm/EditProfileForm"



const Profile = () => {
	const user = useRecoilValue(userState)

	return (
		<div>
			<h1> Welcome to Your Profile, {user.firstName}</h1>
			<EditProfileForm />
		</div>
	);
};
export default Profile;
