import { AppBar, Box, InputBase, styled, Toolbar , Typography , Badge, Avatar, Menu, MenuItem} from '@mui/material'
import React from 'react'
import { Rocket,Search} from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { Notifications} from '@mui/icons-material'
import { useState } from 'react'



const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent: "space-between",
})

const Searchbar = styled("div")(({theme})=>({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"

}))
const Icons = styled(Box)(({theme})=>({
  display: "none",
  gap:"20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}))

const Userbox = styled(Box)(({theme})=>({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }
}))
const Navbar = () => {
  const [open, setOpen] = useState(false)


  return (
    
      <AppBar position='sticky'>
      <StyledToolbar>
      <Typography variant='h6' sx={{display:{xs:"none" ,sm:"block"}}}>
        SOCIAL APP
      </Typography>
      <Rocket sx={{display:{xs:"block" ,sm:"none"}}}/>

      <Searchbar ><InputBase placeholder='Search...'/></Searchbar>
      
      <Icons>
      <Badge badgeContent={12} color="error">
      <Email  />
      </Badge>
      <Badge badgeContent={12} color="error">
      <Notifications  />
      </Badge>
      <Avatar sx={{width:"30px", height:"30px"}} src='https://i0.wp.com/plainmagazine.com/wp-content/uploads/2016/01/content_plain-magazine-biorsi-05.jpg?ssl=1'
        onClick={(e)=>setOpen(true)}
      />
      </Icons>

      <Userbox onClick={(e)=>setOpen(true)}>
      <Avatar sx={{width:"30px", height:"30px"}} src='https://i0.wp.com/plainmagazine.com/wp-content/uploads/2016/01/content_plain-magazine-biorsi-05.jpg?ssl=1'/>
      <Typography variant='span'>Jonny Boy</Typography>
      </Userbox>

      </StyledToolbar>
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
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
    
  )
}

export default Navbar
