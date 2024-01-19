import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { TbClipboardList } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useSelector } from "react-redux";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { RootState } from "@/utils/store";

export default function Sidebar() {
    const { user } = useSelector((state: RootState) => state.profile);
    const isVerified = user.isVerified;
    const currentPath = window.location.pathname;
    
    return (
        <div className="flex flex-col items-start py-4 h-full justify-between mr-10 ml-5">
            <div className="w-full">
               {user && user.role==='institution' && <Button className={`${isVerified ?"bg-green-700/20 text-green-700" :"bg-red-700/20 text-red-700" }  rounded-xl`}>Status: {isVerified ? "Approved" : "Pending" }</Button>}
                <div className="w-full mt-16 flex flex-col gap-4">
                    {user && user.role === 'institution' && user.isVerified && !user.isDeleted && 
                    <div className="flex items-center p-3 gap-x-2 text-zinc-400 font-bold text-lg hover:bg-[#1F2937] hover:text-[white] w-full h-10 rounded-[8px]">
                        <TbClipboardList />
                        <Dialog>
                            <DialogTrigger asChild className=" cursor-pointer hover:bg-bg-[#1F2937]">
                                <p className="mb-1">List Organ</p>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md ">
                                <DialogHeader>
                                    <DialogTitle className="mb-10">Please enter organ details</DialogTitle>
                                </DialogHeader>
                                <DialogFooter className="sm:justify-center">
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>}
                    <Link
                        to="/dashboard"
                        className={`flex items-center p-3 gap-x-2 text-zinc-400 font-bold text-lg ${currentPath==='/dashboard' ?"bg-[#1F2937] text-white": ""} hover:bg-[#1F2937] hover:text-[white] w-full h-10 rounded-[8px]`}
                    >
                        <AiOutlineHome />
                        <p>Dashboard</p>
                    </Link>
                    <Link
                        to="/myorgans"
                        className={`flex items-center p-3 gap-x-2 text-zinc-400  ${currentPath==='/myorgans' ?"bg-[#1F2937] text-white": ""} font-bold text-lg hover:bg-[#1F2937] hover:text-[white] w-full h-10 rounded-[8px]`}
                    >
                        <AiOutlineHome />
                        <p>My Organs</p>
                    </Link>
                    <div className={`flex items-center p-3 gap-x-2 text-zinc-400  font-bold text-lg hover:bg-[#1F2937] hover:text-[white] w-full h-10 rounded-[8px] cursor-pointer`}>
                        <FiLogOut />
                        <p>Log Out</p>
                    </div>
                </div>
            </div>
            <div className="flex rounded-full  items-center gap-x-3 font-bold text-lg hover:bg-[#1F2937] text-[white] w-full h-10 cursor-pointer">
                <Avatar className="bg-red">
                    <AvatarFallback>
                        {user?.name?.charAt(0)}
                    </AvatarFallback>
                </Avatar>
                <p>{user.name}</p>
            </div>
        </div>
    )
}
