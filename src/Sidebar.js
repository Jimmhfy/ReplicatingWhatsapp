import React from 'react'
import "./Sidebar.css"
import SidebarChat from "./SidebarChat.js";
import {DonutLarge, Chat, MoreVert} from '@mui/icons-material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton} from '@mui/material';
 

function Sidebar() {
  return (
    <div className='sidebar'> 
        <div className='sidebar__header'>
                <Avatar src='https://media-exp1.licdn.com/dms/image/D5635AQFQfy8rCcynog/profile-framedphoto-shrink_400_400/0/1645283815826?e=1648076400&v=beta&t=0eqqpx7dGrtlTNOgyIhA6yV4yl1wBsvuyOIihhbH0SA'/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLarge/>
                </IconButton>
                <IconButton>
                    <Chat/>
                </IconButton> 
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlinedIcon/>
                <input placeholder='Search or start new chat' type="text" />
            </div>
        </div>

        <div className="sidebar__chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
    
  )
}

export default Sidebar