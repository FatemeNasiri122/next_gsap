"use client"
import { open, openSideBar } from "@/app/lib/features/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { MdDoubleArrow } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navItems = [
    {
        id: 1,
        name: "home",
        icon: <IoMdHome className="size-8" />,
        link: "/",
    },
    {
        id: 2,
        name: "about",
        icon: <IoIosInformationCircle className="size-8" />,
        link: "/about",
    },
]


const Sidebar: React.FC = () => {
    const sidebarStatus = useAppSelector(open);
    const dispatch = useAppDispatch();
    const pathname = usePathname();

    return <>
        <nav className={`bg-midnight-200 min-h-screen transition-all fixed z-30 md:relative ${sidebarStatus ? "w-full md:w-80" : " w-0 md:w-20 overflow-hidden"}`}>
            <ul className="pt-10 px-4">
                <li className={`flex ${sidebarStatus ? "justify-end" : "justify-center"}`}>
                    <button
                        className="p-3 rounded-md  flex justify-center items-center bg-midnight-400"
                        onClick={() => dispatch(openSideBar(!sidebarStatus))}>
                        <MdDoubleArrow
                            className={`transiton-all hidden md:inline text-gray-100 ${sidebarStatus ? "rotate-180" : ""}`} />
                        <IoCloseSharp className="text-gray-100 md:hidden" />
                    </button>
                </li>
                {navItems.map(item => <li key={item.id}>
                    <Link href={item.link} className={`mt-4 flex items-center ${sidebarStatus ? "justify-start" : "justify-center"}`}>
                        <span className={`${pathname === item.link ? "text-primary" : "text-gray-100"} `}>
                            {item.icon}
                        </span>
                        {sidebarStatus ? <span className={`capitalize ml-2 ${pathname === item.link ? "text-primary" : "text-gray-100"}`}>{item.name}</span> : ""}
                    </Link>
                </li>)}
            </ul>

        </nav>
    </>
}

export default Sidebar;