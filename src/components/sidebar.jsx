import {Link} from "react-router-dom";
import {FaHome, FaInstagram, FaSearch, FaPlusSquare, FaUser} from "react-icons/fa";
import {useState} from "react";

const Sidebar = () => {
    const [show, setShow] = useState(true);
    const [showDiv, setShowDiv] = useState(false);

    const toggle = () => {
        setShow(!show);
        setShowDiv(!showDiv);
    };

    return (
        <div
            className={`p-4 fixed bg-white shadow h-[600px] border-r border-r-gray-300 transition-all duration-300 ${show ? 'w-60' : 'w-16'}`}>
            {show ? (
                <img src="../../src/assets/signup/insta%20logo.png" className="mb-6" alt=""/>
            ) : (
                <FaInstagram className="w-5 h-5 text-[#E4405F] mb-6"/>
            )}

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
                {showDiv && (
                    <div
                        className="absolute top-0 left-full bg-white w-80 h-full p-4 shadow rounded-tr-xl rounded-br-xl border border-gray-300">
                        <h2 className="text-lg font-semibold mb-8">Search</h2>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full p-2 bg-[#EFEFEF] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="border-b border-gray-300 w-full mt-6"></div>
                        <div className="flex justify-between text-sm mt-2">
                            <button className=" cursor-pointer">Recent</button>
                            <button className="text-blue-500 cursor-pointer">Clear all</button>
                        </div>
                    </div>
                )}
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
