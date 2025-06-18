import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Avatar, Typography, List, ListItem, ListItemText, ListItemIcon, Button, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { Home, Work, EditNote, Description, ContactMail, Menu as MenuIcon } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import { useDrawer } from './DrawerContext';
import resume from "../assets/SubhashResume.pdf"
import myDP from "../assets/myDP.jpg"

const DrawerForDesktopView = () => {
  return (
    <Box sx={{
      width: { xs: '80%', sm: 250 },
      backgroundColor: '#111',
      color: 'white',
      height: '98vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 2,
      fontFamily: 'Poppins, sans-serif',
      position: 'fixed',
      alignItems: 'center',
    }}>

      {/* profile  */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Box marginBottom={20} marginTop={5} justifyContent='center'>
          <Avatar src={myDP} alt="Profile" sx={{ width: 150, height: 150, mb: 2, backgroundColor: "#fff" }} />
          <Typography variant="h4" sx={{ color: "#fff" }} >Subhash Yadav</Typography>
        </Box>


        {/* list of tabs */}
        <List component="nav" sx={{ flexGrow: 1, width: '100%' }}>
          <ListItem button component={Link} to="/subhashydv">
            <ListItemIcon sx={{ color: 'white' }}><Home /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/workExperience">
            <ListItemIcon sx={{ color: 'white' }}><Work /></ListItemIcon>
            <ListItemText primary="Work Experience" />
          </ListItem>
          <ListItem button component={Link} to="/portfolio">
            <ListItemIcon sx={{ color: 'white' }}><EditNote /></ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button component={Link} to="/educationAndExperience">
            <ListItemIcon sx={{ color: 'white' }}><Description /></ListItemIcon>
            <ListItemText primary="Education and Skills" />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemIcon sx={{ color: 'white' }}><ContactMail /></ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: "15px" }}>

            <Button variant="outlined"

              component="a"
              href={resume}
              download="Jaya.pdf"
              sx={{
                marginTop: "10px",
                borderColor: '#20C997', color: '#20C997', '&:hover': { backgroundColor: '#20C997', color: '#fff' },
                padding: "10px",
                fontFamily: "Poppins",
                width: "150px",
                border: "3px solid ",
                fontSize: "12px",

              }}
            >

              Download PDF

            </Button>
          </Box>
        </List>
      </Box>


      {/* footer */}
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: "15px" }}>
          <IconButton href="https://github.com/subhashydv">
            <GitHubIcon sx={{color:"#fff"}} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/subhashydv/">
            <LinkedInIcon sx={{color:"#fff"}} />
          </IconButton>

        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: "15px" }}>
          <Typography>Created by <b>SUBHASH YADAV</b></Typography>
        </Box>
      </Box>

    </Box>
  )
}

const Sidebar = () => {
  const { openDrawer, toggleDrawer } = useDrawer();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <>
      {isMobile ? (
        <Box>
          <Box sx={{ position: 'fixed', width: '100%', backgroundColor: '#111', color: 'white', padding: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: '#111', color: 'white', padding: 1 }}>
              <Typography sx={{ flexGrow: 1, color: "#fff", fontFamily: "Poppins", textDecoration: "none" }} component={Link} to="/subhashydv">Subhash Yadav</Typography>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer} sx={{ mr: 3 }}>
                <MenuIcon />
              </IconButton>
            </Box>

          </Box>
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={toggleDrawer}
            PaperProps={{
              sx: {
                width: 'calc(100% - 58px)',
                height: 'calc(100% - 56px)', // Adjust if needed for header height
                position: 'fixed',
                top: 12, // Adjust if needed for header height
                opacity: ".9",

              }
            }}
          >
            <DrawerForDesktopView />
          </Drawer>

        </Box>
      ) : (

        <DrawerForDesktopView />

      )}
    </>
  );
}

export default Sidebar;
