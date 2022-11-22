import EmployeeModal from "../../employee/EmployeeModal";
import FormLabel from "./FormLabel";







// Profile Header
// Inputs 
// Info
// Preview Modal button + Save


// Oneliner - max 100
// Presentation - max 280
// Skill - max 100

// OneLiner
// Presentation
// Skill
// Title?

const EditProfileForm = () => {


	const MAX_LENGTH_ONELINER = 100;
	const MAX_LENGTH_PRESENTATION = 280;
	const MAX_LENGTH_SKILL = 100;

	return (
		<form id="editprofile" className="flex flex-col  justify-center items-center border-2 rounded-md p-5 py-10 xs:p-20 max-w-lg  bg-white">

			<div className="w-full flex flex-col">

				<FormLabel htmlFor="username" text="" />
				<input id="username" type="text" placeholder="Username"
					className="rounded ring-1 ring-n-dark px-4 py-1 font-mono" />
			</div>

			<div className="w-full flex flex-col">

				<FormLabel htmlFor="oneliner" text="" />
				<textarea id="oneliner" name="oneliner" placeholder="oneliner" maxLength={MAX_LENGTH_ONELINER} rows={3}
					className="rounded ring-1 ring-n-dark px-4 py-1 font-mono " />
			</div>

			<div className="w-full flex flex-col">

				<FormLabel htmlFor="presentation" text="" />
				<textarea id="presentation" name="presentation" placeholder="presentation" maxLength={MAX_LENGTH_PRESENTATION} rows={6}
					className="rounded ring-1 ring-n-dark px-4 py-1 font-mono w-full" />
			</div>

			<div className="w-full flex flex-col">

				<FormLabel htmlFor="skill" text="" />
				<textarea id="skill" name="skill" placeholder="skill" maxLength={MAX_LENGTH_SKILL} rows={3}
					className="rounded ring-1 ring-n-dark px-4 py-1 font-mono w-full" />
			</div>

		</form>
	)
}

export default EditProfileForm