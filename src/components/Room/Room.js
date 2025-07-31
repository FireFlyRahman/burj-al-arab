import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Button,
  Typography
} from '@mui/material';

import { red } from '@mui/material/colors';

import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import WcIcon from '@mui/icons-material/Wc';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { useNavigate } from 'react-router-dom';

export default function Room({ room }) {
  const navigate = useNavigate();

  const handleBook = (bedType) => {
    navigate(`/book/${bedType}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label={`${room.bedType} room avatar`} sx={{ bgcolor: red[500] }}>
            {room.avatar}
          </Avatar>
        }
        title={room.title}
      />
      <CardMedia
        sx={{ height: 0, paddingTop: '56.25%' }}
        image={room.imgUrl}
        title={`${room.title} image`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" component="p">
          {room.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Number of beds">
          <LocalHotelIcon /> {room.bed}
        </IconButton>
        <IconButton aria-label="Room capacity">
          <WcIcon /> {room.capacity}
        </IconButton>
        <IconButton aria-label="Room price">
          <AttachMoneyIcon /> {room.price}
        </IconButton>
        <Button onClick={() => handleBook(room.bedType)} variant="contained" color="primary">
          Book
        </Button>
      </CardActions>
    </Card>
  );
}
