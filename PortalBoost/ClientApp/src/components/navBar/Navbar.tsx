import { RiSuitcaseLine } from 'react-icons/ri'
import { AiOutlineTeam } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import MenuItem from './MenuItem'

const Navbar: React.FC<{}> = () => {
	const auth = useAuth();

	//TODO: Animation when expanding menu
	return (
		<div className="fixed top-0 left-0 z-40
		 bg-n-blue shadow-lg 
		 w-14 overflow-clip max-w-[175px] xl:w-full hover:w-full transition-width ease-in-out duration-300">

			<div className="mt-40 pt-6 m-2 text-black p-3 h-screen flex items-start relative ">

				<ul className="flex flex-col justify-evenly gap-10 ">

					<MenuItem link='' text='home' icon={<AiOutlineHome />} ></MenuItem>

					<MenuItem link='employees' text='employees' icon={<AiOutlineTeam />} ></MenuItem>

					<MenuItem link='companies' text='clients' icon={<RiSuitcaseLine />} ></MenuItem>

					<MenuItem link='' text='log out' icon={<IoLogOutOutline />} logout={auth.logout} ></MenuItem>

				</ul>

			</div>
		</div>
	)
}

export default Navbar



