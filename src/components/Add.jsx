import { VideoCameraBack } from '@mui/icons-material'
import { EmojiEmotions } from '@mui/icons-material'
import { PersonAdd } from '@mui/icons-material'
import { DateRange } from '@mui/icons-material'
import { Image } from '@mui/icons-material'
import { Add as AddIcon } from '@mui/icons-material'
import { Box, IconButton, Tooltip, Typography, Fab, Modal, styled, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    
})
const Userbox = styled(Box)({
    display:"flex",
    alignItems: "center",
   
    
})


const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={(e)=>setOpen(true)} title="add" sx={{position:'fixed', bottom:20 , left:{xs:"calc(50%)", md:30}}}>
      <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<StyledModal
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
    <Typography variant="h6" fontWeight={600} color='gray' textAlign="center"> Create Post</Typography>
    <Userbox >
      <Avatar sx={{width:"30px", height:"30px",marginRight:"8px"}} src='https://i0.wp.com/plainmagazine.com/wp-content/uploads/2016/01/content_plain-magazine-biorsi-05.jpg?ssl=1'/>
      <Typography variant='span'>Jonny Boy</Typography>
      </Userbox>
      <TextField
          sx={{ width:'100%', marginTop:'20px'}}
          id="standard-multiline-static"
          multiline
          rows={2}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction='row' gap={2} mt={2} mb={3}>
          <EmojiEmotions color='otherColor'/>
          <Image color='secondary'/>
          <VideoCameraBack color='success'/>
          <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup
        fullWidth
         variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:'100px'}}>
  <DateRange/>
  </Button>
  
</ButtonGroup>
  </Box>
</StyledModal>
</>
  )
}

export default Add
