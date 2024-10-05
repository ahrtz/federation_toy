import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import  { useState } from "react"
import ArchiveIcon from '@mui/icons-material/Archive';
import { Link } from "react-router-dom";

const BottomNav = () => {
    const pathName = window.location.pathname
    
    const [value,setValue] = useState(pathName)
    return( 
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
        showLabels 
        value = {value}
        onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        
        >
        <BottomNavigationAction label="Home" icon={<ArchiveIcon /> } component={Link} to={"/"} value={"/"}/>
        <BottomNavigationAction label="Board" icon={<ArchiveIcon />} component={Link} to={"/board"}  value={"/board"} />
    </BottomNavigation>
    </Paper>)
}

export default BottomNav