import { useEffect, useState } from "react";
import EmployeeModal from "../../employee/EmployeeModal";
import FormLabel from "./FormLabel";
import { PlaceholderUserImage, PlaceholderUserImageContainer } from "../../common/PlaceholderUserImage";
import { AiOutlineUser } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr"
import UserModel from "../../../models/userModel";
import { EmployeeTitles } from "../../../constants/employeeTitles";
import companyDataState from "../../../atoms/companyDataState";
import { useRecoilValue } from "recoil";
import CompanyModel from "../../../models/companyModel";
import ResetTextButton from "./ResetTextButton";
import CharactersRemainingMessage from "./CharactersRemainingMessage";



// TODO: Update user in database
// TODO: Determine if user should be able to assign themselves to a company.
const EditProfileForm = ({ user }: { user: UserModel }) => {

	const MAX_LENGTH_USERNAME = 20;
	const MAX_LENGTH_ONELINER = 100;
	const MAX_LENGTH_PRESENTATION = 210;
	const MAX_LENGTH_SKILL = 100;

	// const companies = useRecoilValue(companyDataState)
	const [username, setUsername] = useState("")
	const [openModal, setOpenModal] = useState(false)
	const [previewUser, setPreviewUser] = useState({ ...user })


	const [formFields, setFormFields] = useState({
		oneLiner: user.oneLiner ? user.oneLiner : "",
		presentation: user.presentation ? user.presentation : "",
		skill: user.skill ? user.skill : ""
	})

	const resetTextOneliner = () => {
		setFormFields({
			...formFields,
			oneLiner: user.oneLiner ? user.oneLiner : ""
		})
	}
	const resetTextPresentation = () => {
		setFormFields({
			...formFields,
			presentation: user.presentation ? user.presentation : ""
		})
	}
	const resetTextSkill = () => {
		setFormFields({
			...formFields,
			skill: user.skill ? user.skill : ""
		})
	}

	const [selectTitle, setSelectTitle] = useState("")
	const [selectCompany, setSelectCopmany] = useState<CompanyModel>()

	const handleUsernameFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value)
	}

	const handleTitleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectTitle(e.target.value)
	}

	// const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
	// 	const selectedCompany = companies.find((x) => x.name === e.target.value);
	// 	setSelectCopmany(selectedCompany)
	// }

	const handleFieldChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		setFormFields({
			...formFields,
			[e.target.name]: value
		});
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// More stuff in here
	}

	const toggleOpenModal = () => {
		setOpenModal(!openModal)
	}

	const handlePreview = () => {
		const tempUser = { ...user }
		tempUser.username = username;
		tempUser.presentation = formFields.presentation ? formFields.presentation : tempUser.presentation;
		tempUser.oneLiner = formFields.oneLiner ? formFields.oneLiner : tempUser.oneLiner;
		tempUser.skill = formFields.skill ? formFields.skill : tempUser.skill;
		tempUser.title = selectTitle;

		setPreviewUser(tempUser);
		toggleOpenModal();
	}



	// TODO: Separate out into components?
	return (
		<>

			<form id="editprofile" onSubmit={(e) => handleSubmit(e)}
				className="flex  flex-col md:flex-row md:gap-4 lg:gap-10 justify-center items-center border-2 rounded-md p-5 py-10 lg:p-10  max-w-screen-2xl  bg-white ">

				<div className="flex flex-col p-10  ">
					<div className=" rounded-full max-w-[176px] max-h-[176px] mx-auto overflow-clip ring-2 ring-n-dark" >
						<PlaceholderUserImage></PlaceholderUserImage>
					</div>

					<div className="text-center text-2xl text-n-purple" >
						<div className=" bg-gradient-to-r from-transparent to-transparent via-black h-0.5  w-3/4  mx-auto"></div>
						<p className="text-xl font-sans">{user.username}</p>
						<p className="text-md font-sans">{user.firstName} {user.lastName}</p>
					</div>
				</div>

				<div>

					<div className="w-full flex flex-col">
						<FormLabel htmlFor="username" >{"Username"}</FormLabel>
						<input id="username" type="text" name="userName" placeholder={user.username} defaultValue={user.username} maxLength={MAX_LENGTH_USERNAME}
							onChange={handleUsernameFieldChange}
							className="rounded ring-1 ring-n-dark px-4 py-1 font-serif text-lg outline-n-purple-light" />
						<span className="text-xs font-arial cursor-default text-gray-500 place-self-end">{`${MAX_LENGTH_USERNAME} characters max`}</span>
					</div>

					<div className="w-full flex flex-col pb-2">
						<FormLabel htmlFor="title" >{"Title"} </FormLabel>
						<select id="title" name="title" onChange={handleTitleChange} defaultValue={user.title ? user.title : "Select your title"}
							className="rounded ring-1 ring-n-dark px-4 py-1 font-serif text-lg outline-n-purple-light w-auto ">
							<option disabled  >Select your title</option>
							{Object.values(EmployeeTitles).map((title) => (
								<option key={title} className="" value={title}>{title}</option>
							))}
						</select>
					</div>

					<div className="w-full flex flex-col relative">
						<FormLabel htmlFor="oneliner" > {"Write a short and sweet one-liner."} </FormLabel>
						<textarea id="oneliner" name="oneLiner" placeholder={"\"A movie-fanatic who loves cats!\""} value={formFields.oneLiner} maxLength={MAX_LENGTH_ONELINER} rows={3}
							onChange={handleFieldChange}
							className="rounded ring-1 ring-n-dark px-5 py-1 font-serif text-lg outline-n-purple-light" />
						<CharactersRemainingMessage characters={MAX_LENGTH_ONELINER - formFields.oneLiner.length} />
						<ResetTextButton setResetText={resetTextOneliner} />
					</div>

					<div className="w-full flex flex-col relative">
						<FormLabel htmlFor="presentation" >{"Write a short presentation of who you are."} </FormLabel>
						<textarea id="presentation" name="presentation" placeholder={"Do you have any particular interests?\nDo you live somewhere exciting?"} value={formFields.presentation} maxLength={MAX_LENGTH_PRESENTATION} rows={6}
							onChange={handleFieldChange}
							className="rounded ring-1 ring-n-dark px-5 py-1 font-serif text-lg outline-n-purple-light" />
						<CharactersRemainingMessage characters={MAX_LENGTH_PRESENTATION - formFields.presentation.length} />
						<ResetTextButton setResetText={resetTextPresentation} />
					</div>

					<div className="w-full flex flex-col relative ">
						<FormLabel htmlFor="skill">{`A surprising fact about yourself.`} </FormLabel>
						<FormLabel htmlFor="skill">{`The more random the better!`} </FormLabel>
						<textarea id="skill" name="skill" placeholder={"Can you wiggle your ears?\nHave you written a book?\nDo you hold a Guinness World Record?"} value={formFields.skill} maxLength={MAX_LENGTH_SKILL} rows={4}
							onChange={handleFieldChange}
							className="rounded ring-1 ring-n-dark px-5 py-1 font-serif text-lg outline-n-purple-light " />
						<CharactersRemainingMessage characters={MAX_LENGTH_SKILL - formFields.skill.length} />
						<ResetTextButton setResetText={resetTextSkill} />
					</div>

					<div className="flex flex-col gap-8 sm:flex-row justify-between w-full mt-5">
						<button onClick={handlePreview}>Preview Profile</button>
						<button>Update Profile</button>
					</div>

				</div>


				{/* 
				<div>
					<div className="w-full flex flex-col">
						<FormLabel htmlFor="title" >{"Title"} </FormLabel>
						<select id="title" name="title" onChange={handleTitleChange}
							className="rounded ring-1 ring-n-dark px-4 py-1 font-serif text-lg outline-n-purple-light w-auto">
							<option disabled selected>Select a title</option>
							{Object.values(EmployeeTitles).map((title) => (
								<option className="" value={title}>{title}</option>
							))}
						</select>


						<FormLabel htmlFor="company" >{"Current Assignment"} </FormLabel>
						<select id="company" name="company" onChange={handleCompanyChange}
							className="rounded ring-1 ring-n-dark px-4 py-1 font-serif text-lg outline-n-purple-light w-auto">
							<option disabled selected>Select assignment</option>
							{companies.map((company) => (
								<option className="" value={company.name}>{company.name}</option>
							))}
						</select>
					</div>
				</div> */}

			</form>
			{openModal && <EmployeeModal isOpen={openModal} toggleOpen={toggleOpenModal} employee={previewUser} />}
		</>
	)
}

export default EditProfileForm