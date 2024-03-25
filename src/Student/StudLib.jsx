import { IoSettingsSharp } from "react-icons/io5";
import { FaHouseUser } from "react-icons/fa";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

export const DASHBOARD_SIDE_LINKS =[{
key:'Dashboard',
label:'Dashboard',
path:'/',
icon:<MdDashboard />
},
{
    key:'Profile',
    label:'Profile',
    path:'/profile',
    icon:<IoPerson />
    },
    {
        key:'Application',
        label:'Applications',
        path:'/status',
        icon:<MdOutlineSpeakerNotes />
        },
        {
            key:'Residence',
            label:'Residence',
            path:'/res',
            icon:<FaHouseUser />
            },
            {
                key:'Settings',
                label:'Settings',
                path:'/settings',
                icon:<IoSettingsSharp />
                }
]