import { AiOutlineUser } from "react-icons/ai"

const PlaceholderUserImage = () => {

	return (
		<div className=" from-n-dark to-slate-600 bg-gradient-to-br  p-10 mx-auto "> <AiOutlineUser className="text-8xl text-n-offwhite filter opacity-90 drop-shadow-[4px_4px_4px_black]" /> </div>
	)
}


interface PlaceholderUserImageContainerProps {
	children?: React.ReactNode
}

const PlaceholderUserImageContainer = (props: PlaceholderUserImageContainerProps) => {

	return (
		<div className=" rounded-full max-w-[176px] max-h-[176px] mx-auto overflow-clip ring-2 ring-n-dark cursor-pointer group-hover:scale-110 transition-transform" >
			{props.children}
		</div>
	)
}

export {
	PlaceholderUserImage,
	PlaceholderUserImageContainer
}