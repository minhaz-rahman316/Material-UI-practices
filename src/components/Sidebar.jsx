import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Home } from '@mui/icons-material'
import { Store } from '@mui/icons-material'
import { Settings } from '@mui/icons-material'
import { AccountCircle } from '@mui/icons-material'
import { ModeNight } from '@mui/icons-material'

const Sidebar = () => {
  return (
    
      <Box  flex={1} p={2}
      sx={{display:{xs:"none" ,sm:"block"},
           backgroundColor:'primary.light'}}>
           <Box position='fixed'>
         <List >
          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#marketplace'>
              <ListItemIcon>
                <Store/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#settings'>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#profile'>
              <ListItemIcon>
                <AccountCircle/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          </List>
      </Box>
      </Box>
    
  )
}

export default Sidebar
