import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Skeleton, Typography } from '@mui/material';

export default function ResultCard({location,price}) {
  return (
   <Card variant='outlined'>
    <Skeleton variant='rectangular' height={'200px'}></Skeleton>
    <CardContent>
      <Typography p>Rs {price}/month</Typography>
      <Typography p>{location}</Typography>
      <Typography p>ADDITIONAL ADDRESS</Typography>

    </CardContent>
   </Card>
  )
}
