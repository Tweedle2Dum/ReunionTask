import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Skeleton, Typography,Box } from '@mui/material';
import { Image } from 'mui-image'

export default function ResultCard({location,price}) {
  return (
   <Card variant='outlined'>
{/*     <Skeleton variant='rectangular' height={'200px'}></Skeleton>
 */}    
  <Box maxHeight={'200px'} margin={'0 0 40px 0'}>
        <Image src='../../../assets/random.jpg'></Image>
        </Box>
 <CardContent>
      <Typography p>Rs {price}/month</Typography>
      <Typography p>{location}</Typography>
      <Typography p>ADDITIONAL ADDRESS</Typography>

    </CardContent>
   </Card>
  )
}
