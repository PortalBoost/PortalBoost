import { Link } from "react-router-dom";

// text-4xl mb-10 hover:text-purple-800 flex items-center justify-center text-4xl 

const Footer = () => {

    return (

        <footer className="bg-n-dark text-white max-h-half mt-10 sticky w-full">
            <div className="container flex flex-col flex-wrap 
                px-4 pt-10 mx-auto md:items-center
                lg:items-start md:flex-row md:flex-nowrap
                text-xl">
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                    <div className="text-4xl mb-10 hover:text-purple-800">
                            <Link to="/">
                                PortalBoost
                            </Link>
                        </div>
                </div>
                <div className="justify-between w-full mt-4 text-center lg:flex">
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest">
                            Grupering
                        </h2>
                        <ul className="mb-8 space-y-2 list-none">
                            <li>
                                <a className="hover:text-purple-800">Länk 1</a>
                            </li>
                            <li>
                                <a className="hover:text-purple-800">Länk 2</a>
                            </li>
                            <li>
                                <a className="hover:text-purple-800">Länk 3</a>
                            </li>
                            <li>
                                <a className="hover:text-purple-800">Länk 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest">
                            Grupering
                        </h2>
                        <ul className="mb-8 space-y-2 list-none">
                            <li>
                                <a className="hover:text-purple-800">Länk 1</a>
                            </li>
                            <li>
                                <a className="hover:text-purple-800">Länk 2</a>
                            </li>
                            <li>
                                <a className="hover:text-purple-800">Länk 3</a>
                            </li>
                            <li>
                                <a className="hover:text-purple-800">Länk 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest">
                            Grupering
                        </h2>
                        <ul className="mb-8 space-y-2 list-none">
                            <li>
                                <a className="hover:text-purple-800">Länk 1</a>
                            </li>
                            <li>
                                <a className="hover:text-purple-800">Länk 2</a>
                            </li>
                            <li>
                                <a className="hover:text-purple-800">Länk 3</a>
                            </li>
                            <li>
                                <a className="hover:text-purple-800">Länk 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="flex justify-center">

                <p className="text-xl text-gray-400">
                    All Rights Reserved @PortalBoost
                </p>
            </div>
        </footer>
    )
}

export default Footer
