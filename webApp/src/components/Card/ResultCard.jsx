import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Skeleton, Typography,Box } from '@mui/material';
import { Image } from 'mui-image'

export default function ResultCard({location,price,type}) {
  return (
   <Card variant='outlined'>
{/*     <Skeleton variant='rectangular' height={'200px'}></Skeleton>
 */}    
  
    <Image src='/random.jpg' maxHeigth="200px"></Image>
        
 <CardContent>
      <Typography fontSize={'24px'} color={'primary'}>Rs {price}/month</Typography>
      <Typography p>{location}</Typography>
      <Typography p>ADDITIONAL ADDRESS</Typography>
      <Typography p>Property Type: {type}</Typography>

    </CardContent>
   </Card>
  )
}
