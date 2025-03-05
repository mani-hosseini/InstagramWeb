import {Link} from "react-router-dom";
import {FaHome, FaInstagram, FaSearch, FaPlusSquare, FaUser} from "react-icons/fa";
import {useState} from "react";

const Sidebar = () => {
    const [show, setShow] = useState(true);

    const toggle = () => {
        console.log('Search Clicked!');
        setShow(!show);
    };

    return (
        <div
            className={`p-4 fixed border-r border-r-gray-300 transition-all duration-300 ${show ? 'w-60' : 'w-16'}`}>
            {
                show ? (
                    <img src="../../src/assets/signup/insta%20logo.png" className="mb-6" alt=""/>
                ) : (
                    <FaInstagram className="w-5 h-5 text-[#E4405F] mb-6"/>
                )
            }
            <ul className={`space-y-6 ${show ? 'mt-0' : 'mt-10'}`}>
                <li>
                    <Link to="/home"
                          className="flex items-center gap-3 text-lg text-[#262626] hover:text-black transition-all">
                        <FaHome className="w-5 h-5"/>
                        {show && 'Home'}
                    </Link>
                </li>
                <li>
                    <button
                        onClick={toggle}
                        className="flex cursor-pointer items-center gap-3 text-lg text-[#262626] hover:text-black transition-all w-full text-left">
                        <FaSearch className="w-5 h-5"/>
                        {show && 'Search'}
                    </button>
                </li>
                <li>
                    <Link to="/create"
                          className="flex items-center gap-3 text-lg text-[#262626] hover:text-black transition-all">
                        <FaPlusSquare className="w-5 h-5"/>
                        {show && 'Create'}
                    </Link>
                </li>
                <li>
                    <Link to="/profile"
                          className="flex items-center gap-3 text-lg text-[#262626] hover:text-black transition-all">
                        <FaUser className="w-5 h-5"/>
                        {show && 'Profile'}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
