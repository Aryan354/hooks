import React from 'react'
import {Box} from "@mui/material"
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GamesIcon from '@mui/icons-material/Games';
import SettingsIcon from '@mui/icons-material/Settings';
const Sidebar= () =>
{
return(
<>
 <List sx={{
 backgroundColor: "snow"}}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home" >
              <ListItemIcon>
              <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupsIcon/>
              </ListItemIcon>
              <ListItemText primary="Deere Connect" />
            </ListItemButton>
          </ListItem>
           <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <WorkspacePremiumIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Team scrum" />
                      </ListItemButton>
                    </ListItem>
            <ListItem disablePadding>
                       <ListItemButton>
                         <ListItemIcon>
                           <GamesIcon/>
                         </ListItemIcon>
                         <ListItemText primary="Beyond" />
                       </ListItemButton>
                     </ListItem>
            <ListItem disablePadding>
                       <ListItemButton>
                         <ListItemIcon>
                           <SettingsIcon/>
                         </ListItemIcon>
                         <ListItemText primary="Settings" />
                       </ListItemButton>
                     </ListItem>
            <ListItem disablePadding>
                       <ListItemButton>
                         <ListItemIcon>
                           <AccountBoxIcon/>
                         </ListItemIcon>
                         <ListItemText primary="Profile" />
                       </ListItemButton>
                     </ListItem>
 </List>
</>
);
}
export default Sidebar;
