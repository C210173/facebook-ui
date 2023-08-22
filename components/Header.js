import Image from "next/image";
import { HiOutlineSearch, HiOutlineHome, HiUserGroup } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillMessage, AiFillBell, AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-14">
      {/* left */}
      <div className="flex min-w-fit">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
          height={40}
          width={40}
          alt=""
        />
        <div className="flex items-center space-x-2 px-6 ml-2 rounded-full bg-gray-100 text-gray-500">
          <HiOutlineSearch size={20} />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none outline-none flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex flex-grow justify-center mr-16">
        <div className="flex items-center">
          <div className="flex items-center  h-12 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <HiOutlineHome className="mx-auto text-blue-500" size={25} />
          </div>
          <div className="flex items-center h-12 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <MdOutlineOndemandVideo
              className="mx-auto text-gray-500"
              size={25}
            />
          </div>
          <div className="flex items-center h-12 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <AiOutlineShop className="mx-auto text-gray-500" size={25} />
          </div>
          <div className="flex items-center h-12 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <HiUserGroup className="mx-auto text-gray-500" size={25} />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex items-center space-x-2 justify-end min-w-fit mr-2">
        <CgMenuGridO
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillMessage
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillBell
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <div className="mt-1">
          <Image
            onClick={signOut}
            src={session?.user.image}
            height={40}
            width={40}
            className="rounded-full cursor-pointer"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
