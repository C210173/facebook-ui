import React from "react";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className="  hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name="Nguyễn Thị Hồng Phụng"
        src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-1/356238852_3629300653960259_8570410866804522329_n.jpg?stp=cp6_dst-jpg_p74x74&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=64xoX3H2gyUAX9oZds1&_nc_ht=scontent-nrt1-1.xx&oh=00_AfAKAiucpMX_AIV_RPFK69kne1pbGDF3SmW7HqaB10vgOA&oe=64E7DCEB"
        status="online"
      />
      <Contacts
        name="Mai Văn Hiếu"
        src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-1/33850538_2035411616673333_708401194153803776_n.jpg?stp=c0.19.74.74a_cp0_dst-jpg_p74x74&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=EMU1E55c0_0AX9zn2NZ&_nc_ht=scontent-nrt1-1.xx&oh=00_AfAKijvTskkWy-KCdgGAxWl8KKCLtDnvuda7XgrUlYp4Jw&oe=650A76F3"
        status="offline"
      />
      <Contacts
        name="Nguyễn Thị Mỹ Duyên"
        src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-1/365802275_2437345083113035_3059598552739497100_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SJHt9-uMhvAAX-CIbYq&_nc_oc=AQnMoIJfHqhyzG9q0N6tKmbIasBFZL0KMLFprd4xS8bohiYrfNRKARSArIbQTue3VucNy4q0xWyK7rbH0775G8pF&_nc_ht=scontent-nrt1-1.xx&oh=00_AfBLw56pm8IvyZfdG5aC7_Xzgsvg3uWfmOxvfgHGF6p7Cw&oe=64E7E285"
        status="online"
      />
    </div>
  );
};

export default RightSidebar;
