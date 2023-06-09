import React from 'react'
import {
 Card,
 CardActionArea,
 CardActions,
 CardMedia,
 CardContent,
 Button,
 Typography
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import img from './img/ak.jpg';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
   
  });
  export default function ProjectCard() {
  const classes = useStyles();
  return (
    <>
    <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
    </Card>
    </>
  )
}
