import * as React from 'react';
//import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
//import SaveIcon from '@mui/icons-material';
import Typography from '@mui/material/Typography';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Checkbox from '@mui/material/Checkbox';
import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import {Box, Container, Stack} from  "@mui/material"
function App () {
    return (
        <>
         <Box>
         <Navbar/>
         <Stack direction= "row" spacing={2} justifyContent="space-evenly">
        <Sidebar/>
         <Feed/>
         </Stack>
         </Box>
        </>
    );
}

export default App;
