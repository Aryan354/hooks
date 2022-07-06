import React from 'react'
import {Box,BreakPoints} from "@mui/material"
import {AppBar, styled, Toolbar} from "@mui/material"
import {Typography} from "@mui/material"
import PetsSharpIcon from '@mui/icons-material/PetsSharp';
import InputBase from '@mui/material/InputBase';
import { Avatar, Badge,  Notification} from '@mui/material';
import * as Mui from '@material-ui/core';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const StyledToolBar = styled(Toolbar)
(
{
display: "flex",
justifyContent: "space-between",
backgroundColor: "#20720D",
gap: "10px"
}
);

const Search = styled("div")(({theme})=>({
backgroundColor: "white",
padding: "0 10px",
borderRadius: "0.5px",
width: "50%"
}));
const Icon = styled(Box)(({theme})=>({
alignItems: "center",
justifyContent: "right",
gap: "20px",
display: "flex",
padding: "0 10px",
borderRadius: "0.5px",
width: "50%"
}));

const Navbar= () =>
{
const [open, setOpen]= React.useState(false)

return(
<AppBar position="sticky" sx={{
backgroundColor: "#FDE100", height: "10vh"
}} maxWidth="xs"   >
<StyledToolBar>
    <Toolbar>
        <Box
            display= "flex"
            component="img"
            sx={{
            height: 70,
            }}
            alt="John Deere "
            src="https://pluspng.com/img-png/john-deere-logo-png-john-deere-logo-and-symbol-design-history-and-evolution-1600x1103.png"
        />
    </Toolbar>

    <Typography variant = "h6" color= "#F7F0F0" fontWeight= "600"  sx={{
    display:{xs: "none", sm: "block"}, width: "700px" }}>Team SPIFFTACULARS</Typography>
      <PersonSearchRoundedIcon/>
      <Search>
       <InputBase placeholder="Search Members.."> </InputBase>
        <PersonSearchRoundedIcon/>
        </Search>
        <Icon>
        <Badge badgeContent= {2} color= "error" variant= "dot">
        <MailIcon/>
        </Badge>
         <Badge badgeContent= {2} color= "error" variant= "dot">
                <NotificationsNoneIcon/>
         </Badge>
        <Avatar src= " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFiqC84DSqmsBMpBIVNuaJSYR93xfKw64t3g&usqp=CAU"sx={{ bgcolor: "red"  }}
        onClick= {e=>setOpen(true)}> AK</Avatar>
        </Icon>
    </StyledToolBar>


     <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e)=>setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
          </Menu>
</AppBar>
);
}

export default Navbar;