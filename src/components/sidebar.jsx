import {Link} from "react-router-dom";
import { FaInstagram, FaHome, FaSearch, FaPlusSquare, FaUser, FaTimes } from "react-icons/fa";



const Sidebar = () => {
    return (
        <div className="w-60 h-[600px] bg-[#FAFAFA] p-4 fixed border-r border-r-gray-300">
            <img src="../../src/assets/signup/insta%20logo.png" className={'mb-6'} alt=""/>
            <ul className="space-y-6">
                <li>
                    <Link to="/home" className="flex items-center gap-3 text-lg text-[#262626] hover:text-black transition-all">
                        <FaHome/> Home
                    </Link>
                </li>
                <li>
                    <Link to="/sesrch" className="flex items-center gap-3 text-lg text-[#262626] hover:text-black transition-all">
                        <FaSearch />
                        search
                    </Link>
                </li>
                <li>
                    <Link to="/create" className="flex items-center gap-3 text-lg text-[#262626] hover:text-black transition-all">
                        <FaPlusSquare />
                        Create
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="flex items-center gap-3 text-lg text-[#262626] hover:text-black transition-all">
                        <FaUser />
                        Profile
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
