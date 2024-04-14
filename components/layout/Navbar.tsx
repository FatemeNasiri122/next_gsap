"use client"
import { FaGithub } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { open, openSideBar } from "@/app/lib/features/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";

const Navbar: React.FC = () => {
    const sidebarStatus = useAppSelector(open);
    const dispatch = useAppDispatch();

    return <nav className="w-full bg-midnight-300 h-16 flex justify-between items-center px-4 md:px-10 transition-all">
        <FaGithub className="size-8 text-gray-100" />
        <button onClick={() => dispatch(openSideBar(!sidebarStatus))} className="md:hidden">
            <IoMenuOutline className="text-gray-100 size-8 " />
        </button>
    </nav>
}

export default Navbar;