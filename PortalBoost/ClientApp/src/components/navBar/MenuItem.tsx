import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";

const MenuItem = ({ link, icon, text, logout }: { link: string, icon: React.ReactNode, text: string, logout?: () => void }) => {

	return (

		<li onClick={logout} >
			<Link to={`/${link}`} className="shadow-sm md:shadow-none  p-4 rounded hover:text-n-turquoise-dark ease-in-out duration-300 hover:cursor-pointer flex justify-start gap-4 items-center ">
				<div className='md:-ml-5'>
					<p className="font-bold text-2xl" >
						{icon}
					</p>
				</div>
				<p className='font-bold'>{text}</p>
			</Link>
		</li >

	)
}

export default MenuItem;