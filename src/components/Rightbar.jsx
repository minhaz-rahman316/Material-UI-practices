import { Avatar, AvatarGroup, Badge, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography, styled } from '@mui/material'
import React from 'react'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));





const Rightbar = () => {
  return (
    
        <Box   flex={2} p={2} sx={{display:{xs:"none" ,sm:"block"}}}>

        <Box position='fixed'>
        <Typography variant="h6" fontWeight={300}>Online Friends</Typography>

        <AvatarGroup max={6}>
        
        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
      </StyledBadge>

          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
          <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
          <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
          <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
          <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
         </AvatarGroup>

        <Typography variant='h6' fontWeight={300}>Latest Images</Typography>
        <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
 
    <ImageListItem >
      <img
        src= "https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        
        
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src= "https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        
        
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src= "https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        
        
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src= "https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        
        
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src= "https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        
        
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src= "https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        
        
        loading="lazy"
      />
    </ImageListItem>

        </ImageList>
        <Typography variant='h6' fontWeight={300}>Latest Conversations</Typography>
        <List p={5} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

        </Box>

        </Box> 
    
  )
}

export default Rightbar
