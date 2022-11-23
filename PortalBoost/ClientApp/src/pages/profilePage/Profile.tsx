import { useRecoilValue } from "recoil"
import userState from "../../atoms/userState"
import TitlesMenu from "../../components/employee/TitlesMenu"
import EmployeePreview from "../../components/employee/EmployeePreview"
import EmployeePreviewRounded from "../../components/employee/EmployeePreviewRounded"
import EditProfileForm from "../../components/userProfile/editProfileForm/EditProfileForm"



const Profile = () => {
	const user = useRecoilValue(userState)

	return (
		<div className="flex flex-col items-center mt-10 gap-4">
			<div className="text-4xl font-serif"> View or edit your profile </div>
			<EditProfileForm user={user} />
		</div>
	);
};
export default Profile;
