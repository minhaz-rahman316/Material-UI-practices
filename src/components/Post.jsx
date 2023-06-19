import { Box } from '@mui/material'
import { Favorite } from '@mui/icons-material'
import { Share } from '@mui/icons-material'
import { MoreVert } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <Box>
       <Card sx={{margin:5}}>
      <CardHeader sx={{backgroundColor: 'secondary.light'}}
        avatar={
          <Avatar sx={{ bgcolor: '#4caf50' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height='20%'
        image="https://i0.wp.com/plainmagazine.com/wp-content/uploads/2016/01/content_plain-magazine-biorsi-05.jpg?ssl=1"
        alt="Paella dish"
      />
      <CardContent sx={{backgroundColor: 'secondary.main'}}>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions sx={{backgroundColor: 'secondary.main'}}  disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<Favorite />} checkedIcon={<Favorite color='error' />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share color='otherColor' />
        </IconButton>
        
      </CardActions>
      
    </Card>
    </Box>
  )
}

export default Post
