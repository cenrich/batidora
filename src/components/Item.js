import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const Item = ({ image, title, content }) =>{
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    image={image}
                    className='item-image'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {title}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p' className='body2'>
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Item