import React from 'react';
import {Box} from "@mui/material";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { green, yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Accordion from '@mui/material/Accordion';
const Feed= () =>
{
return(
<>
 <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="UI">
            RY
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Contract Testing with Local API"
        subheader="May 23, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.pexels.com/photos/48753/pexels-photo-48753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="Docusign verifiction issue"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         The DocuSign electronic signature app provides consumers and professionals with a simple way to electronically sign and return documents from almost anywhere in the world, using practically any device.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>

        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>

        <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: green[500] }} aria-label="UI">
                    RY
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Contract Testing with Local API"
                subheader="May 23, 2022"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://images.pexels.com/photos/48753/pexels-photo-48753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Docusign verifiction issue"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                 The DocuSign electronic signature app provides consumers and professionals with a simple way to electronically sign and return documents from almost anywhere in the world, using practically any device.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>

              </CardActions>

                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                    aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                    stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and
                    peppers, and cook without stirring, until most of the liquid is absorbed,
                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                    mussels, tucking them down into the rice, and cook again without
                    stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don&apos;t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
    </Card>
</>
);
}
export default Feed;