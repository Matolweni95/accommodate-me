import { IoSettingsSharp } from "react-icons/io5";
import { FaHouseUser } from "react-icons/fa";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import Chart_fill from '../assets/Chart_fill.png';
import User from '../assets/User.png';
import Setting from '../assets/Setting.png';
import Folder from '../assets/Folder.png';
import Chat from '../assets/Chat.png';

export const DASHBOARD_SIDE_LINKS =[{
key:'Dashboard',
label:'Dashboard',
path:'/',
icon:Chart_fill
},
{
    key:'Profile',
    label:'Profile',
    path:'/profile',
    icon:User
    },
    {
        key:'Application',
        label:'Applications',
        path:'/status',
        icon:Folder
        },
        {
            key:'Issues',
            label:'Issues',
            path:'/issues',
            icon:Setting
            },
            {
                key:'Announcement',
                label:'Announcement',
                path:'/announcement',
                icon:Chat
                }
]