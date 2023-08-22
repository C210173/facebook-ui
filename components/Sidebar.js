import React from "react";
import SidebarItem from "./SidebarItem";
import { ImUsers } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { RiFlag2Line } from "react-icons/ri";
import { AiOutlineDownCircle } from "react-icons/ai";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-xl cursor-pointer ">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
          alt="avatar"
        />
        <p className="hidden sm:inline-flex font-medium">
          {session?.user.name}
        </p>
      </div>
      <SidebarItem Icon={ImUsers} value="Friends" />
      <SidebarItem Icon={MdGroups} value="Groups" />
      <SidebarItem Icon={BsStopwatch} value="Memories" />
      <SidebarItem Icon={RiFlag2Line} value="Saved" />
      <SidebarItem Icon={MdOutlineOndemandVideo} value="Videos" />
      <SidebarItem Icon={AiOutlineDownCircle} value="See more" />
    </div>
  );
};

export default Sidebar;
