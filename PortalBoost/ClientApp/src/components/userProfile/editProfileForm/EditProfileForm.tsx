import { useEffect, useState } from "react";
import EmployeeModal from "../../employee/EmployeeModal";
import FormLabel from "./FormLabel";
import { PlaceholderUserImage, PlaceholderUserImageContainer } from "../../common/PlaceHolderUserImage";
import { AiOutlineUser } from "react-icons/ai";
import UserModel from "../../../models/userModel";


// TODO: Update user in database
const EditProfileForm = ({ user }: { user: UserModel }) => {

	const MAX_LENGTH_USERNAME = 20;
	const MAX_LENGTH_ONELINER = 100;
	const MAX_LENGTH_PRESENTATION = 210;
	const MAX_LENGTH_SKILL = 100;

	const [username, setUsername] = useState("")
	const [openModal, setOpenModal] = useState(false)
	const [previewUser, setPreviewUser] = useState({ ...user })

	const [formFields, setFormFields] = useState({
		oneLiner: "",
		presentation: "",
		skill: ""
	})

	const handleUsernameFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value)
	}

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
		tempUser.presentation = formFields.presentation;
		tempUser.oneLiner = formFields.oneLiner;
		tempUser.skill = formFields.skill;

		setPreviewUser(tempUser);
		console.log(previewUser)
		toggleOpenModal();
	}

	useEffect(() => {
		console.log(formFields.oneLiner)
	}, [formFields.oneLiner])

	// TODO: Separate out into components?
	return (
		<>
			<form id="editprofile" onSubmit={(e) => handleSubmit(e)}
				className="flex flex-col gap-10 justify-center items-center border-2 rounded-md p-5 py-10 xs:p-20 max-w-lg  bg-white">

				<div className="flex flex-col">
					<div className=" rounded-full max-w-[176px] max-h-[176px] mx-auto overflow-clip ring-2 ring-n-dark" >
						<PlaceholderUserImage></PlaceholderUserImage>
					</div>
					<div className="text-center text-2xl text-n-purple" >
						<div className=" bg-gradient-to-r from-transparent to-transparent via-black h-0.5  w-3/4  mx-auto"></div>
						{user.username}
					</div>
				</div>

				<div className="w-full flex flex-col">
					<FormLabel htmlFor="username" >{"Username"}</FormLabel>
					<input id="username" type="text" name="userName" placeholder={user.username} maxLength={MAX_LENGTH_USERNAME}
						onChange={handleUsernameFieldChange}
						className="rounded ring-1 ring-n-dark px-4 py-1 font-serif text-lg outline-n-purple-light" />
					<span className="text-xs font-arial cursor-default text-gray-500 place-self-end">{`${MAX_LENGTH_USERNAME} characters max`}</span>
				</div>

				<div className="w-full flex flex-col">
					<FormLabel htmlFor="oneliner" > {"Write a short and sweet one-liner."} </FormLabel>
					<textarea id="oneliner" name="oneLiner" placeholder={"\"A movie-fanatic who loves cats!\""} maxLength={MAX_LENGTH_ONELINER} rows={3}
						onChange={handleFieldChange}
						className="rounded ring-1 ring-n-dark px-4 py-1 font-serif text-lg outline-n-purple-light" />
					<span className="text-xs font-arial cursor-default text-gray-500 place-self-end">{`${MAX_LENGTH_ONELINER - formFields.oneLiner.length} characters remaining`}</span>
				</div>

				<div className="w-full flex flex-col">
					<FormLabel htmlFor="presentation" >{"Write a short presentation of who you are."} </FormLabel>
					<textarea id="presentation" name="presentation" placeholder={"Do you have any particular interests?\nDo you live somewhere exciting?"} maxLength={MAX_LENGTH_PRESENTATION} rows={6}
						onChange={handleFieldChange}
						className="rounded ring-1 ring-n-dark px-4 py-1 font-serif text-lg outline-n-purple-light" />
					<span className="text-xs font-arial cursor-default text-gray-500 place-self-end">{`${MAX_LENGTH_PRESENTATION - formFields.presentation.length} characters remaining`}</span>
				</div>

				<div className="w-full flex flex-col">
					<FormLabel htmlFor="skill">{`A surprising fact about yourself.`} </FormLabel>
					<FormLabel htmlFor="skill">{`The more random the better!`} </FormLabel>
					<textarea id="skill" name="skill" placeholder={"Can you wiggle your ears?\nHave you written a book?\nDo you hold a Guinness World Record?"} maxLength={MAX_LENGTH_SKILL} rows={4}
						onChange={handleFieldChange}
						className="rounded ring-1 ring-n-dark px-4 py-1 font-serif text-lg outline-n-purple-light" />
					<span className="text-xs font-arial cursor-default text-gray-500 place-self-end">{`${MAX_LENGTH_SKILL - formFields.skill.length} characters remaining`}</span>
				</div>

				<div className="flex justify-between w-full">
					<button onClick={handlePreview}>Preview Profile</button>
					<button>Update Profile</button>
				</div>
			</form>
			<EmployeeModal isOpen={openModal} toggleOpen={toggleOpenModal} employee={previewUser} />
		</>
	)
}

export default EditProfileForm